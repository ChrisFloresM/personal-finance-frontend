import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { useModalContext } from "../context/useModalContext.ts";
import { useState } from "react";
import PotForm from "../features/pots/form/PotForm.tsx";
import DeleteForm, { type IdeleteForm } from "./DeleteForm.tsx";

type TOptionsButton = "edit" | "delete";

function ModalPopoverOptionsButton({
  itemName,
  mutateFn,
  isPending,
}: IdeleteForm) {
  const { handleOpen } = useModalContext();
  const [modalType, setModalType] = useState<TOptionsButton>("edit");

  function handleOpenModal(type: TOptionsButton) {
    setModalType(type);
    handleOpen(
      modalType === "edit" ? (
        <PotForm />
      ) : (
        <DeleteForm
          itemName={itemName}
          mutateFn={mutateFn}
          isPending={isPending}
        />
      ),
    );
  }

  return (
    <Popover className="relative">
      <PopoverButton className="hover:cursor-pointer">...</PopoverButton>
      <PopoverPanel
        transition
        className="text-preset-4 leading-preset-4 absolute top-full right-full overflow-hidden rounded-lg bg-white duration-100 data-closed:scale-95 data-closed:opacity-0"
      >
        <CloseButton
          className="text-grey-900 hover:bg-beige-500 w-full rounded-t-lg px-250 py-150 font-bold hover:cursor-pointer"
          onClick={() => handleOpenModal("edit")}
        >
          Edit
        </CloseButton>
        <CloseButton
          className="text-red hover:bg-beige-500 w-full rounded-b-lg px-250 py-150 font-bold hover:cursor-pointer"
          onClick={() => handleOpenModal("delete")}
        >
          Delete
        </CloseButton>
      </PopoverPanel>
    </Popover>
  );
}

export default ModalPopoverOptionsButton;
