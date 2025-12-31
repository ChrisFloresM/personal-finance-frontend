import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import ModalContextProvider from "../context/ModalContextProvider.tsx";
import { useModalContext } from "../context/useModalContext.ts";
import ModalWindow from "./ModalWindow.tsx";
import { useState } from "react";
import PotForm from "../features/pots/form/PotForm.tsx";
import DeleteForm, { type IdeleteForm } from "./DeleteForm.tsx";

function ModalPopoverOptionsButton({
  itemName,
  mutateFn,
  isPending,
}: IdeleteForm) {
  return (
    <ModalContextProvider>
      <PopoverOptionsButton
        itemName={itemName}
        mutateFn={mutateFn}
        isPending={isPending}
      />
    </ModalContextProvider>
  );
}

type TOptionsButton = "edit" | "delete";

function PopoverOptionsButton({ itemName, mutateFn, isPending }: IdeleteForm) {
  const { isOpen, handleOpen } = useModalContext();
  const [modalType, setModalType] = useState<TOptionsButton>("edit");

  function handleOpenModal(type: TOptionsButton) {
    setModalType(type);
    handleOpen();
  }

  return (
    <>
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
      {isOpen && (
        <ModalWindow>
          {modalType === "edit" ? (
            <PotForm />
          ) : (
            <DeleteForm
              itemName={itemName}
              mutateFn={mutateFn}
              isPending={isPending}
            />
          )}
        </ModalWindow>
      )}
    </>
  );
}

export default ModalPopoverOptionsButton;
