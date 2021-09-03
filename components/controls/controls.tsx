import Button from "@material-ui/core/Button";
import React from "react";
import { useAppContext } from "../../src/hooks";

const Controls: React.FC = () => {
  const { player } = useAppContext();

  const seekToEnd = () => {
    const duration = player.duration;

    player.currentTime = duration - 30;
  };

  return (
    <div className="d-flex justify-content-end my-2">
      <Button onClick={() => seekToEnd()}>Skip to choice</Button>
    </div>
  );
};

export default Controls;
