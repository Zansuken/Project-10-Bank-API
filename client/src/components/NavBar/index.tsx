import { FC, useEffect } from "react";
import classes from "./index.module.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Routes } from "../../router/routes";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/user/selectors";
import Button from "../Button";
import { logout } from "../../redux/user/slice";

const NavBar: FC = () => {
  const { isLogged } = useSelector(userSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => dispatch(logout());

  useEffect(() => {
    if (!isLogged && location.pathname === Routes.PROFILE) {
      navigate(Routes.LOGIN);
    }
  }, [isLogged, location.pathname, navigate]);

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
      <div>
        {isLogged ? (
          <Button
            onClick={handleLogout}
            icon={<i className="fa fa-user-circle"></i>}
            color="secondary"
          >
            <span>Sign Out</span>
          </Button>
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
