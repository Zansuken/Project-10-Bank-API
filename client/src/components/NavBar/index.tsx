import { FC } from "react";
import classes from "./index.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { Routes } from "../../router/routes";
import Button from "../Button";
import useCookies from "../../hooks/useCookies";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetUser } from "../../redux/user/userSlice";
import { userSelectors } from "../../redux/user/userSelectors";
import { resetTransactions } from "../../redux/transactions/transactionsSlice";
import { resetToken } from "../../redux/auth/authSlice";
import { authSelectors } from "../../redux/auth/authSelectors";

const NavBar: FC = () => {
  const storedToken = useAppSelector(authSelectors.selectToken);
  const user = useAppSelector(userSelectors.selectUser);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { cookies: token, removeCookie } = useCookies("token");

  const isAuthenticated = !!token || !!storedToken;

  const handleLogout = () => {
    if (token) {
      removeCookie("token");
    }
    navigate(Routes.HOME);
    dispatch(resetUser());
    dispatch(resetTransactions());
    dispatch(resetToken());
  };

  return (
    <nav className={classes["main-nav"]}>
      <NavLink className={classes["main-nav-logo"]} to={Routes.HOME}>
        <img
          className={classes["main-nav-logo-image"]}
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div className={classes["right-section"]}>
        {isAuthenticated ? (
          <>
            <NavLink className={classes["main-nav-item"]} to={Routes.PROFILE}>
              <i className="fa fa-user-circle"></i>
              <span>{user?.firstName}</span>
            </NavLink>
            <Button
              onClick={handleLogout}
              icon={<i className="fa fa-sign-out"></i>}
              color="secondary"
            >
              <span>Sign Out</span>
            </Button>
          </>
        ) : (
          <NavLink className={classes["main-nav-item"]} to={Routes.LOGIN}>
            <i className="fa fa-user-circle"></i>
            <span>Sign In</span>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
