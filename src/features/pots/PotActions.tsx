import ModalButton from "../../components/ModalButton.tsx";
import PotOperationForm from "./form/PotOperationForm.tsx";
import type { IPotItem } from "./Pot.tsx";

interface IPotActionsProps {
  potData: IPotItem;
}

function PotActions({ potData }: IPotActionsProps) {
  return (
    <div className="grid grid-cols-2 gap-200">
      <div className="col-span-1">
        <ModalButton buttonTitle="+ Add Money" variation="secondary">
          <PotOperationForm potData={potData} />
        </ModalButton>
      </div>
      <div className="col-span-1">
        <ModalButton buttonTitle="Withdraw" variation="secondary">
          <PotOperationForm potData={potData} isWithdraw />
        </ModalButton>
      </div>
    </div>
  );
}

export default PotActions;
