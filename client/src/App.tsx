import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "./redux/hooks";
import NavBar from "./components/NavBar";
import classNames from "classnames";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import classes from "./App.module.scss";
import { Routes } from "./router/routes";
import useCookies, { CookiesType } from "./hooks/useCookies";

const App: FC = () => {
  const [currentToken, setCurrentToken] = useState<CookiesType | null>(null);

  const { cookies: token } = useCookies("token");

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setCurrentToken(token);

    if (token === undefined && location.pathname === Routes.PROFILE) {
      navigate(Routes.LOGIN);
    }

    if (token && location.pathname === Routes.LOGIN) {
      navigate(Routes.PROFILE);
    }
  }, [dispatch, location.pathname, navigate, token]);

  return (
    <div className={classes["root"]}>
      <NavBar />
      <main
        className={classNames(classes["main"], {
          [classes["bg-dark"]]: location.pathname === "/login",
        })}
      >
        {currentToken! === null ? (
          <div className={classes["loader"]}>
            <span>
              <i className="fa fa-spinner fa-spin"></i>
            </span>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
