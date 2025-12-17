import type { PropsWithChildren } from "react";

function SubmitButton({ children }: PropsWithChildren) {
  return (
    <button
      className="bg-grey-900 text-preset-4 leading-preset-4 hover:bg-grey-500 w-full cursor-pointer rounded-lg p-200 text-white transition-colors duration-200"
      type="submit"
    >
      {children}
    </button>
  );
}

export default SubmitButton;
