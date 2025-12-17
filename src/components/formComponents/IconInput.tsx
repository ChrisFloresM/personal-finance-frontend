import { PiCurrencyDollarBold } from "react-icons/pi";
import type { FieldError, UseFormRegister } from "react-hook-form";
import type { Itransaction } from "../../features/transactions/TransactionsTable.tsx";

interface IIconInputProps {
  placeholder?: string;
  register: UseFormRegister<Itransaction>;
  error: FieldError | undefined;
}

function IconInput({ placeholder, register, error }: IIconInputProps) {
  return (
    <label className="flex w-full flex-col gap-50">
      <span className="text-preset-5 leading-preset-5 text-grey-500 block font-bold">
        Amount:
      </span>
      <div className="relative">
        <input
          {...register("amount", { required: true })}
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
          This field is required
        </span>
      )}
    </label>
  );
}

export default IconInput;
