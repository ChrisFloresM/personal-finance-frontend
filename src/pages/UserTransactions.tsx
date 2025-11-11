import SearchAndFilter from "../features/transactions/SearchAndFilter.tsx";
import TransactionsTable from "../features/transactions/TransactionsTable.tsx";

function UserTransactions() {
  return (
    <section className="flex flex-col gap-300">
      <SearchAndFilter />
      <TransactionsTable />
    </section>
  );
}

export default UserTransactions;
