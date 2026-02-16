import useAccessToken from "../../hooks/useAccessToken.ts";
import { useQuery } from "@tanstack/react-query";
import { API_BASE, getItems } from "../../services/apiService.ts";
import type { IOverviewData } from "./Summary.tsx";

const API_ENDPOINT = `${API_BASE}/overview`;

interface IOverviewParams {}

function useOverview() {
  const { getToken } = useAccessToken();

  const params: IOverviewParams = {};

  const {
    isLoading,
    data: overviewData,
    error,
  } = useQuery({
    queryKey: ["overview"],
    queryFn: () =>
      getItems<IOverviewData, IOverviewParams>(
        API_ENDPOINT,
        params,
        getToken(),
      ),
  });

  return { isLoading, overviewData, error };
}

export default useOverview;
