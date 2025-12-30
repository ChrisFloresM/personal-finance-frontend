import { useSearchParams } from "react-router";

export interface ITransactionsParams {
  currentPage: number;
  currentSort: string;
  categoryFilter: string;
  searchFilter: string;
  updateSearchParams: (param: string, value: string) => void;
}

export function useTransactionsParams(): ITransactionsParams {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;
  const currentSort = searchParams.get("sortBy") ?? "LATEST";
  const categoryFilter = searchParams.get("category") ?? "ALL";
  const searchFilter = searchParams.get("search") ?? "";

  function updateSearchParams(param: string, value: string) {
    setSearchParams((params) => {
      params.set(param, value);
      return params;
    });
  }

  return {
    currentPage,
    currentSort,
    categoryFilter,
    searchFilter,
    updateSearchParams,
  };
}
