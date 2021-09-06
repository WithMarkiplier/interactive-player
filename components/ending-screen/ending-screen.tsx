import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { choiceGroupData } from "../../src/data/data";
import { useAppContext } from "../../src/hooks";
import styles from "../../styles/EndingScreen.module.scss";
import ReplayIcon from "@material-ui/icons/Replay";

interface IProps {
  show: boolean;
}

const EndingScreen: React.FC<IProps> = ({ show }) => {
  const { currentCG, setChoices, setCurrentCG, player } = useAppContext();

  const watchAgain = () => {
    const first = choiceGroupData.find((x) => x.type === "start");

    setChoices([first]);
    setCurrentCG(first);

    const src: Plyr.SourceInfo = {
      type: "video",
      title: first.videoTitle,
      sources: [
        {
          src: `https://www.youtube.com/watch?v=${first.watchCode}`,
          provider: "youtube",
        },
      ],
    };

    player.source = src;

    setTimeout(() => {
      player.play();
    }, 750);
  };

  if (currentCG.type !== "end") return null;

  return (
    <Fade in={show} unmountOnExit>
      <div
        className="d-flex flex-column justify-content-center align-items-center h-100"
        style={{ backgroundColor: "#000" }}
      >
        <Typography className="mb-5" variant="h4">
          Ending
        </Typography>
        <Typography className="my-5" variant="h3">
          {currentCG.ending?.endingName ?? "Ending title goes here"}
        </Typography>
        <Typography className="my-5" variant="h4">
          #{currentCG.ending?.endingNumber}/
          {choiceGroupData.filter((x) => x.type === "end").length}
        </Typography>
        <Button
          className="mt-5"
          variant="outlined"
          onClick={() => watchAgain()}
        >
          <ReplayIcon />
          &nbsp;Watch Again
        </Button>
      </div>
    </Fade>
  );
};

export default EndingScreen;
