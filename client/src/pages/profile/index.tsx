import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUserProfile } from "../../redux/user/userActions";
import { userSelectors } from "../../redux/user/userSelectors";
import classes from "./index.module.scss";
import { getTransactions } from "../../redux/transactions/transactionsActions";
import { authSelectors } from "../../redux/auth/authSelectors";
import Button from "../../components/Button";
import Accounts from "./Accounts";

const Profile: FC = () => {
  const user = useAppSelector(userSelectors.selectUser);
  const storedToken = useAppSelector(authSelectors.selectToken);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (storedToken) {
      dispatch(getUserProfile());
    }
    if (storedToken && user?.id) {
      dispatch(getTransactions());
    }
  }, [dispatch, storedToken, user?.id]);

  return (
    <div className={classes["root"]}>
      <h1>
        Welcome back
        <br />
        {`${user?.firstName} ${user?.lastName}!`}
      </h1>
      <div className={classes["button-wrapper"]}>
        <Button variant="contained" color="primary">
          Edit name
        </Button>
      </div>
      <Accounts />
    </div>
  );
};

export default Profile;
