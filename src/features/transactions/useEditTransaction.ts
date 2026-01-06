import useAccessToken from "../../hooks/useAccessToken.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ITransactionRequestBody } from "./form/TransactionForm.tsx";
import { API_BASE, editItem } from "../../services/apiService.ts";
import type { Itransaction } from "./TransactionsTable.tsx";

const API_ENDPOINT = `${API_BASE}/transactions`;

export function useEditTransaction(transactionId: number) {
  const { getToken } = useAccessToken();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ITransactionRequestBody) =>
      editItem<ITransactionRequestBody, Itransaction>(
        `${API_ENDPOINT}/${transactionId}`,
        data,
        getToken(),
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
}
