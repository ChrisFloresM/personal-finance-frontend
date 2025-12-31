import ModalPopoverOptionsButton from "../../components/ModalPopoverOptionsButton.tsx";
import type { IPotItem } from "./Pot.tsx";
import toast from "react-hot-toast";
import { useDeletePot } from "./useDeltePots.ts";

interface IPotHeadingProps {
  pot: IPotItem;
  name: string;
  theme: string;
}

function PotHeading({ name, theme, pot }: IPotHeadingProps) {
  const { mutate, isPending } = useDeletePot(pot.id);

  function mutateFn() {
    mutate(undefined, {
      onSuccess: () => {
        toast.success("Pot successfully deleted!");
      },
      onError: () => {
        toast.error("Pot couldn't be deleted");
      },
    });
  }

  return (
    <div className="flex w-full justify-between">
      <h2 className="flex items-center gap-200">
        <span
          className="bg-green inline-block h-200 w-200 rounded-full"
          style={{ backgroundColor: theme }}
        ></span>
        <span className="text-grey-900 text-preset-2 leading-preset-2 font-bold">
          {name}
        </span>
      </h2>
      <ModalPopoverOptionsButton
        itemName={`"${pot.name}"`}
        mutateFn={mutateFn}
        isPending={isPending}
      />
    </div>
  );
}

export default PotHeading;
