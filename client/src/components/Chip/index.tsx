import { FC } from "react";
import classes from "./index.module.scss";
import classNames from "classnames";

type Props = {
  label: string | number;
  type?: "default" | "success" | "error" | "warning" | "info";
};

const Chip: FC<Props> = ({ label, type = "default" }) => {
  return (
    <div className={classNames(classes["root"], classes[type])}>{label}</div>
  );
};

export default Chip;
