import { type PropsWithChildren } from "react";
import { useModalContext } from "../context/useModalContext.ts";
import FormTemplate from "./formComponents/FormTemplate.tsx";
import * as React from "react";

export interface IdeleteForm {
  itemName: string;
  mutateFn: () => void;
  isPending: boolean;
}

function DeleteForm({
  itemName,
  mutateFn,
  isPending,
}: PropsWithChildren<IdeleteForm>) {
  const { handleClose } = useModalContext();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutateFn();
    handleClose();
  }

  return (
    <FormTemplate
      formName={`Delete ${itemName}?`}
      formDescription="Are you sure you want to delete this item?"
      handleSubmit={handleSubmit}
    >
      <button
        className={`${isPending ? "bg-yellow" : "bg-red"} text-preset-4 rounded-lg p-200 font-bold text-white hover:cursor-pointer`}
        type="submit"
        aria-label={`Delete ${itemName} item`}
        disabled={isPending}
      >
        Yes, Confirm Deletion
      </button>
      <button
        onClick={handleClose}
        className="text-preset-4 bg-beige-500 rounded-lg p-200 font-bold text-white"
        type="button"
        aria-label="Cancel operation"
      >
        No, I want to go back
      </button>
    </FormTemplate>
  );
}

export default DeleteForm;
