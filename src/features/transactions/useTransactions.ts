import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../services/apiTransactions.ts";
import useAccessToken from "../../hooks/useAccessToken.ts";

function useTransactions() {
  const { getToken } = useAccessToken();

  const {
    isLoading,
    data: transactions,
    error,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => getTransactions(getToken()),
  });

  return { isLoading, transactions, error };
}

export default useTransactions;
