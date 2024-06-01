import { FC } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "../App";

const Layout: FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Layout;
