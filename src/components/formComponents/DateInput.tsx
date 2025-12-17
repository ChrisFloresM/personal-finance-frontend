import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  type Control,
  Controller,
  type FieldPath,
  type FieldValues,
  type PathValue,
} from "react-hook-form";

interface IDateInputProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  defaultValue?: PathValue<T, FieldPath<T>>;
}

function DateInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
}: IDateInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <label className="space-y">
          <span className="text-preset-5 leading-preset-5 text-grey-500 block font-bold">
            Date:
          </span>
          <DatePicker
            className="text-grey-900 text-preset-4 focus:border-grey-900 leading-preset-4 placeholder-beige-500 border-beige-500 w-full rounded-lg border px-250 py-150 font-light focus:outline-none"
            selected={field.value ? new Date(field.value) : new Date()}
            wrapperClassName="w-full"
            onChange={(date) =>
              field.onChange(
                date
                  ? date.toISOString().split("T")[0]
                  : new Date().toISOString().split("T")[0],
              )
            }
          />
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

export default DateInput;
