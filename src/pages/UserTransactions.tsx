import SearchAndFilter from "../features/transactions/SearchAndFilter.tsx";
import TransactionsTable, {
  type Itransaction,
} from "../features/transactions/TransactionsTable.tsx";
import Header from "../layout/Header.tsx";
import ModalButton from "../components/ModalButton.tsx";
import TransactionForm from "../features/transactions/form/TransactionForm.tsx";
import Pagination from "../features/transactions/pagination/Pagination.tsx";
import useTransactions from "../features/transactions/useTransactions.ts";
import { useTransactionsParams } from "../features/transactions/useTransactionsParams.ts";

export interface ITransactionPages {
  transactions: Itransaction[];
  totalPages: number;
}

function UserTransactions() {
  const { currentPage, currentSort, categoryFilter, searchFilter } =
    useTransactionsParams();

  const { isLoading, transactionsPage, error } = useTransactions(
    Number(currentPage),
    currentSort,
    categoryFilter,
    searchFilter,
  );

  const transactions = transactionsPage?.transactions ?? [];
  const totalPages = transactionsPage?.totalPages ?? 0;

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
