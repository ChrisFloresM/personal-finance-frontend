import SearchAndFilter from "../features/transactions/SearchAndFilter.tsx";
import TransactionsTable from "../features/transactions/TransactionsTable.tsx";
import Header from "../layout/Header.tsx";
import ModalButton from "../components/ModalButton.tsx";
import TransactionForm from "../features/transactions/form/TransactionForm.tsx";

function UserTransactions() {
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
        <div className="flex flex-col gap-300">
          <SearchAndFilter />
          <TransactionsTable />
        </div>
      </main>
    </>
  );
}

export default UserTransactions;
