import TransactionsTableHead from "./TransactionTableHead.tsx";
import TransactionsTableBody from "./TransactionsTableBody.tsx";

function TransactionsTable() {
  return (
    <table className="flex flex-col gap-300 px-0 lg:px-200">
      <TransactionsTableHead />
      <TransactionsTableBody />
    </table>
  );
}

export default TransactionsTable;
