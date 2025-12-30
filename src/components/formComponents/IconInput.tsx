import { PiCurrencyDollarBold } from "react-icons/pi";
import type {
  FieldError,
  FieldPath,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

interface IIconInputProps<T extends FieldValues> {
  label: string;
  name: FieldPath<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
}

function IconInput<T extends FieldValues>({
  label,
  name,
  placeholder,
  register,
  error,
}: IIconInputProps<T>) {
  return (
    <label className="flex w-full flex-col gap-50">
      <span className="text-preset-5 leading-preset-5 text-grey-500 block font-bold">
        {label}:
      </span>
      <div className="relative">
        <input
          {...register(name, {
            required: "This field is required",
            setValueAs: (value) => parseFloat(value) || 0,
            pattern: {
              value: /^\d+(\.\d{1,2})?$/,
              message: "Please enter a valid amount (e.g., 10.50)",
            },
            validate: {
              positive: (value) => value > 0 || "Value must be greather than 0",
            },
          })}
          className="text-grey-900 text-preset-4 focus:border-grey-900 leading-preset-4 placeholder-beige-500 border-beige-500 w-full rounded-lg border py-150 pr-250 pl-500 font-light focus:outline-none"
          type="text"
          placeholder={placeholder}
        />
        <span className="text-preset-4 leading-preset-4 text-beige-500 absolute top-1/2 left-250 -translate-y-1/2 transform">
          <PiCurrencyDollarBold />
        </span>
      </div>
      {error && (
        <span className="text-preset-5 leading-preset-5 text-red-500">
          {error.message}
        </span>
      )}
    </label>
  );
}

export default IconInput;
