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

export interface IPotForm {
  name: string;
  target: number;
  total: number;
  theme: string;
}

function PotForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IPotForm>({
    defaultValues: {
      total: 0,
    },
  });

  const { mutate, isPending } = useCreatePot();

  const { handleClose: closeModal } = useModalContext();

  const onSubmit: SubmitHandler<IPotForm> = (data) => {
    mutate(data, {
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
      formName="Add new Pot"
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
      <SubmitButton isPending={isPending || false}>Add Pot</SubmitButton>
    </FormTemplate>
  );
}

export default PotForm;
