import { FC } from "react";
import classes from "./index.module.scss";
import { NavLink } from "react-router-dom";
import { Routes } from "../../router/routes";

// TODO: If the user is logged in, display a "Sign Out" link. Otherwise, display a "Sign In" link.

const NavBar: FC = () => (
  <nav className={classes["main-nav"]}>
    <NavLink className={classes["main-nav-logo"]} to={Routes.PROFILE}>
      <img
        className={classes["main-nav-logo-image"]}
        src="./img/argentBankLogo.png"
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </NavLink>
    <div>
      <NavLink className={classes["main-nav-item"]} to={Routes.LOGIN}>
        <i className="fa fa-user-circle"></i>
        <span>Sign In</span>
      </NavLink>
    </div>
  </nav>
);

export default NavBar;
