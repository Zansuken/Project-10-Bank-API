import { FC, useEffect } from "react";
import Button from "../../components/Button";
import classes from "./index.module.scss";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { login } from "../../redux/user/slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../../redux/user/selectors";
import { Routes } from "../../router/routes";

type Inputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login: FC = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);

    dispatch(login());
  };

  useEffect(() => {
    if (user.isLogged) {
      navigate(Routes.HOME);
    }
  }, [navigate, user.isLogged]);

  return (
    <section className={classes["root"]}>
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form className={classes["form"]} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          formProps={register("email", {
            required: "Email address is required",
          })}
          isError={!!errors.email}
          errorMessage={errors.email?.message}
          type="email"
          inputProps={{
            autoComplete: "email",
          }}
          isDirty={!!watch("email")}
        />
        <Input
          label="Password"
          formProps={register("password", {
            required: "Password is required",
          })}
          isError={!!errors.password}
          errorMessage={errors.password?.message}
          type="password"
          inputProps={{
            autoComplete: "current-password",
          }}
          isDirty={!!watch("password")}
        />
        <Input
          label="Remember me"
          formProps={register("rememberMe")}
          type="checkbox"
          isDirty={!!watch("rememberMe")}
        />
        <Button variant="contained" fullWidth submit isLoading={isSubmitting}>
          Sign In
        </Button>
      </form>
    </section>
  );
};

export default Login;
