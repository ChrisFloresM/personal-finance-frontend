import TransactionsTableHead from "./TransactionTableHead.tsx";
import TransactionsTableBody from "./TransactionsTableBody.tsx";
import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../services/apiTransactions.ts";
import ErrorMessage from "../../components/ErrorMessage.tsx";
import LoadingSpinner from "../../components/LoadingSpinner.tsx";

export interface Itransaction {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
}

function TransactionsTable() {
  const {
    isLoading,
    data: transactions,
    error,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

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

  if (!transactions || !transactions.length) {
    return (
      <ErrorMessage>You have no transactions registered yet!</ErrorMessage>
    );
  }

  return (
    <table className="flex flex-col gap-300 px-0 lg:px-200">
      <TransactionsTableHead />
      <TransactionsTableBody transactionsData={transactions} />
    </table>
  );
}

export default TransactionsTable;
