import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  isLogged: boolean;
}

const initialState: UserState = {
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
