import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../api/endpoints";
import { getAxiosInstance } from "../../utils";
import { User } from "../../types/user";
import { RootState } from "../store";

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async (_, { rejectWithValue, getState }) => {
    const {
      auth: {
        data: { token },
      },
    } = getState() as RootState;
    try {
      const axios = getAxiosInstance({ withAuth: true, storedToken: token });

      const {
        data: { body },
      } = await axios.post(Endpoints.user.PROFILE);

      return body as User;
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
