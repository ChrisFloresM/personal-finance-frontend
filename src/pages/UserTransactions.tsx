import SearchAndFilter from "../features/transactions/SearchAndFilter.tsx";
import TransactionsTable from "../features/transactions/TransactionsTable.tsx";
import Header from "../layout/Header.tsx";
import ModalButton from "../components/ModalButton.tsx";

function UserTransactions() {
  return (
    <>
      <Header>
        <h1>Transactions</h1>
        <div>
          <ModalButton buttonTitle="+Register Transaction" variation="primary">
            <p>Add new transaction</p>
          </ModalButton>
        </div>
      </Header>
      <main className="relative max-w-full flex-1 rounded-[12px] bg-white p-300">
        <div className="flex flex-col gap-300">
          <SearchAndFilter />
          <TransactionsTable />
        </div>
      </main>
    </>
  );
}

export default UserTransactions;
