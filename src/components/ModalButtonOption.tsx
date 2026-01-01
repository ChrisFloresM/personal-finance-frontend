import type { PropsWithChildren } from "react";
import { useModalContext } from "../context/useModalContext.ts";
import { MdDelete, MdModeEdit } from "react-icons/md";

interface ModalButtonOptionProps {
  type: "edit" | "delete";
}

function ModalButtonOption({
  type,
  children,
}: PropsWithChildren<ModalButtonOptionProps>) {
  const { handleOpen } = useModalContext();

  return (
    <>
      <button
        className="text-preset-2 hover:cursor-pointer"
        type="button"
        aria-label="edit transaction"
        onClick={() => handleOpen(children)}
        title="Edit"
      >
        {type == "edit" ? <MdModeEdit /> : <MdDelete className="text-red" />}
      </button>
    </>
  );
}

export default ModalButtonOption;
