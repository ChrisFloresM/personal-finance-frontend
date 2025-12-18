import useAccessToken from "../../hooks/useAccessToken.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ItransactionForm } from "./form/TransactionForm.tsx";
import { editTransaction } from "../../services/apiTransactions.ts";

export function useEditTransaction(transactionId: number) {
  const { getToken } = useAccessToken();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ItransactionForm) =>
      editTransaction(transactionId, data, getToken()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
}
