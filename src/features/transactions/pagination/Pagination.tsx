import PaginationButton from "./PaginationButton.tsx";
import IconCaretLeft from "../../../components/Icons/IconCaretLeft.tsx";
import IconCaretRight from "../../../components/Icons/IconCaretRight.tsx";
import PaginationElementButton from "./PaginationElementButton.tsx";
import { useSearchParams } from "react-router";

interface IPaginationProps {
  totalPages: number;
}

function Pagination({ totalPages }: IPaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") ?? 1);

  function updatePage(newPage: number) {
    setSearchParams((searchParams) => {
      searchParams.set("page", newPage.toString());

      return searchParams;
    });
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

function createButtonArray(
  currentPage: number,
  totalPages: number,
): (string | number)[] {
  let leftEllipsis = true;
  let rightEllipsis = true;
  const ellipsisThreshold = 3;

  return Array.from({ length: totalPages }, (_, i): string | number => {
    const pageNumber = i + 1;

    /* 1. Condition 1: Always display first and last page */
    if (pageNumber === 1 || pageNumber == totalPages) {
      return pageNumber;
    }

    /* 2. Condition two. When current page is above threshold, display elements before and after
     current page */
    if (
      currentPage >= ellipsisThreshold &&
      (pageNumber - 1 === currentPage ||
        pageNumber === currentPage ||
        pageNumber + 1 === currentPage)
    ) {
      return pageNumber;
    }

    /* 3. While currentPage is less than the ellispsisThreshold, then display all the pages
     before the threshold incluse, if not display a single ellipsis */
    if (pageNumber <= ellipsisThreshold && currentPage < ellipsisThreshold) {
      return pageNumber;
    } else if (pageNumber <= ellipsisThreshold && leftEllipsis) {
      leftEllipsis = false;
      return "...";
    }

    /* 4. While currentPage is greather than the totalPages minus the ellipsis threshold,
     display all the pages after, if not, display a single ellipsis*/
    if (
      totalPages - currentPage < ellipsisThreshold - 1 &&
      pageNumber > totalPages - ellipsisThreshold
    ) {
      return pageNumber;
    } else if (pageNumber > totalPages - ellipsisThreshold && rightEllipsis) {
      rightEllipsis = false;
      return "...";
    }

    return "";
  });
}

export default Pagination;
