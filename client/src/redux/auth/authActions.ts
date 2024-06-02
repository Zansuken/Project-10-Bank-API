import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../api/endpoints";
import { Credentials } from "../../types/auth";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import { getAxiosInstance } from "../../utils";
import { setToken } from "./authSlice";

const axios = getAxiosInstance();

type DecodedToken = {
  id: string;
  iat: number;
  exp: number;
};

interface LoginPayload extends Credentials {
  rememberMe: boolean;
}

export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password, rememberMe }: LoginPayload,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const {
        data: {
          body: { token },
        },
      } = await axios.post(Endpoints.user.LOGIN, { email, password });

      const decodedToken: DecodedToken = jwtDecode(token);

      dispatch(setToken(token));

      if (rememberMe) {
        const cookies = new Cookies();

        cookies.set("token", token, {
          path: "/",
          expires: new Date(decodedToken.exp * 1000),
        });
      }

      return token;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);
