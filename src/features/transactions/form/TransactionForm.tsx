import AvatarPicker from "./AvatarPicker.tsx";
import BasicInput from "../../../components/formComponents/BasicInput.tsx";
import IconInput from "../../../components/formComponents/IconInput.tsx";
import DropdownInput from "../../../components/formComponents/DropdownInput.tsx";
import SubmitButton from "../../../components/formComponents/SubmitButton.tsx";
import FormTemplate from "../../../components/formComponents/FormTemplate.tsx";
import CheckboxInput from "../../../components/formComponents/CheckboxInput.tsx";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { Itransaction } from "../TransactionsTable.tsx";
import {
  categoriesToSelectOption,
  getCategoryId,
} from "../../../utils/SortAndCategories.ts";
import DateInput from "../../../components/formComponents/DateInput.tsx";
import { avatars } from "./avatars.ts";
import RadioGroupInput from "../../../components/formComponents/RadioGroupInput.tsx";
import { useCreateTransaction } from "../useCreateTransaction.ts";
import toast from "react-hot-toast";
import { useModalContext } from "../../../context/useModalContext.ts";
import { useEditTransaction } from "../useEditTransaction.ts";
import useCategories from "../../../hooks/useCategories.ts";

export interface ItransactionForm {
  transactionId: number;
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
  transactionType: "income" | "expense";
}

export interface ITransactionRequestBody {
  avatar: string;
  name: string;
  categoryId: number;
  date: string;
  amount: number;
  recurring: boolean;
}

export interface ItransactionType {
  label: string;
  value: "income" | "expense";
}

const transactionTypes: ItransactionType[] = [
  { label: "Income", value: "income" },
  { label: "Expense", value: "expense" },
];

interface ITransactionFormProps {
  isEditing?: boolean;
  transactionData?: Itransaction;
}

function TransactionForm({
  isEditing = false,
  transactionData,
}: ITransactionFormProps) {
  const { isPending: categoriesLoading, data: remoteCategories } =
    useCategories();
  const categories = categoriesToSelectOption(remoteCategories);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ItransactionForm>({
    defaultValues: {
      avatar: transactionData?.avatar ?? avatars[0].src,
      name: transactionData?.name ?? "",
      category: transactionData?.category?.key ?? categories[0].value,
      date: transactionData?.date ?? new Date().toISOString().split("T")[0],
      amount: transactionData?.amount ? Math.abs(transactionData.amount) : 0.0,
      recurring: transactionData?.recurring ?? false,
      transactionType: transactionData?.amount
        ? transactionData.amount >= 0
          ? "income"
          : "expense"
        : transactionTypes[1].value,
    },
  });

  const { mutate, isPending } = useCreateTransaction();
  const { mutate: mutateEdit, isPending: isEditPending } = useEditTransaction(
    transactionData?.transactionId ?? 0,
  );

  const { handleClose: closeModal } = useModalContext();

  const onSubmit: SubmitHandler<ItransactionForm> = (data) => {
    const requestBody = {
      avatar: data.avatar,
      name: data.name,
      categoryId: getCategoryId(remoteCategories ?? [], data.category),
      date: data.date,
      amount:
        data.transactionType === "expense" ? data.amount * -1 : data.amount,
      recurring: data.recurring,
    };

    if (isEditing) {
      mutateEdit(requestBody, {
        onSuccess: successCallback,
        onError: errorCallback,
      });

      return;
    }

    mutate(requestBody, {
      onSuccess: successCallback,
      onError: errorCallback,
    });
  };

  function successCallback() {
    closeModal();
    toast.success("Transaction successfully created!");
  }

  function errorCallback(error: Error) {
    closeModal();
    toast.error(error.message);
  }

  return (
    <FormTemplate
      formName="Add new transaction"
      formDescription="Input the data related to the new transaction. Choose a category and
      select a representative avatar (or leave the default one)."
      handleSubmit={handleSubmit(onSubmit)}
    >
      <BasicInput<ItransactionForm>
        name="name"
        label="Concept"
        placeholder="Transaction name"
        register={register}
        error={errors.name}
      />
      <IconInput<ItransactionForm>
        label="Amount"
        name="amount"
        register={register}
        error={errors.amount}
        placeholder="0.00"
      />
      <RadioGroupInput
        name="transactionType"
        control={control}
        options={transactionTypes}
        defaultValue={transactionTypes[0].value}
        fieldName="Transaction Type: "
      />
      <DropdownInput
        options={categories}
        name="category"
        defaultValue={categories[0].value}
        control={control}
        disabled={categoriesLoading}
      />
      <DateInput
        name="date"
        defaultValue={new Date().toISOString().split("T")[0]}
        control={control}
      />
      <CheckboxInput name="recurring" control={control} defaultValue={false} />
      <AvatarPicker
        name="avatar"
        control={control}
        defaultValue={avatars[0].src}
      />
      <SubmitButton isPending={isPending || isEditPending || false}>
        Add Transaction
      </SubmitButton>
    </FormTemplate>
  );
}

export default TransactionForm;
