import PopoverMenu from "../../components/PopoverMenu.tsx";
import type { IPotItem } from "./Pot.tsx";
import toast from "react-hot-toast";
import { useDeletePot } from "./useDeltePots.ts";
import PopoverMenuOption from "../../components/PopoverMenuOption.tsx";
import { useModalContext } from "../../context/useModalContext.ts";
import PotForm from "./form/PotForm.tsx";
import DeleteForm from "../../components/DeleteForm.tsx";

interface IPotHeadingProps {
  pot: IPotItem;
  name: string;
  theme: string;
}

function PotHeading({ name, theme, pot }: IPotHeadingProps) {
  const { mutate, isPending } = useDeletePot(pot.id);
  const { handleOpen } = useModalContext();

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

  function handleOpenEdit() {
    handleOpen(<PotForm isEditing potData={pot} />);
  }

  function handleOpenDelete() {
    handleOpen(
      <DeleteForm
        itemName={`"${pot.name}"`}
        mutateFn={mutateFn}
        isPending={isPending}
      />,
    );
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
      <PopoverMenu>
        <PopoverMenuOption
          type="normal"
          content="Edit"
          onClick={handleOpenEdit}
        />
        <PopoverMenuOption
          type="danger"
          content="Delete"
          onClick={handleOpenDelete}
        />
      </PopoverMenu>
    </div>
  );
}

export default PotHeading;
