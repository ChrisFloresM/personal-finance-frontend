import AddButton from "../components/AddButton.tsx";
import Header from "../layout/Header.tsx";
import Main from "../layout/Main.tsx";

function Pots() {
  return (
    <>
      <Header>
        <h1>Pots</h1>
        <AddButton onClick={() => {}}>+Add New Pot</AddButton>
      </Header>
      <Main></Main>
    </>
  );
}

export default Pots;
