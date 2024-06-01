import { FC } from "react";
import NavBar from "../components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import classes from "./Layout.module.scss";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import classNames from "classnames";

const Layout: FC = () => {
  const location = useLocation();

  return (
    <Provider store={store}>
      <div className={classes["root"]}>
        <NavBar />
        <main
          className={classNames(classes["main"], {
            [classes["bg-dark"]]: location.pathname === "/login",
          })}
        >
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

export default Layout;
