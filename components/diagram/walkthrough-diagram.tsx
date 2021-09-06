import React, { useEffect, useState } from "react";
import createEngine, {
  DiagramModel,
  DefaultNodeModel,
  DefaultPortModel,
  DagreEngine,
  DiagramEngine,
  PathFindingLinkFactory,
} from "@projectstorm/react-diagrams";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { choiceGroupData } from "../../src/data/data";
import { useAppContext } from "../../src/hooks";

interface IProps {
  onlyUnlocked?: boolean;
}

const WalkthroughDiagram2: React.FC<IProps> = ({ onlyUnlocked = true }) => {
  const { walkthrough } = useAppContext();

  const [engine, setEngine] = useState<DiagramEngine>(null);
  const [dagreEngine, setDagreEngine] = useState<DagreEngine>(null);

  useEffect(() => {
    if (engine) return;

    initEngine();

    const de = new DagreEngine({
      graph: {
        rankdir: "LR",
        ranker: "network-simplex",
        marginx: 25,
        marginy: 25,
        nodesep: 50,
      },
      includeLinks: false,
    });
    setDagreEngine(de);
  }, []);

  useEffect(() => {
    if (!onlyUnlocked) return;
    updateDiagram();
  }, [walkthrough]);

  useEffect(() => {
    if (engine) redistribute();
  }, [engine]);

  const updateDiagram = () => {
    if (!engine) return;
    const model = engine.getModel();
    const nodes = model.getNodes();
    const links = model.getLinks();

    const wCodes = nodes.map((x) => x.getOptions().extras?.watchCode);

    const toUpdateWC = walkthrough.filter((x) => !wCodes.includes(x));

    const toUpdate = choiceGroupData.filter((x) =>
      toUpdateWC.includes(x.watchCode)
    );

    const ports: DefaultPortModel[] = [];

    for (const nds of model.getNodes()) {
      const a = nds.getPorts();
      const keys = Object.keys(a);

      for (const key of keys) {
        ports.push(a[key] as DefaultPortModel);
      }
    }

    for (const r of toUpdate) {
      const color =
        r.type === "start" ? "#2fa334" : r.type === "end" ? "red" : null;

      let node: DefaultNodeModel;
      if (r.type === "end") {
        node = new DefaultNodeModel({
          name: `${r.videoTitle} - ending #${r.ending.endingNumber}`,
          color,
        });
      } else node = new DefaultNodeModel({ name: r.videoTitle, color });

      node.getOptions().extras = { watchCode: r.watchCode };

      if (r.type !== "start") {
        if (r.type === "end") {
          const port = new DefaultPortModel(
            true,
            `${r.watchCode}-in`,
            r.ending.endingName
          );
          node.addPort(port);
          ports.push(port);
        } else {
          const port = new DefaultPortModel(true, `${r.watchCode}-in`);
          node.addPort(port);
          ports.push(port);
        }
      }

      for (const o of r.choices ?? []) {
        const port = new DefaultPortModel(
          false,
          `${o.nextChoiceGroupWatchCode}-out`,
          o.text
        );
        node.addPort(port);
        ports.push(port);
      }

      model.addNode(node);
    }

    for (const port of ports) {
      const opts = port.getOptions();
      if (!opts.in) {
        const p = ports.find(
          (x) =>
            x.getOptions().in &&
            x.getOptions().name.replace("-in", "") ===
              opts.name.replace("-out", "")
        );

        if (p) {
          const link = port.link(p);

          model.addLink(link);
        }
      }
    }

    redistribute();

    setTimeout(() => {
      redistribute();
    }, 800);
  };

  const initEngine = () => {
    const e = createEngine();

    const model = new DiagramModel();

    // const first = choiceGroupData.find((x) => x.type === "start");

    // const node = new DefaultNodeModel(first.videoTitle, "rgb(0,192,255)");

    // const rest = choiceGroupData.filter((x) => x.type !== "start");

    const dataset = onlyUnlocked
      ? choiceGroupData.filter((x) => walkthrough.includes(x.watchCode))
      : choiceGroupData;

    const ports: DefaultPortModel[] = [];

    for (const r of dataset) {
      const color =
        r.type === "start" ? "#2fa334" : r.type === "end" ? "red" : null;

      let node: DefaultNodeModel;
      if (r.type === "end") {
        node = new DefaultNodeModel({
          name: `${r.videoTitle} - ending #${r.ending.endingNumber}`,
          color,
        });
      } else node = new DefaultNodeModel({ name: r.videoTitle, color });

      node.getOptions().extras = { watchCode: r.watchCode };

      if (r.type !== "start") {
        if (r.type === "end") {
          const port = new DefaultPortModel(
            true,
            `${r.watchCode}-in`,
            r.ending.endingName
          );
          node.addPort(port);
          ports.push(port);
        } else {
          const port = new DefaultPortModel(true, `${r.watchCode}-in`);
          node.addPort(port);
          ports.push(port);
        }
      }

      for (const o of r.choices ?? []) {
        const port = new DefaultPortModel(
          false,
          `${o.nextChoiceGroupWatchCode}-out`,
          o.text
        );
        node.addPort(port);
        ports.push(port);
      }

      model.addNode(node);
    }

    for (const port of ports) {
      const opts = port.getOptions();
      if (!opts.in) {
        const p = ports.find(
          (x) =>
            x.getOptions().in &&
            x.getOptions().name.replace("-in", "") ===
              opts.name.replace("-out", "")
        );

        if (p) {
          const link = port.link(p);

          model.addLink(link);
        }
      }
    }

    model.setLocked(true);

    e.setModel(model);

    setEngine(e);
  };

  const redistribute = () => {
    if (!engine || !dagreEngine) return;

    const model = engine.getModel();

    dagreEngine.redistribute(model);

    engine
      .getLinkFactories()
      .getFactory<PathFindingLinkFactory>(PathFindingLinkFactory.NAME)
      .calculateRoutingMatrix();

    engine.repaintCanvas();
  };

  const handleMouse = (inside: boolean) => {
    if (inside) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
  };

  if (!engine) return null;

  return (
    <div
      style={{ height: 500 }}
      onMouseEnter={() => handleMouse(true)}
      onMouseLeave={() => handleMouse(false)}
      onTouchStart={() => handleMouse(true)}
      onTouchEnd={() => handleMouse(false)}
    >
      <CanvasWidget engine={engine} className="h-100 diagram-container" />
    </div>
  );
};

export default WalkthroughDiagram2;
