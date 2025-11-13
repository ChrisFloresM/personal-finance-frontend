import Header from "../layout/Header.tsx";
import ModalButton from "../components/ModalButton.tsx";
import PotList from "../features/pots/PotList.tsx";

function Pots() {
  return (
    <>
      <Header>
        <h1>Pots</h1>
        <div>
          <ModalButton buttonTitle="+Add New Pot" variation="primary">
            <p>Add new Pot</p>
          </ModalButton>
        </div>
      </Header>
      <main>
        <PotList />
      </main>
    </>
  );
}

export default Pots;
