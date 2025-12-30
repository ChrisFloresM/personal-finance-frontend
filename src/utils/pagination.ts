export function createButtonArray(
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
