import PotStats from "./PotStats.tsx";
import PotActions from "./PotActions.tsx";
import { useDeletePot } from "./useDeltePots.ts";
import { useModalContext } from "../../context/useModalContext.ts";
import toast from "react-hot-toast";
import PotForm from "./form/PotForm.tsx";
import DeleteForm from "../../components/DeleteForm.tsx";
import CardHeaderWithOptions from "../../components/CardHeaderWithOptions.tsx";

export interface IPotItem {
  id: number;
  name: string;
  target: number;
  total: number;
  theme: string;
}

interface IPotProps {
  pot: IPotItem;
}

function Pot({ pot }: IPotProps) {
  const { name, target, total, theme } = pot;

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
        itemName={`"${name}"`}
        mutateFn={mutateFn}
        isPending={isPending}
      />,
    );
  }

  return (
    <li className="col-span-1 row-span-1 flex flex-col gap-300 rounded-xl bg-white px-250 py-300 duration-200">
      <CardHeaderWithOptions
        name={name}
        theme={theme}
        handleOpenEdit={handleOpenEdit}
        handleOpenDelete={handleOpenDelete}
      />
      <PotStats target={target} total={total} theme={theme} />
      <PotActions potData={pot} />
    </li>
  );
}

export default Pot;
