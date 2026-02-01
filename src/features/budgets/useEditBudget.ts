import { API_BASE, editItem } from "../../services/apiService.ts";
import useAccessToken from "../../hooks/useAccessToken.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { IBudgetRequestBody } from "./form/BudgetForm.tsx";
import type { IBudgetItem } from "../../pages/Budgets.tsx";

const API_ENDPOINT = `${API_BASE}/budgets`;

export function useEditBudget(budgetId: number) {
  const { getToken } = useAccessToken();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IBudgetRequestBody) =>
      editItem<IBudgetRequestBody, IBudgetItem>(
        `${API_ENDPOINT}/${budgetId}`,
        data,
        getToken(),
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["budgets"] }),
  });
}
