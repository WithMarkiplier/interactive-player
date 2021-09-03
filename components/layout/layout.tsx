import React from "react";
import styles from "../../styles/Layout.module.scss";
// import { Appbar } from "../appbar";
import { theme } from "../theme/theme";
import classNames from "classnames";
import { createStyles, makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      backgroundColor: theme.palette?.background.default,
    },
  })
);

const Layout: React.FC = ({ children }) => {
  const classes = useStyles(theme);

  return (
    <div className={classNames(classes.main, styles.main)}>
      {/* <Appbar /> */}
      <div className={styles.toolbar} />
      <main>{children}</main>
      <div className={styles.footer} />
    </div>
  );
};

export default Layout;
