import type { ItransactionForm } from "../features/transactions/form/TransactionForm.tsx";
import type { TransactionPayload } from "../types/api.ts";

export function createTransactionPayload(
  data: ItransactionForm,
): TransactionPayload {
  return {
    avatar: data.avatar,
    name: data.name,
    category: data.category,
    date: data.date,
    amount: data.transactionType == "expense" ? data.amount * -1 : data.amount,
    recurring: data.recurring,
  };
}
