import type { PropsWithChildren } from "react";

interface IAddButtonProps {
  onClick: () => void;
}

function AddButton({ onClick, children }: PropsWithChildren<IAddButtonProps>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-preset-4 leading-preset-4 bg-grey-900 hover:bg-grey-500 rounded-[8px] px-200 py-200 font-bold text-white transition-colors duration-200 hover:cursor-pointer"
    >
      {children}
    </button>
  );
}

export default AddButton;
