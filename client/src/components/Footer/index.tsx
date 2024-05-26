import { FC } from "react";
import classes from "./index.module.scss";

const Footer: FC = () => (
  <footer className={classes["footer"]}>
    <p className={classes["footer-text"]}>Copyright 2020 Argent Bank</p>
  </footer>
);

export default Footer;
