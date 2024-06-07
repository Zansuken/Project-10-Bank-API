import { FC, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { userSelectors } from "../../redux/user/userSelectors";
import classes from "./UserDetails.module.scss";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
};

const UserDetails: FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const user = useAppSelector(userSelectors.selectUser);

  const handleEditName = () => setIsEditing(true);
  const handleCancelEdit = () => setIsEditing(false);
  const handleSaveName = () => setIsEditing(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <>
      <h1>
        Welcome back
        <br />
        {`${user?.firstName} ${user?.lastName}!`}
      </h1>
      <div>
        {!isEditing ? (
          <div className={classes["button-wrapper"]}>
            <Button
              onClick={handleEditName}
              variant="contained"
              color="primary"
            >
              Edit name
            </Button>
          </div>
        ) : (
          <form className={classes["form"]} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes["row"]}>
              <Input
                label="First name"
                formProps={register("firstName", {
                  required: "First name is required",
                })}
                isError={!!errors.firstName}
                errorMessage={errors.firstName?.message}
                type="text"
                inputProps={{
                  autoComplete: "given-name",
                  defaultValue: user?.firstName,
                }}
                isDirty={!!watch("firstName")}
              />
              <Input
                label="Last name"
                formProps={register("lastName", {
                  required: "Last name is required",
                })}
                isError={!!errors.lastName}
                errorMessage={errors.lastName?.message}
                type="text"
                inputProps={{
                  autoComplete: "family-name",
                  defaultValue: user?.lastName,
                }}
                isDirty={!!watch("lastName")}
              />
            </div>
            <div className={classes["row"]}>
              <Button
                onClick={handleCancelEdit}
                variant="contained"
                color="primary"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSaveName}
                variant="contained"
                color="primary"
              >
                Save
              </Button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default UserDetails;
