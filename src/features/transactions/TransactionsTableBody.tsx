import TransactionRow from "./TransactionRow.tsx";
import type { Itransaction } from "./TransactionsTable.tsx";

interface ITransactionsTableBodyProps {
  transactionsData: Itransaction[];
}

function TransactionsTableBody({
  transactionsData,
}: ITransactionsTableBodyProps) {
  return (
    <tbody className="divide-grey-100 divide-y">
      {transactionsData.map((transaction) => (
        <TransactionRow
          key={transaction.transactionId}
          transaction={transaction}
        />
      ))}
    </tbody>
  );
}

export default TransactionsTableBody;
