import { useQuery } from "@tanstack/react-query";
import { API_BASE, getItems } from "../services/apiService.ts";
import useAccessToken from "./useAccessToken.ts";

export interface ICategory {
  id: number;
  key: string;
  label: string;
}

const API_ENDPOINT = `${API_BASE}/categories`;

function useCategories() {
  const { getToken } = useAccessToken();

  const params: object = {};

  const { isPending, error, data } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      getItems<ICategory[], object>(API_ENDPOINT, params, getToken()),
  });

  return { isPending, error, data };
}

export default useCategories;
