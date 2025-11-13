import Header from "../layout/Header.tsx";
import AddButton from "../components/AddButton.tsx";
import Main from "../layout/Main.tsx";

function Budgets() {
  return (
    <>
      <Header>
        <h1>Budgets</h1>
        <AddButton onClick={() => {}}>+Add New Budget</AddButton>
      </Header>
      <Main></Main>
    </>
  );
}

export default Budgets;
