import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";
import React from "react";
import { choiceGroupData } from "../../src/data/data";
import { useAppContext } from "../../src/hooks";

const Controls: React.FC = () => {
  const {
    player,
    choices: cg,
    setChoices,
    setCurrentCG,
    currentCG,
    settings,
    setSettings,
  } = useAppContext();
  const { showAt } = currentCG;

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

  return (
    <div className="d-flex justify-content-end my-2 align-items-center">
      {/* <Tooltip title="The choice will be selected randomly when video ends">
        <FormControlLabel
          control={
            <Switch
              checked={settings.autoplay ?? true}
              onChange={(event) =>
                setSettings({
                  ...settings,
                  autoplay: event.currentTarget.checked,
                })
              }
            />
          }
          label="Autoplay"
          style={{ color: "#ffffff" }}
        />
      </Tooltip> */}
      <Button onClick={() => restart()}>Restart</Button>
      <Button onClick={() => seekToChoice()}>Skip to choice</Button>
    </div>
  );
};

export default Controls;
