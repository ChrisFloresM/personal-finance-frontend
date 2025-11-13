import ModalButton from "../../components/ModalButton.tsx";

function PotActions() {
  return (
    <div className="grid grid-cols-2 gap-200">
      <div className="col-span-1">
        <ModalButton buttonTitle="+ Add Money" variation="secondary">
          <p>Add money</p>
        </ModalButton>
      </div>
      <div className="col-span-1">
        <ModalButton buttonTitle="Withdraw" variation="secondary">
          <p>Withdraw</p>
        </ModalButton>
      </div>
    </div>
  );
}

export default PotActions;
