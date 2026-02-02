import useAccessToken from "../../hooks/useAccessToken.ts";
import { useQuery } from "@tanstack/react-query";
import type { IBudgetItem } from "../../pages/Budgets.tsx";
import { API_BASE, getItems } from "../../services/apiService.ts";

const API_ENDPOINT = `${API_BASE}/budgets`;

function useBudgets() {
  const { getToken } = useAccessToken();

  const { isLoading, data, error } = useQuery({
    queryKey: ["budgets"],
    queryFn: () =>
      getItems<IBudgetItem[], object>(API_ENDPOINT, {}, getToken()),
  });

  return { isLoading, data, error };
}

export default useBudgets;
