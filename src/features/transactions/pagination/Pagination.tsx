import PaginationButton from "./PaginationButton.tsx";
import IconCaretLeft from "../../../components/Icons/IconCaretLeft.tsx";
import IconCaretRight from "../../../components/Icons/IconCaretRight.tsx";
import PaginationElementButton from "./PaginationElementButton.tsx";
import { useEffect } from "react";
import { createButtonArray } from "../../../utils/pagination.ts";
import { useTransactionsParams } from "../useTransactionsParams.ts";

interface IPaginationProps {
  totalPages: number;
}

function Pagination({ totalPages }: IPaginationProps) {
  const { currentPage, updateSearchParams } = useTransactionsParams();

  function updatePage(newPage: number) {
    updateSearchParams("page", newPage.toString());
  }

  function getNextPage() {
    return currentPage === totalPages ? totalPages : currentPage + 1;
  }

  function getPreviousPage() {
    return currentPage === 1 ? currentPage : currentPage - 1;
  }

  const pageButtonArray: (number | string)[] = createButtonArray(
    currentPage,
    totalPages,
  );

  /* Manage the case when an element is deleted and the poage ends empty. This way we return to
 the previous page (which should be equal to the number of pages */
  useEffect(() => {
    if (
      currentPage &&
      Number(currentPage) > 1 &&
      Number(currentPage) > totalPages &&
      totalPages > 0
    ) {
      updateSearchParams("page", totalPages.toString());
    }
  }, [currentPage, totalPages, updateSearchParams]);

  if (totalPages <= 1) return null;

  return (
    <nav
      className="mt-auto flex justify-between pt-300"
      aria-label="pagination options"
    >
      <PaginationButton
        onClick={() => updatePage(getPreviousPage())}
        isDisabled={currentPage === 1}
      >
        <IconCaretLeft size={16} />
        <span
          className="text-preset-4 text-grey-900 hidden group-hover:text-white md:inline"
          aria-label="move previous page"
        >
          Prev
        </span>
      </PaginationButton>
      <ul className="flex gap-100">
        {pageButtonArray.map((pageNumber, index) => (
          <PaginationElementButton
            key={`${pageNumber}-${index}`}
            currentPage={currentPage}
            currentNumber={pageNumber}
            onClick={() =>
              updatePage(Number(pageNumber) ? Number(pageNumber) : 1)
            }
          />
        ))}
      </ul>
      <PaginationButton
        onClick={() => updatePage(getNextPage())}
        isDisabled={currentPage === totalPages}
      >
        <span
          className="text-preset-4 text-grey-900 hidden group-hover:text-white md:inline"
          aria-label="move next page"
        >
          Next
        </span>
        <IconCaretRight size={16} />
      </PaginationButton>
    </nav>
  );
}

export default Pagination;
