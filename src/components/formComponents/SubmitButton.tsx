import type { PropsWithChildren } from "react";

interface ISubmitButtonProps {
  isPending: boolean;
}

function SubmitButton({
  isPending,
  children,
}: PropsWithChildren<ISubmitButtonProps>) {
  return (
    <button
      className={`${isPending ? "bg-grey-300 hover:bg-grey-300" : "bg-grey-900 hover:bg-grey-500"} text-preset-4 leading-preset-4 w-full cursor-pointer rounded-lg p-200 text-white transition-colors duration-200`}
      type="submit"
      disabled={isPending}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
