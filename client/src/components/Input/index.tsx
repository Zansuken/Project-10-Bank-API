import { DetailedHTMLProps, FC, HTMLInputTypeAttribute } from "react";
import classNames from "classnames";
import classes from "./index.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Props = {
  type?: HTMLInputTypeAttribute;
  inputProps?: InputProps;
  formProps?: UseFormRegisterReturn;
  label?: string;
  checkboxLabelPosition?: "before" | "after";
  helperText?: string;
  isError?: boolean;
  errorMessage?: string;
  /** Used to determine if the input has been touched */
  isDirty: boolean;
};

const Input: FC<Props> = ({
  type = "text",
  inputProps = {} as InputProps,
  formProps = {} as UseFormRegisterReturn,
  label = "",
  checkboxLabelPosition = "after",
  helperText = "",
  isError,
  errorMessage = "",
  isDirty,
}) => {
  const isCheckbox = type === "checkbox";

  const rootClasses = classNames(classes["input-wrapper"], {
    [classes["checkbox-wrapper"]]: type === "checkbox",
    [classes["with-helper"]]: helperText || isError !== undefined,
  });
  const labelClasses = classNames({
    [classes["label"]]: !isCheckbox,
    [classes["checkbox-label"]]: isCheckbox,
    [classes["error"]]: isError,
    [classes["label-default"]]: !isCheckbox,
    [classes["is-fulfilled"]]: !isCheckbox && isDirty,
  });

  if (isCheckbox) {
    return (
      <div className={rootClasses}>
        <label className={labelClasses}>
          {checkboxLabelPosition === "before" && <span>{label}</span>}
          <input
            id={formProps.name}
            type={type}
            {...formProps}
            {...inputProps}
          />
          {checkboxLabelPosition === "after" && <span>{label}</span>}
        </label>
      </div>
    );
  }

  return (
    <div className={rootClasses}>
      <input
        className={classNames({ [classes["input-error"]]: isError })}
        type={type}
        {...formProps}
        {...inputProps}
      />
      {label && <label className={labelClasses}>{label}</label>}
      {(helperText || isError) && (
        <div className={classes["helper"]}>
          {helperText && <span>{helperText}</span>}
          {isError && <span className={classes["error"]}>{errorMessage}</span>}
        </div>
      )}
    </div>
  );
};

export default Input;
