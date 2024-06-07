import { FC } from "react";
import classes from "./index.module.scss";

type Props = {
  icon: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  submit?: boolean;
};

const IconButton: FC<Props> = ({
  icon = <span>?</span>,
  onClick = () => {},
  disabled,
  submit,
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    type={submit ? "submit" : "button"}
    className={classes["root"]}
  >
    {icon}
  </button>
);

export default IconButton;
