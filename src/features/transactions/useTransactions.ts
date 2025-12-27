import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../services/apiTransactions.ts";
import useAccessToken from "../../hooks/useAccessToken.ts";

function useTransactions(pageNumber: number, sortBy: string) {
  const { getToken } = useAccessToken();

  const {
    isLoading,
    data: transactionsPage,
    error,
  } = useQuery({
    queryKey: ["transactions", pageNumber, sortBy],
    queryFn: () => getTransactions(pageNumber, sortBy, getToken()),
  });

  return { isLoading, transactionsPage, error };
}

export default useTransactions;
