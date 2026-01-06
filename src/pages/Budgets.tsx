import Header from "../layout/Header.tsx";
import ModalButton from "../components/ModalButton.tsx";
import SpendingSummary from "../features/budgets/SpendingSummary.tsx";

function Budgets() {
  return (
    <>
      <Header>
        <h1>Budgets</h1>
        <div>
          <ModalButton buttonTitle="+Add New Budget" variation="primary">
            <p>Add new Budget</p>
          </ModalButton>
        </div>
      </Header>
      <main className="flex">
        <SpendingSummary />
      </main>
    </>
  );
}

export default Budgets;
