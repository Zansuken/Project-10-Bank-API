import { SerializedError, createSlice } from "@reduxjs/toolkit";
import { Transaction } from "../../types/transactions";
import { getTransactions } from "./transactionsActions";

interface TransactionsState {
  loading: boolean;
  error: string | SerializedError;
  success: boolean;
  data: Transaction[] | null;
}

const initialState: TransactionsState = {
  loading: false,
  error: "",
  success: false,
  data: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    resetTransactions: (state) => {
      state.loading = false;
      state.error = "";
      state.success = false;
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTransactions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTransactions.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = "";
      state.data = payload;
      state.success = true;
    });
    builder.addCase(getTransactions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ? action.error.message : action.error;
      state.success = false;
    });
  },
});

export const { resetTransactions } = transactionsSlice.actions;

export default transactionsSlice.reducer;
