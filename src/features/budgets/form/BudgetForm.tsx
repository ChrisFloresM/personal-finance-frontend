import FormTemplate from "../../../components/formComponents/FormTemplate.tsx";
import IconInput from "../../../components/formComponents/IconInput.tsx";
import DropdownInput from "../../../components/formComponents/DropdownInput.tsx";
import {
  categoriesToSelectOption,
  colors,
  getCategoryId,
} from "../../../utils/SortAndCategories.ts";
import SubmitButton from "../../../components/formComponents/SubmitButton.tsx";
import type { IBudgetItem } from "../../../pages/Budgets.tsx";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useModalContext } from "../../../context/useModalContext.ts";
import toast from "react-hot-toast";
import useCategories from "../../../hooks/useCategories.ts";
import { useCreateBudget } from "../useCreateBudget.ts";
import { useEditBudget } from "../useEditBudget.ts";
import LoadingSpinner from "../../../components/LoadingSpinner.tsx";

export interface IBudgetForm {
  category: string;
  budgetAmount: number;
  theme: string;
}

export interface IBudgetRequestBody {
  categoryId: number;
  budgetAmount: number;
  theme: string;
}

interface IBudgetFormProps {
  isEditing?: boolean;
  budgetData?: IBudgetItem;
}

function BudgetForm({ isEditing = false, budgetData }: IBudgetFormProps) {
  const { isPending: categoriesLoading, data: remoteCategories } =
    useCategories();
  const categories = categoriesToSelectOption(remoteCategories);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IBudgetForm>({
    defaultValues: {
      budgetAmount: budgetData?.budgetAmount ?? 0,
      theme: budgetData?.theme ?? colors[0].value,
    },
  });

  const { handleClose: closeModal } = useModalContext();

  const { mutate, isPending } = useCreateBudget();
  const { mutate: mutateEdit, isPending: pendingEdit } = useEditBudget(
    budgetData?.id ?? 0,
  );

  const onSubmit: SubmitHandler<IBudgetForm> = (data) => {
    const requestBody: IBudgetRequestBody = {
      categoryId: getCategoryId(remoteCategories ?? [], data.category),
      budgetAmount: data.budgetAmount,
      theme: data.theme,
    };

    if (!isEditing) {
      mutate(requestBody, {
        onSuccess: successCallback,
        onError: errorCallback,
      });

      return;
    }

    mutateEdit(requestBody, {
      onSuccess: successCallback,
      onError: errorCallback,
    });
  };

  function successCallback() {
    closeModal();
    toast.success("Budget successfully created!");
  }

  function errorCallback(error: Error) {
    closeModal();
    toast.error(error.message);
  }

  return (
    <FormTemplate
      formName={`${isEditing ? "Edit budget" : "Add new budget"}`}
      formDescription="Choose a category to set a spending budget. These categories can help you monitor spending."
      handleSubmit={handleSubmit(onSubmit)}
    >
      {categoriesLoading ? (
        <LoadingSpinner />
      ) : (
        <DropdownInput
          options={categories}
          name="category"
          defaultValue={budgetData?.category.key ?? categories[0].value}
          control={control}
          disabled={categoriesLoading}
        />
      )}
      <IconInput<IBudgetForm>
        name="budgetAmount"
        label="Target"
        placeholder="e.g. 2000"
        register={register}
        error={errors.budgetAmount}
      />
      <DropdownInput
        options={colors}
        name="theme"
        control={control}
        defaultValue={colors[0].value}
        isColorMenu
      />
      <SubmitButton isPending={isPending || pendingEdit || false}>
        {isEditing ? "Edit budget" : "Add budget"}
      </SubmitButton>
    </FormTemplate>
  );
}

export default BudgetForm;
