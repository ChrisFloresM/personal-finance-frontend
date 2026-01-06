import { useTransactionsParams } from "../../transactions/useTransactionsParams.ts";
import useTransactions from "../../transactions/useTransactions.ts";
import LoadingSpinner from "../../../components/LoadingSpinner.tsx";
import ErrorMessage from "../../../components/ErrorMessage.tsx";
import TransactionItem from "./TransactionItem.tsx";
import useCategories from "../../../hooks/useCategories.ts";
import { getCategoryId } from "../../../utils/SortAndCategories.ts";

const MAX_ELEMENTS = 4;

function TransactionsList() {
  const { currentPage, currentSort, categoryFilter, searchFilter } =
    useTransactionsParams();

  const { data: categories } = useCategories();

  const { isLoading, transactionsPage, error } = useTransactions(
    Number(currentPage),
    currentSort,
    getCategoryId(categories ?? [], categoryFilter),
    searchFilter,
  );

  const transactions =
    transactionsPage?.transactions.slice(0, MAX_ELEMENTS) ?? [];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorMessage>
        Error obtaining data from the server: {error.message}
      </ErrorMessage>
    );
  }

  return (
    <ul className="divide-grey-100 divide-y">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.name} transaction={transaction} />
      ))}
    </ul>
  );
}

export default TransactionsList;
