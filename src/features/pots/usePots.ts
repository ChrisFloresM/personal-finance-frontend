import useAccessToken from "../../hooks/useAccessToken.ts";
import { useQuery } from "@tanstack/react-query";
import { getPots } from "../../services/apiPots.ts";

function usePots() {
  const { getToken } = useAccessToken();

  const {
    isLoading,
    data: pots,
    error,
  } = useQuery({
    queryKey: ["pots"],
    queryFn: () => getPots(getToken()),
  });

  return { isLoading, pots, error };
}

export default usePots;
