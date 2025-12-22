import type { PropsWithChildren } from "react";

interface IPaginationButtonProps {
  onClick: () => void;
  isDisabled: boolean;
}

function PaginationButton({
  onClick,
  isDisabled,
  children,
}: PropsWithChildren<IPaginationButtonProps>) {
  return (
    <button
      className={`${isDisabled ? "opacity-0" : ""} border-beige-500 text-grey-500 hover:bg-beige-500 group flex items-center gap-200 rounded-lg border p-50 transition-colors duration-200 hover:cursor-pointer hover:text-white sm:p-100`}
      onClick={onClick}
      aria-label="pagination button"
      type="button"
      disabled={isDisabled}
      aria-hidden={isDisabled}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
