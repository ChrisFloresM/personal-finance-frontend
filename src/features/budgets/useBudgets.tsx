import useAccessToken from "../../hooks/useAccessToken.ts";
import { useQuery } from "@tanstack/react-query";
import { API_BASE, getItems } from "../../services/apiService.ts";
import type { IBudgetItemWList } from "../../pages/Budgets.tsx";

const API_ENDPOINT = `${API_BASE}/budgets/overview`;

function useBudgetsWTransactions() {
  const { getToken } = useAccessToken();

  const { isLoading, data, error } = useQuery({
    queryKey: ["budgets", "with-transactions"],
    queryFn: () =>
      getItems<IBudgetItemWList[], object>(API_ENDPOINT, {}, getToken()),
  });

  return { isLoading, data, error };
}

export default useBudgetsWTransactions;
