import { FC } from "react";
import { Account } from "../../../types/accounts";
import classes from "./AccountItem.module.scss";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button";

type Props = {
  account: Account;
};

const AccountItem: FC<Props> = ({ account }) => {
  return (
    <section className={classes["root"]}>
      <div className={classes["left-section"]}>
        <h3>
          {account.name} ({account.id})
        </h3>
        <p className={classes["balance"]}>$ {account.balance}</p>
        <p>Available Balance</p>
      </div>
      <div className={classes["right-section"]}>
        <NavLink to={`/profile/account/${account.id}`}>
          <Button variant="contained" color="primary">
            View transactions
          </Button>
        </NavLink>
      </div>
    </section>
  );
};

export default AccountItem;
