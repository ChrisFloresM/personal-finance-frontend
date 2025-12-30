import Header from "../layout/Header.tsx";
import ModalButton from "../components/ModalButton.tsx";
import PotList from "../features/pots/PotList.tsx";
import PotForm from "../features/pots/form/PotForm.tsx";
import usePots from "../features/pots/usePots.ts";

function Pots() {
  const { isLoading, pots, error } = usePots();

  return (
    <>
      <Header>
        <h1>Pots</h1>
        <div>
          <ModalButton buttonTitle="+Add New Pot" variation="primary">
            <PotForm />
          </ModalButton>
        </div>
      </Header>
      <main>
        <PotList isLoading={isLoading} pots={pots ?? []} error={error} />
      </main>
    </>
  );
}

export default Pots;
