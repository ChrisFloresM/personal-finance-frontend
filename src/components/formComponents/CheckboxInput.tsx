import { Checkbox } from "@headlessui/react";
import {
  type Control,
  Controller,
  type FieldPath,
  type FieldValues,
  type PathValue,
} from "react-hook-form";

interface ICheckboxInputProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  defaultValue?: PathValue<T, FieldPath<T>>;
}

function CheckboxInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
}: ICheckboxInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <label className="flex items-center gap-200">
          <span className="text-preset-5 leading-preset-5 text-grey-500 block font-bold">
            Recurring transaction:
          </span>
          <Checkbox
            checked={field.value}
            onChange={field.onChange}
            className="group data-checked:bg-beige-500 block size-4 rounded border bg-white"
          >
            <svg
              className="stroke-white opacity-0 group-data-checked:opacity-100"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M3 8L6 11L11 3.5"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Checkbox>
          {fieldState.error && (
            <span className="text-preset-5 leading-preset-5 text-red-500">
              Error on this selection: {fieldState.error.message}{" "}
            </span>
          )}
        </label>
      )}
    />
  );
}

export default CheckboxInput;
