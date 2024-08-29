import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  currentPageLength,
  totalItems,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getDisplayedPages = () => {
    const pages = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage === 1) {
        pages.push(1, 2, 3);
      } else if (currentPage === totalPages) {
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }
    return pages;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const displayedPages = getDisplayedPages();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center p-6 m-8 md:m-16 lg:m-20 border rounded-lg text-sm text-lightBlack">
      <div className="hidden md:block">
        Showing
        <span className="text-darkBlack font-semibold px-1">
          {currentPage}-{currentPageLength * currentPage}
        </span>
        of
        <span className="text-darkBlack font-semibold px-1">{totalItems}</span>
      </div>
      <div className="lg:flex justify-center items-center rounded-lg hidden">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`bg-gray-100 hover:bg-gray-200 text-lightBlack border-y border-l px-4 py-2 rounded-l-lg border-gray-300 ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer font-medium"
          }`}
          aria-label="Previous Page"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`bg-gray-100 hover:bg-gray-200 text-lightBlack border px-4 py-2 rounded-r-lg border-gray-300 ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer font-medium"
          }`}
          aria-label="Next Page"
        >
          Next
        </button>
      </div>
      <div className="flex justify-center md:justify-end items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`bg-gray-100 hover:bg-gray-200 text-lightBlack border-y border-l px-4 py-2 rounded-l-lg border-gray-300 ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer font-medium"
          }`}
          aria-label="Previous Page"
        >
          <IoIosArrowBack className="h-5 w-5" />
        </button>
        {displayedPages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`border-y border-l px-4 py-2 border-gray-300 hover:bg-gray-200 ${
              page === currentPage
                ? "border-blue-300 bg-blue-100 text-blue-600 font-semibold"
                : "bg-gray-100"
            } `}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`bg-gray-100 hover:bg-gray-200 text-lightBlack border px-4 py-2 rounded-r-lg border-gray-300 ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer font-medium"
          }`}
          aria-label="Next Page"
        >
          <IoIosArrowForward className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
