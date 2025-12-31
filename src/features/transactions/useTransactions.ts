import { useQuery } from "@tanstack/react-query";
import useAccessToken from "../../hooks/useAccessToken.ts";
import type { ITransactionPages } from "../../pages/UserTransactions.tsx";
import { API_BASE, getItems } from "../../services/apiService.ts";

const API_ENDPOINT = `${API_BASE}/transactions`;

interface ITransactionParams {
  page: number;
  sortBy: string;
  category: string;
  search: string;
}

function useTransactions(
  pageNumber: number,
  sortBy: string,
  categoryFilter: string,
  search: string,
) {
  const { getToken } = useAccessToken();

  const params: ITransactionParams = {
    page: pageNumber - 1,
    sortBy: sortBy,
    category: categoryFilter,
    search: search,
  };

  const {
    isLoading,
    data: transactionsPage,
    error,
  } = useQuery({
    queryKey: ["transactions", pageNumber, sortBy, categoryFilter, search],
    queryFn: () =>
      getItems<ITransactionPages, ITransactionParams>(
        API_ENDPOINT,
        params,
        getToken(),
      ),
  });

  return { isLoading, transactionsPage, error };
}

export default useTransactions;
