import { type ItransactionType } from "../../features/transactions/form/TransactionForm.tsx";

import {
  type Control,
  Controller,
  type FieldPath,
  type FieldValues,
  type PathValue,
} from "react-hook-form";
import {
  Field,
  Fieldset,
  Label,
  Legend,
  Radio,
  RadioGroup,
} from "@headlessui/react";

interface IRadioGroupInputProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  options: ItransactionType[];
  defaultValue: PathValue<T, FieldPath<T>>;
  fieldName: string;
}

function RadioGroupInput<T extends FieldValues>({
  name,
  control,
  options,
  defaultValue,
  fieldName,
}: IRadioGroupInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Fieldset className="flex flex-col gap-100">
          <Legend className="text-preset-5 leading-preset-5 text-grey-500 block font-bold">
            {fieldName}
          </Legend>
          <RadioGroup
            value={field.value || options[0].value}
            onChange={field.onChange}
            aria-label="transaction-size"
            className="flex w-1/2 items-center justify-between"
          >
            {options.map((type) => (
              <Field className="flex items-center gap-200" key={type.value}>
                <Label className="text-preset-4 leading-preset-4 data-disabled:opacity-50">
                  {type.label}
                </Label>
                <Radio
                  value={type.value}
                  className="group data-checked:bg-beige-500 flex size-5 items-center justify-center rounded-full border bg-white data-disabled:bg-gray-100"
                >
                  <span className="invisible size-2 rounded-full bg-white group-data-checked:visible" />
                </Radio>
              </Field>
            ))}
          </RadioGroup>
        </Fieldset>
      )}
    />
  );
}

export default RadioGroupInput;
