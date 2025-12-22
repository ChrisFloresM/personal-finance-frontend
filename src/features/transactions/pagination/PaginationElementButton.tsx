import PageNumberButton from "./PageNumberButton.tsx";

interface IPaginationElementButtonProps {
  currentPage: number;
  currentNumber: number | string;
  onClick: () => void;
}

function PaginationElementButton({
  currentPage,
  currentNumber,
  onClick,
}: IPaginationElementButtonProps) {
  if (typeof currentNumber === "string") {
    if (currentNumber === "...") return <li key={currentNumber}>...</li>;

    return null;
  }

  return (
    <li key={currentNumber}>
      <PageNumberButton
        currentPage={currentPage}
        number={currentNumber}
        onClick={onClick}
      />
    </li>
  );
}

export default PaginationElementButton;
