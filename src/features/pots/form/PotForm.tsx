import FormTemplate from "../../../components/formComponents/FormTemplate.tsx";
import { type SubmitHandler, useForm } from "react-hook-form";
import BasicInput from "../../../components/formComponents/BasicInput.tsx";
import IconInput from "../../../components/formComponents/IconInput.tsx";
import DropdownInput from "../../../components/formComponents/DropdownInput.tsx";
import { colors } from "../../../utils/SortAndCategories.ts";
import SubmitButton from "../../../components/formComponents/SubmitButton.tsx";
import { useCreatePot } from "../useCreatePot.ts";
import { useModalContext } from "../../../context/useModalContext.ts";
import toast from "react-hot-toast";
import type { IPotItem } from "../Pot.tsx";
import { useEditPot } from "../useEditPot.ts";

export interface IPotForm {
  name: string;
  target: number;
  total: number;
  theme: string;
}

interface IPotFormProps {
  isEditing?: boolean;
  potData?: IPotItem;
}

function PotForm({ isEditing = false, potData }: IPotFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IPotForm>({
    defaultValues: {
      name: potData?.name ?? "",
      target: potData?.target ?? 0,
      total: potData?.total ?? 0,
      theme: potData?.theme ?? colors[0].value,
    },
  });
  const { handleClose: closeModal } = useModalContext();

  const { mutate, isPending } = useCreatePot();
  const { mutate: mutateEdit, isPending: pendingEdit } = useEditPot(
    potData?.id ?? 0,
  );

  const onSubmit: SubmitHandler<IPotForm> = (data) => {
    if (!isEditing) {
      mutate(data, {
        onSuccess: successCallback,
        onError: errorCallback,
      });

      return;
    }

    mutateEdit(data, {
      onSuccess: successCallback,
      onError: errorCallback,
    });
  };

  function successCallback() {
    closeModal();
    toast.success("Pot successfully created!");
  }

  function errorCallback(error: Error) {
    closeModal();
    toast.error(error.message);
  }

  return (
    <FormTemplate
      formName={`${isEditing ? "Edit pot" : "Add new pot"}`}
      formDescription="Create a pot to set savings targets. These can help keep you on track as you save for special purchases."
      handleSubmit={handleSubmit(onSubmit)}
    >
      <BasicInput<IPotForm>
        name="name"
        label="Pot Name"
        placeholder="e.g Rainy Days"
        register={register}
        error={errors.name}
      />
      <IconInput<IPotForm>
        name="target"
        label="Target"
        placeholder="e.g. 2000"
        register={register}
        error={errors.target}
      />
      <DropdownInput
        options={colors}
        name="theme"
        control={control}
        defaultValue={colors[0].value}
        isColorMenu
      />
      <SubmitButton isPending={isPending || pendingEdit || false}>
        {isEditing ? "Edit pot" : "Add pot"}
      </SubmitButton>
    </FormTemplate>
  );
}

export default PotForm;
