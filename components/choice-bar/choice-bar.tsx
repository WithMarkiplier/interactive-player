import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Portal from "@material-ui/core/Portal";
import React, { useEffect, useState } from "react";
import { choiceGroupData } from "../../src/data/data";
import { useAppContext } from "../../src/hooks";
import { IChoice } from "../../src/types/types";

const ChoiceBar: React.FC = () => {
  const {
    choices: cgs,
    setChoices,
    currentTime,
    player,
    playerRef,
    endings,
    setEndings,
    choiceBarVisible,
    setChoiceBarVisible,
  } = useAppContext();

  const cg = cgs.reverse()[0];
  const { choices, showAt, type } = cg;

  const [currentChoices, setCurrentChoices] = useState(choices);


  useEffect(() => {
    const { choices, type: t } = cgs.reverse()[0];
    if (t === "end") return;
    setCurrentChoices(choices);
  }, [cgs]);

  // useEffect(() => {
  //   if (
  //     !visible &&
  //     currentTime > 0 &&
  //     (showAt ? currentTime > showAt : currentTime > player?.duration - 30) &&
  //     type !== "end"
  //   ) {
  //     setVisible(true);
  //   }
  //   if (
  //     currentTime > 0 &&
  //     (showAt ? currentTime > showAt : currentTime > player?.duration - 30) &&
  //     type === "end"
  //   ) {
  //     // TODO: Handle unlock ending
  //     const e = [...endings.filter((x) => x !== cg), cg].sort(
  //       (a, b) => a.ending.endingNumber - b.ending.endingNumber
  //     );
  //     setEndings(e);
  //   }
  // }, [currentTime]);

  const handleChoice = (choice: IChoice) => {
    const ncg = choiceGroupData.find(
      (x) => x.watchCode === choice.nextChoiceGroupWatchCode
    );

    const src: Plyr.SourceInfo = {
      type: "video",
      title: ncg.title,
      sources: [
        {
          src: `https://www.youtube.com/watch?v=${ncg.watchCode}`,
          provider: "youtube",
        },
      ],
    };

    player.source = src;
    setChoiceBarVisible(false);

    setTimeout(() => {
      player.play();
      setChoices([...cgs, ncg]);
    }, 700);
  };

  if (!playerRef) return null;
  if (type == "end") return null;

  if (!currentChoices) return null;

  return (
    <Fade in={choiceBarVisible} unmountOnExit>
      <Paper className="d-flex justify-content-around py-4">
        {currentChoices.map((x) => (
          <Button
            key={x.nextChoiceGroupWatchCode}
            color="primary"
            variant="contained"
            onClick={() => handleChoice(x)}
          >
            {x.text}
          </Button>
        ))}
      </Paper>
    </Fade>
  );
};

export default ChoiceBar;
