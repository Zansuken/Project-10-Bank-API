import { createBrowserRouter } from "react-router-dom";
import Profile from "../pages/profile";
import { Routes } from "./routes";
import NotFound from "../pages/not-found";
import Layout from "../pages/Layout";
import Login from "../pages/login";
import Home from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: Routes.HOME,
        Component: Home,
      },
      {
        path: Routes.PROFILE,
        Component: Profile,
      },
      {
        path: Routes.LOGIN,
        Component: Login,
      },
      {
        path: Routes.NOT_FOUND,
        Component: NotFound,
      },
    ],
  },
]);

export default router;
