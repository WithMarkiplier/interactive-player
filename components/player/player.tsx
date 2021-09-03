import React, { useEffect, useState } from "react";
import Plyr from "plyr";
import styles from "../../styles/Player.module.scss";
import Paper from "@material-ui/core/Paper";
import { useAppContext } from "../../src/hooks";

const Player: React.FC = () => {
  const { player, setPlayer } = useAppContext();

  useEffect(() => {
    if (!player) {
      initPlyr();
    }
  });

  useEffect(() => {
    if (!player) return;
  }, [player]);

  const initPlyr = () => {
    const p = new Plyr("#player", {
      controls: [
        "play-large",
        "play",
        "rewind",
        "fast-forward",
        "progress",
        "current-time",
        "mute",
        "volume",
        "captions",
        "fullscreen",
      ],
    });
    p.source = {
      type: "video",
      title: "A heist with Markiplier",
      sources: [
        {
          src: "https://www.youtube.com/watch?v=9TjfkXmwbTs",
          provider: "youtube",
        },
      ],
    };
    setPlayer(p);
  };

  const playVideo = (url: string, p?: Plyr) => {
    const src: Plyr.SourceInfo = {
      type: "video",
      sources: [{ src: url }],
    };
    player.source = src;
    console.log(player.source);
  };

  return (
    <Paper className={styles.player}>
      <video id="player" />
    </Paper>
  );
};

export default Player;
