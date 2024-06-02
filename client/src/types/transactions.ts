export type TransactionStatus = "PENDING" | "COMPLETED" | "REJECTED" | "ERROR";

export type Transaction = {
  accountId: string;
  accountName: string;
  amount: number;
  balanceLeft: number;
  category: string;
  createdAt: Date;
  description: string;
  id: string;
  notes: string;
  pspReference: string;
  status: TransactionStatus;
  type: string;
  updatedAt: Date;
  userId: string;
};
