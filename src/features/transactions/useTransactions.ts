import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../services/apiTransactions.ts";
import useAccessToken from "../../hooks/useAccessToken.ts";

function useTransactions(pageNumber: number) {
  const { getToken } = useAccessToken();

  const {
    isLoading,
    data: transactionsPage,
    error,
  } = useQuery({
    queryKey: ["transactions", pageNumber],
    queryFn: () => getTransactions(pageNumber, getToken()),
  });

  return { isLoading, transactionsPage, error };
}

export default useTransactions;
