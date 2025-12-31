import useAccessToken from "../../hooks/useAccessToken.ts";
import { useQuery } from "@tanstack/react-query";
import { API_BASE, getItems } from "../../services/apiService.ts";
import type { IPotItem } from "./Pot.tsx";

const API_ENDPOINT = `${API_BASE}/pots`;

interface IPotParms {}

function usePots() {
  const { getToken } = useAccessToken();

  const params: IPotParms = {};

  const {
    isLoading,
    data: pots,
    error,
  } = useQuery({
    queryKey: ["pots"],
    queryFn: () =>
      getItems<IPotItem, IPotParms>(API_ENDPOINT, params, getToken()),
  });

  return { isLoading, pots, error };
}

export default usePots;
