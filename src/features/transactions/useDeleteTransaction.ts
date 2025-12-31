import useAccessToken from "../../hooks/useAccessToken.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_BASE, deleteItem } from "../../services/apiService.ts";

const API_ENDPOINT = `${API_BASE}/transactions`;

export function useDeleteTransaction(transactionId: number) {
  const { getToken } = useAccessToken();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () =>
      deleteItem(`${API_ENDPOINT}/${transactionId}`, getToken()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
}
