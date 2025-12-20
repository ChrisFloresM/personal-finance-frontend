import { type PropsWithChildren } from "react";
import { useModalContext } from "../context/useModalContext.ts";
import { useDeleteTransaction } from "../features/transactions/useDeleteTransaction.ts";
import toast from "react-hot-toast";
import FormTemplate from "./formComponents/FormTemplate.tsx";
import * as React from "react";

interface IdeleteForm {
  itemName: string;
  transactionId: number;
}

function DeleteForm({ transactionId }: PropsWithChildren<IdeleteForm>) {
  const { handleClose } = useModalContext();
  const { mutate, isPending } = useDeleteTransaction(transactionId);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutate(undefined, {
      onSuccess: () => {
        handleClose();
        toast.success("Transaction successfully deleted!");
      },
      onError: () => {
        handleClose();
        toast.error("Transaction couldn't be deleted");
      },
    });
  }

  return (
    <FormTemplate
      formName="Delete transaction?"
      formDescription="Are you sure you want to delete this item?"
      handleSubmit={handleSubmit}
    >
      <button
        className={`${isPending ? "bg-yellow" : "bg-red"} text-preset-4 rounded-lg p-200 font-bold text-white`}
        type="submit"
        aria-label="Delete transaction item"
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
