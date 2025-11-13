import SearchAndFilter from "../features/transactions/SearchAndFilter.tsx";
import TransactionsTable from "../features/transactions/TransactionsTable.tsx";
import Main from "../layout/Main.tsx";
import Header from "../layout/Header.tsx";

function UserTransactions() {
  return (
    <>
      <Header>
        <h1>Transactions</h1>
      </Header>
      <Main>
        <div className="flex flex-col gap-300">
          <SearchAndFilter />
          <TransactionsTable />
        </div>
      </Main>
    </>
  );
}

export default UserTransactions;
