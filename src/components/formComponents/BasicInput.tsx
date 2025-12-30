import type {
  FieldError,
  FieldPath,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

interface IBasicInputProps<T extends FieldValues> {
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
}

function BasicInput<T extends FieldValues>({
  label,
  name,
  placeholder,
  register,
  error,
}: IBasicInputProps<T>) {
  return (
    <label className="flex w-full flex-col gap-50">
      <span className="text-preset-5 leading-preset-5 text-grey-500 block font-bold">
        {label}:
      </span>
      <input
        {...register(name, { required: true })}
        className="text-grey-900 text-preset-4 focus:border-grey-900 leading-preset-4 placeholder-beige-500 border-beige-500 w-full rounded-lg border px-250 py-150 font-light focus:outline-none"
        type="text"
        placeholder={placeholder}
      />
      {error && (
        <span className="text-preset-5 leading-preset-5 text-red-500">
          This field is required
        </span>
      )}
    </label>
  );
}

export default BasicInput;
