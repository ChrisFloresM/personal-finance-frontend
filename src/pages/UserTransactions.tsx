import SearchAndFilter from "../features/transactions/SearchAndFilter.tsx";
import TransactionsTable, {
  type Itransaction,
} from "../features/transactions/TransactionsTable.tsx";
import Header from "../layout/Header.tsx";
import ModalButton from "../components/ModalButton.tsx";
import TransactionForm from "../features/transactions/form/TransactionForm.tsx";
import Pagination from "../features/transactions/pagination/Pagination.tsx";
import { useSearchParams } from "react-router";
import useTransactions from "../features/transactions/useTransactions.ts";
import { useEffect } from "react";

export interface ITransactionPages {
  transactions: Itransaction[];
  totalPages: number;
}

function UserTransactions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page") ?? 1;
  const currentSort = searchParams.get("sortBy") ?? "LATEST";
  const categoryFilter = searchParams.get("category") ?? "ALL";
  const searchFilter = searchParams.get("search") ?? "";

  let transactions: Itransaction[], totalPages: number;

  const { isLoading, transactionsPage, error } = useTransactions(
    currentPage ? Number(currentPage) : 1,
    currentSort ? currentSort : "LATEST",
    categoryFilter,
    searchFilter,
  );

  if (transactionsPage) {
    transactions = transactionsPage.transactions;
    totalPages = transactionsPage.totalPages;
  } else {
    transactions = [];
    totalPages = 0;
  }

  /* Manage the case when an element is deleted and the poage ends empty. This way we return to
   the previous page (which should be equal to the number of pages */
  useEffect(() => {
    if (
      currentPage &&
      Number(currentPage) > 1 &&
      Number(currentPage) > totalPages &&
      totalPages > 0
    ) {
      setSearchParams((searchParams) => {
        searchParams.set("page", totalPages.toString());
        return searchParams;
      });
    }
  }, [currentPage, setSearchParams, totalPages]);

  return (
    <>
      <Header>
        <h1 className="text-preset-2 leading-preset-2 sm:text-preset-1 sm:leading-preset-1">
          Transactions
        </h1>
        <div>
          <ModalButton buttonTitle="+New Transaction" variation="primary">
            <TransactionForm />
          </ModalButton>
        </div>
      </Header>
      <main className="relative max-w-full flex-1 rounded-xl bg-white p-300">
        <div className="flex h-full flex-col gap-300">
          <SearchAndFilter />
          <TransactionsTable
            isLoading={isLoading}
            transactions={transactions}
            error={error}
          />
          <Pagination totalPages={totalPages} />
        </div>
      </main>
    </>
  );
}
export default UserTransactions;
