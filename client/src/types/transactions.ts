export type TransactionStatus = "PENDING" | "COMPLETED" | "REJECTED" | "ERROR";

export type Transaction = {
  accountId: string;
  accountName: string;
  amount: number;
  balanceLeft: number;
  category: string;
  createdAt: Date | string;
  description: string;
  id: string;
  notes: string;
  pspReference: string;
  status: TransactionStatus;
  type: string;
  updatedAt: Date | string;
  userId: string;
};
