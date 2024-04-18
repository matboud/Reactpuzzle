// @ts-check

import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import GitHubIcon from "./GitHubIcon";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(232, 232, 232)",
    paddingTop: "10px",
    textAlign: "center",
  },
  heart: {
    color: "#d4726a",
  },
  link: {
    textDecoration: "none",
    color: "#226666",
  },
});

const Footer = () => {
  const styles = useStyles();

  return (
    <footer className={styles.root}>
      <p>
        made with ❤️❤️❤️ for my ❤️ (C 😉)
      </p>
    </footer>
  );
};

export default Footer;
