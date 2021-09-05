import Button from "@material-ui/core/Button";
import React from "react";
import { choiceGroupData } from "../../src/data/data";
import { useAppContext } from "../../src/hooks";

const Controls: React.FC = () => {
  const { player, choices: cg, setChoices } = useAppContext();
  const { showAt } = cg.slice().reverse()[0];

  const seekToChoice = () => {
    if (showAt) {
      player.currentTime = showAt;
      return;
    }
    const duration = player.duration;

    player.currentTime = duration - 30;
  };

  const restart = () => {
    const first = choiceGroupData.find((x) => x.type === "start");

    setChoices([first]);

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

  return (
    <div className="d-flex justify-content-end my-2">
      <Button onClick={() => restart()}>Restart</Button>
      <Button onClick={() => seekToChoice()}>Skip to choice</Button>
    </div>
  );
};

export default Controls;
