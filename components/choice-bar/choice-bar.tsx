import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Portal from "@material-ui/core/Portal";
import React, { useEffect, useState } from "react";
import { choiceGroupData } from "../../src/data/data";
import { useAppContext } from "../../src/hooks";
import { IChoice } from "../../src/types/types";
import ReactGA from "react-ga";

const ChoiceBar: React.FC = () => {
  const {
    choices: cgs,
    setChoices,
    currentTime,
    player,
    playerRef,
    endings,
    setEndings,
    currentCG,
    setCurrentCG,
    choiceBarVisible,
    setChoiceBarVisible,
  } = useAppContext();

  const { choices, type } = currentCG;

  const [currentChoices, setCurrentChoices] = useState(choices ?? []);

  useEffect(() => {
    const { choices, type: t } = cgs.reverse()[0];
    if (t === "end") return;
    setCurrentChoices(choices);
  }, [cgs]);

  useEffect(() => {
    if (currentCG.type !== "end") {
      setCurrentChoices(currentCG.choices);
    } else setCurrentChoices([]);
  }, [currentCG]);

  const handleChoice = (choice: IChoice) => {
    const ncg = choiceGroupData.find(
      (x) => x.watchCode === choice.nextChoiceGroupWatchCode
    );

    const src: Plyr.SourceInfo = {
      type: "video",
      title: ncg.videoTitle,
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
      setCurrentCG(ncg);
      setChoices([...cgs, ncg]);
    }, 700);

    try {
      ReactGA.event({
        category: "video_choice",
        action: "Made decision",
        label: `${choice.text} -> ${ncg.watchCode}`,
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (!playerRef) return null;
  if (currentCG.type === "end") return null;

  if (!currentChoices) return null;

  return (
    <Fade in={choiceBarVisible && type !== "end"} unmountOnExit>
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
