import useAccessToken from "../../hooks/useAccessToken.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItem, API_BASE } from "../../services/apiService.ts";
import type { IBudgetRequestBody } from "./form/BudgetForm.tsx";

const API_ENDPOINT = `${API_BASE}/budgets`;

export function useCreateBudget() {
  const { getToken } = useAccessToken();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IBudgetRequestBody) =>
      addItem<IBudgetRequestBody, void>(API_ENDPOINT, data, getToken()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
  });
}
