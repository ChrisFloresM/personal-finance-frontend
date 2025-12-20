import useAccessToken from "../../hooks/useAccessToken.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTransaction } from "../../services/apiTransactions.ts";

export function useDeleteTransaction(transactionId: number) {
  const { getToken } = useAccessToken();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteTransaction(transactionId, getToken()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
}
