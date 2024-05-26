import { FC } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.scss";
import Footer from "../components/Footer";

const Layout: FC = () => {
  return (
    <div className={classes["root"]}>
      <NavBar />
      <main className={classes["main"]}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
