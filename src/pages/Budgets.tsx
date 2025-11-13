import Header from "../layout/Header.tsx";
import Main from "../layout/Main.tsx";
import ModalButton from "../components/ModalButton.tsx";

function Budgets() {
  return (
    <>
      <Header>
        <h1>Budgets</h1>
        <div>
          <ModalButton buttonTitle="+Add New Budget">
            <p>Add new Budget</p>
          </ModalButton>
        </div>
      </Header>
      <Main></Main>
    </>
  );
}

export default Budgets;
