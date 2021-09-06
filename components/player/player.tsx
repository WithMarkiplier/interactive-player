import React, { useEffect, useState } from "react";
import Plyr from "plyr";
import styles from "../../styles/Player.module.scss";
import Paper from "@material-ui/core/Paper";
import { useAppContext } from "../../src/hooks";
import Portal from "@material-ui/core/Portal";
import { ChoiceBar } from "../choice-bar";
import { ChoiceHistory } from "../choice-history";
import ReactGA from "react-ga";
import toast from "react-hot-toast";

const Player: React.FC = () => {
  const {
    player,
    setPlayer,
    choices: cgs,
    currentCG,
    playerRef,
    choiceBarVisible,
    setChoiceBarVisible,
    endings,
    setEndings,
  } = useAppContext();

  const cg = currentCG;
  const { showAt, type } = cg;

  const [choiceBarContainer, setChoiceBarContainer] = useState(null);
  const [choiceHistoryContainer, setChoiceHistoryContainer] = useState(null);

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (
      !choiceBarVisible &&
      currentTime > 0 &&
      (showAt ? currentTime > showAt : currentTime > player?.duration - 30) &&
      type !== "end"
    ) {
      setChoiceBarVisible(true);
    }

    if (
      currentTime > 0 &&
      (showAt ? currentTime > showAt : currentTime > player?.duration - 30) &&
      type === "end"
    ) {
      if (!endings.includes(cg.ending.endingNumber)) {
        const e = [
          ...endings.filter((x) => x !== cg.ending.endingNumber),
          cg.ending.endingNumber,
        ].sort((a, b) => a - b);
        setEndings(e);

        toast(`New ending discovered!`);
        toast(`#${cg.ending.endingNumber} - ${cg.ending.endingName}`);

        try {
          ReactGA.event({
            category: "ending",
            action: "Achieved ending",
            value: cg.ending.endingNumber,
            label: `Ending #${cg.ending.endingNumber} - ${cg.ending.endingName}`,
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  }, [currentTime]);

  const handleTimeChange = (event: Plyr.PlyrEvent) => {
    const ct = Math.ceil(event.detail.plyr.currentTime) ?? 0;
    if (currentTime === ct) return;
    setCurrentTime(ct);
  };

  const handleVideoEnd = (event: Plyr.PlyrEvent) => {};

  useEffect(() => {
    if (!player) {
      initPlyr();
    }
  });

  useEffect(() => {
    if (!player) return;
  }, [player]);

  useEffect(() => {
    if (!player) return;
    rebind();
  }, [player?.source]);

  const rebind = () => {
    player.off("timeupdate", handleTimeChange);
    player.off("ended", handleVideoEnd);

    player.on("timeupdate", handleTimeChange);
    player.on("ended", handleVideoEnd);
  };

  const doubleClickHanlder = (event) => {
    event.preventDefault();
  };

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
        "settings",
        "fullscreen",
      ],
      // captions: { active: true, language: "auto" },
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
      // tracks: [
      //   {
      //     kind: "subtitles",
      //     src: "/subtitles/9TjfkXmwbTs.eng.vtt",
      //     srcLang: "en",
      //     label: "English",
      //     default: true,
      //   },
      // ],
    };

    // p.language = "auto";

    p.on("timeupdate", handleTimeChange);
    p.on("ended", handleVideoEnd);
    setPlayer(p);

    const playerContainer = document.getElementsByClassName("plyr")[0];

    /* Choice Bar */
    const container = document.createElement("div");
    container.id = "choiceBarContainer";
    container.className = styles.choiceBarContainer;
    playerContainer.appendChild(container);
    setChoiceBarContainer(container);

    /* Choice History */
    const container2 = document.createElement("div");
    container2.id = "choiceHistoryContainer";
    container2.className = styles.choiceHistoryContainer;
    playerContainer.appendChild(container2);
    setChoiceHistoryContainer(container2);
  };

  // const playVideo = (url: string, p?: Plyr) => {
  //   const src: Plyr.SourceInfo = {
  //     type: "video",
  //     sources: [{ src: url }],
  //   };
  //   player.source = src;
  //   console.log(player.source);
  // };

  return (
    <Paper className={styles.player} onDoubleClick={doubleClickHanlder}>
      <video id="player" ref={playerRef} autoPlay />
      <Portal container={choiceBarContainer}>
        <ChoiceBar />
      </Portal>
    </Paper>
  );
};

export default Player;
