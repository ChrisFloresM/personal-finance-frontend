import { API_BASE, deleteItem } from "../../services/apiService.ts";
import useAccessToken from "../../hooks/useAccessToken.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_ENDPOINT = `${API_BASE}/budgets`;

export function useDeleteBudget(budgetId: number) {
  const { getToken } = useAccessToken();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteItem(`${API_ENDPOINT}/${budgetId}`, getToken()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
  });
}
