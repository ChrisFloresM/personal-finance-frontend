import type { PropsWithChildren } from "react";
import ModalContextProvider from "../context/ModalContextProvider.tsx";
import { useModalContext } from "../context/useModalContext.ts";
import { MdDelete, MdModeEdit } from "react-icons/md";
import ModalWindow from "./ModalWindow.tsx";

interface ModalButtonOptionProps {
  type: "edit" | "delete";
}

function ModalButtonOption({
  type,
  children,
}: PropsWithChildren<ModalButtonOptionProps>) {
  return (
    <ModalContextProvider>
      <OptionButton type={type}>{children}</OptionButton>
    </ModalContextProvider>
  );
}

function OptionButton({
  type,
  children,
}: PropsWithChildren<ModalButtonOptionProps>) {
  const { isOpen, handleOpen } = useModalContext();

  return (
    <>
      <button
        className="text-preset-2 hover:cursor-pointer"
        type="button"
        aria-label="edit transaction"
        onClick={handleOpen}
        title="Edit"
      >
        {type == "edit" ? <MdModeEdit /> : <MdDelete className="text-red" />}
      </button>
      {isOpen && <ModalWindow>{children}</ModalWindow>}
    </>
  );
}

export default ModalButtonOption;
