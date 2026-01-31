/* BudgetTransactions component */
import type { Itransaction } from "../transactions/TransactionsTable.tsx";
import BudgetTransactionItem from "./BudgetTransactionItem.tsx";

interface IBudgetTransactionsProps {
  latestTransactions: Itransaction[];
}

function BudgetTransactions({ latestTransactions }: IBudgetTransactionsProps) {
  return (
    <ul className="divide-grey-300 divide-y">
      {latestTransactions.length > 0 ? (
        latestTransactions.map((transaction) => (
          <BudgetTransactionItem
            transaction={transaction}
            key={transaction.transactionId}
          />
        ))
      ) : (
        <p className="text-preset-4 leading-preset-4 text-grey-500 text-center">
          You have no transactions for this budget
        </p>
      )}
    </ul>
  );
}

export default BudgetTransactions;
