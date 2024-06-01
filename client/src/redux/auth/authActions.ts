import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../../api/endpoints";
import { Credentials } from "../../types/auth";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";

type DecodedToken = {
  id: string;
  iat: number;
  exp: number;
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: Credentials, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const {
        data: {
          body: { token },
        },
      } = await axios.post(Endpoints.user.LOGIN, { email, password }, config);

      const decodedToken: DecodedToken = jwtDecode(token);

      const cookies = new Cookies();

      cookies.set("token", token, {
        path: "/",
        expires: new Date(decodedToken.exp * 1000),
      });

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
