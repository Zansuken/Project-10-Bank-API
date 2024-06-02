import { RootState } from "../store";

export const transactionsSelectors = {
  selectTransactions: (state: RootState) => state.transactions.data,
  selectTransactionsLoading: (state: RootState) => state.transactions.loading,
  selectTransactionsError: (state: RootState) => state.transactions.error,
  selectTransactionsSuccess: (state: RootState) => state.transactions.success,
};
