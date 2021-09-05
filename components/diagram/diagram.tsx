import React, { useEffect, useState } from "react";
import Diagram, { createSchema, useSchema } from "beautiful-react-diagrams";
import {
  DiagramSchema,
  Link,
  Node,
} from "beautiful-react-diagrams/@types/DiagramSchema";
import { choiceGroupData } from "../../src/data/data";

const WalkthroughDiagram: React.FC = () => {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    generateDiagram();
  }, []);

  const generateDiagram = () => {
    const first = choiceGroupData.find((x) => x.type === "start");
    if (!first) return null;

    const nodes: Node<unknown>[] = [
      {
        id: first.watchCode,
        content: first.videoTitle,
        coordinates: [0, 250],
        outputs: [{ id: `${first.watchCode}-out`, alignment: "right" }],
        className: "diagram-start",
      },
    ];

    const rest = choiceGroupData.filter((x) => x.type !== "start");

    const links: Link[] = [];

    for (const l of first.choices ?? []) {
      const link = {
        output: `${first.watchCode}-out`,
        input: `${l.nextChoiceGroupWatchCode}-in`,
      };
      links.push(link);
    }

    // @ts-ignore
    for (const [index, r] of rest.entries()) {
      const node: Node<unknown> = {
        id: r.watchCode,
        content: r.videoTitle,
        coordinates: r.coordinates ?? [0, 250],
        inputs: [{ id: `${r.watchCode}-in`, alignment: "left" }],
        outputs:
          r.type === "end"
            ? []
            : [{ id: `${r.watchCode}-out`, alignment: "right" }],
        className: r.type === "end" ? "diagram-end" : "",
      };

      // @ts-ignore
      nodes.push(node);

      for (const l of r.choices ?? []) {
        const link = {
          input: `${l.nextChoiceGroupWatchCode}-in`,
          output: `${r.watchCode}-out`,
        };
        links.push(link);
      }
    }

    const o: DiagramSchema<unknown> = {
      nodes: nodes,
      links: links,
    };

    setOptions(o);
  };

  return <WD options={options} />;
};

interface IProps {
  options: DiagramSchema<unknown>;
}

const WD: React.FC<IProps> = ({ options }) => {
  const [schema, setSchema] = useState(null);

  useEffect(() => {
    const s = createSchema(options);
    setSchema(s);
  }, [options]);

  if (!schema) return null;

  return (
    <div style={{ height: 500 }}>
      <Diagram schema={schema} />
    </div>
  );
};

export default WalkthroughDiagram;
