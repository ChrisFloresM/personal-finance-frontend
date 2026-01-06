import { useSearchParams } from "react-router";
import { useCallback } from "react";

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

  const updateSearchParams = useCallback(
    (param: string, value: string) => {
      if (searchParams.get(param) === value) {
        return;
      }

      setSearchParams((params) => {
        const newParams = new URLSearchParams(params);
        newParams.set(param, value);
        return newParams;
      });
    },
    [searchParams, setSearchParams],
  );

  return {
    currentPage,
    currentSort,
    categoryFilter,
    searchFilter,
    updateSearchParams,
  };
}
