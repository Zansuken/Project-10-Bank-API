export type TransactionStatus = "PENDING" | "COMPLETED" | "REJECTED" | "ERROR";

export type Transaction = {
  accountId: string;
  amount: number;
  balanceLeft: number;
  category: string;
  createdAt: string;
  description: string;
  id: string;
  notes: string;
  pspReference: string;
  status: TransactionStatus;
  type: string;
  updatedAt: string;
  userId: string;
};
