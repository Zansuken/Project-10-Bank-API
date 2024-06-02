import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";
import transactionsReducer from "./transactions/transactionsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    transactions: transactionsReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
