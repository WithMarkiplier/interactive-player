import classNames from "classnames";
import React from "react";
import Image from "next/image";
import { useAppContext } from "../../src/hooks";
import Typography from "@material-ui/core/Typography";
import styles from "../../styles/ChoiceHistory.module.scss";

const ChoiceHistory: React.FC = () => {
  const { choices } = useAppContext();

  return (
    <div
      className={classNames(
        "d-flex flex-row flex-row-reverse w-100 justify-content-center",
        styles.container
      )}
    >
      {choices.map((x, i) => (
        <div
          key={`history-${i}`}
          className="d-flex flex-column justify-content-center align-items-center mx-2"
        >
          <Image
            src={`https://i.ytimg.com/vi_webp/${x.watchCode}/maxresdefault.webp`}
            width={250}
            height={140.63}
            alt={x.watchCode}
          />
          <Typography variant="h6">{x.title}</Typography>
        </div>
      ))}
    </div>
  );
};

export default ChoiceHistory;
