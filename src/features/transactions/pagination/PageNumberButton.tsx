interface IPageNumberButtonProps {
  currentPage: number;
  number: number;
  onClick: () => void;
}

function PageNumberButton({
  currentPage,
  number,
  onClick,
}: IPageNumberButtonProps) {
  return (
    <button
      className={`${currentPage === number ? "bg-grey-900 text-white" : ""} border-beige-500 text-grey-900 hover:bg-grey-900 text-preset-4 w-[30px] rounded-lg border p-50 transition-colors duration-200 hover:cursor-pointer hover:text-white sm:w-[40px] sm:p-100`}
      type="button"
      aria-label={`Move to page number ${number}`}
      onClick={onClick}
    >
      {number}
    </button>
  );
}

export default PageNumberButton;
