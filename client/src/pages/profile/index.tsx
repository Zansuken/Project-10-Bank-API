import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUserProfile } from "../../redux/user/userActions";
import { userSelectors } from "../../redux/user/userSelectors";
import classes from "./index.module.scss";
import { getTransactions } from "../../redux/transactions/transactionsActions";
import { authSelectors } from "../../redux/auth/authSelectors";

const Profile: FC = () => {
  const user = useAppSelector(userSelectors.selectUser);
  const storedToken = useAppSelector(authSelectors.selectToken);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (storedToken) {
      dispatch(getUserProfile());
      dispatch(getTransactions());
    }
  }, [dispatch, storedToken]);
  return (
    <div className={classes["root"]}>
      <h1>
        Welcome back
        <br />
        {`${user?.firstName} ${user?.lastName}!`}
      </h1>
    </div>
  );
};

export default Profile;
