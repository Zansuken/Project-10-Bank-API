import { SerializedError, createSlice } from "@reduxjs/toolkit";
import { login } from "./authActions";

interface AuthState {
  loading: boolean;
  error: string | SerializedError;
  success: boolean;
}

const initialState: AuthState = {
  loading: false,
  error: "",
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
      state.success = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ? action.error.message : action.error;
      state.success = false;
    });
  },
});

export default authSlice.reducer;
