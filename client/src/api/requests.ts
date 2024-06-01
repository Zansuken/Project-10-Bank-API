// requests are handled with axios

import axios, { AxiosError } from "axios";
import { Endpoints } from "./endpoints";
import { z } from "zod";

export const requests = {
  login: async (email: string, password: string) => {
    try {
      const schema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
      });
      schema.parse({ email, password });

      const response = await axios.post(Endpoints.user.LOGIN, {
        email,
        password,
      });

      return response.data;
    } catch (error) {
      const err = error as AxiosError;

      console.error(err.response?.data);
    }
  },
};
