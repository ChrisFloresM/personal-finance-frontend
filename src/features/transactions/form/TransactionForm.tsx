import AvatarPicker from "../AvatarPicker.tsx";
import BasicInput from "../../../components/formComponents/BasicInput.tsx";
import IconInput from "../../../components/formComponents/IconInput.tsx";
import DropdownInput from "../../../components/formComponents/DropdownInput.tsx";
import SubmitButton from "../../../components/formComponents/SubmitButton.tsx";
import FormTemplate from "../../../components/formComponents/FormTemplate.tsx";
import CheckboxInput from "../../../components/formComponents/CheckboxInput.tsx";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { Itransaction } from "../TransactionsTable.tsx";
import { categories } from "../../../utils/SortAndCategories.ts";
import DateInput from "../../../components/formComponents/DateInput.tsx";
import { avatars } from "./avatars.ts";

function TransactionForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Itransaction>({
    defaultValues: {
      date: new Date().toISOString().split("T")[0],
      recurring: false,
    },
  });

  const onSubmit: SubmitHandler<Itransaction> = (data) => {
    console.log(data);
  };

  return (
    <FormTemplate
      formName="Add new transaction"
      formDescription="Input the data related to the new transaction. Choose a category and
      select a representative avatar (or leave the default one)."
      handleSubmit={handleSubmit(onSubmit)}
    >
      <BasicInput
        placeholder="Transaction name"
        register={register}
        error={errors.name}
      />
      <IconInput register={register} error={errors.amount} />
      <DropdownInput
        options={categories}
        name="category"
        defaultValue={categories[0].value}
        control={control}
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
      <SubmitButton>Add Transaction</SubmitButton>
    </FormTemplate>
  );
}

export default TransactionForm;
