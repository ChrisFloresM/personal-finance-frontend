import type { IPotItem } from "../Pot.tsx";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useModalContext } from "../../../context/useModalContext.ts";
import { useEditPot } from "../useEditPot.ts";
import toast from "react-hot-toast";
import FormTemplate from "../../../components/formComponents/FormTemplate.tsx";
import IconInput from "../../../components/formComponents/IconInput.tsx";
import SubmitButton from "../../../components/formComponents/SubmitButton.tsx";
import type { IPotForm } from "./PotForm.tsx";
import ProgressBar from "../ProgressBar.tsx";
import ProgressBarSummary from "../ProgressBarSummary.tsx";

interface IPotOperationFormProps {
  potData: IPotItem;
  isWithdraw?: boolean;
}

interface IPotOperationForm {
  amount: number;
}

function PotOperationForm({
  potData,
  isWithdraw = false,
}: IPotOperationFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPotOperationForm>({
    defaultValues: {
      amount: 0,
    },
  });

  const { handleClose: closeModal } = useModalContext();

  const { mutate: mutateEdit, isPending: pendingEdit } = useEditPot(
    potData?.id ?? 0,
  );

  const onSubmit: SubmitHandler<IPotOperationForm> = (operationData) => {
    if (isWithdraw && potData.total - operationData.amount < 0) {
      closeModal();
      toast.error("Pot don't have enough money to perform this operation");
      return;
    }

    const data: IPotForm = {
      name: potData.name,
      target: potData.target,
      total: calculatePotTotal(potData.total, operationData.amount, isWithdraw),
      theme: potData.theme,
    };

    mutateEdit(data, {
      onSuccess: successCallback,
      onError: errorCallback,
    });
  };

  function successCallback() {
    closeModal();
    toast.success("Pot successfully updated!");
  }

  function errorCallback(error: Error) {
    closeModal();
    toast.error(error.message);
  }

  return (
    <FormTemplate
      formName={`${isWithdraw ? "Whithdraw from" : "Add to"}  "${potData.name}"`}
      formDescription={`${isWithdraw ? "Withdraw money from" : "Add money to"} your "${potData.name}" pot`}
      handleSubmit={handleSubmit(onSubmit)}
    >
      <PotUpdateStatus
        currentTotal={potData.total}
        target={potData.target}
        updateAmount={
          isWithdraw
            ? Math.abs(watch("amount")) * -1
            : Math.abs(watch("amount"))
        }
      />
      <IconInput<IPotOperationForm>
        name="amount"
        label="Amount to add"
        placeholder="e.g. 2000"
        register={register}
        error={errors.amount}
      />
      <SubmitButton isPending={pendingEdit || false}>
        {isWithdraw ? "Confirm withdraw" : "Confirm Addition"}
      </SubmitButton>
    </FormTemplate>
  );
}

function calculatePotTotal(
  current: number,
  amount: number,
  isWithdraw: boolean,
): number {
  if (isWithdraw) {
    return current - amount >= 0 ? current - amount : current;
  }

  return current + amount;
}

interface IPotUpdateStatusProps {
  currentTotal: number;
  target: number;
  updateAmount: number;
}

function PotUpdateStatus({
  currentTotal,
  target,
  updateAmount,
}: IPotUpdateStatusProps) {
  const currentProgress = (currentTotal / target) * 100;
  const newValue = currentTotal + updateAmount;

  let progressChange = (updateAmount / target) * 100;
  if (progressChange > 0) {
    progressChange =
      progressChange + currentProgress > 100
        ? 100 - currentProgress
        : progressChange;
  } else {
    progressChange =
      Math.abs(progressChange) >= currentProgress
        ? currentProgress * -1
        : progressChange;
  }

  return (
    <div className="w-full space-y-200">
      <dl className="flex items-center justify-between">
        <dt className="text-preset-4 leading-preset-4 text-grey-500">
          New Amount
        </dt>
        <dd
          className={`${newValue < 0 ? "text-red" : "text-grey-900"} text-preset-1 leading-preset-1`}
        >
          ${newValue.toFixed(2)}
        </dd>
      </dl>
      <ProgressBar
        progress={
          progressChange < 0
            ? currentProgress - Math.abs(progressChange)
            : currentProgress
        }
        color="#201F24"
        progressChange={progressChange}
      />
      <ProgressBarSummary
        progress={progressChange}
        target={target}
        color={progressChange < 0 ? "#C94736" : "#277C68"}
      />
    </div>
  );
}

export default PotOperationForm;
