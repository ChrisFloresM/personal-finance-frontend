import useAccessToken from "../../hooks/useAccessToken.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ITransactionRequestBody } from "./form/TransactionForm.tsx";
import { addItem, API_BASE } from "../../services/apiService.ts";
import type { ITransactionPages } from "../../pages/UserTransactions.tsx";

const API_ENDPOINT = `${API_BASE}/transactions`;

export function useCreateTransaction() {
  const { getToken } = useAccessToken();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ITransactionRequestBody) => {
      return addItem<ITransactionRequestBody, ITransactionPages>(
        API_ENDPOINT,
        data,
        getToken(),
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
  });
}
