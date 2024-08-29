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
    }
  };

  const displayedPages = getDisplayedPages();

  return (
    <>
      {/* <div className="grid sm:grid-cols-2 gap-10 sm:gap-0 place-items-end border rounded-lg px-16 py-6 m-20 text-sm sm:text-base">
        <div className="flex gap-2 sm:gap-5">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg text-lightBlack border ${
              currentPage === 1
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer font-medium"
            }`}
            aria-label="Previous Page"
          >
            Prev
          </button>
          {displayedPages.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-full hover:bg-gray-300 hover:text-darkBlack border  ${
                page === currentPage
                  ? "bg-darkBlack text-white hover:border-darkBlack"
                  : "bg-gray-200"
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
            className={`px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg text-lightBlack border ${
              currentPage === totalPages
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer font-medium"
            }`}
            aria-label="Next Page"
          >
            Next
          </button>
        </div>
        <span className="mx-2 text-lightBlack">{`Page ${currentPage} of ${totalPages}`}</span>
      </div> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center p-6 m-8 md:m-16 lg:m-20 border rounded-lg text-sm text-lightBlack">
        <div className="hidden md:block">
          Showing
          <span className="text-darkBlack font-semibold px-1">
            {currentPage}-{currentPageLength}
          </span>
          of
          <span className="text-darkBlack font-semibold px-1">
            {totalItems}
          </span>
        </div>
        <div className="lg:flex justify-center items-center rounded-lg hidden">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            // className="border-y border-l px-4 py-2 rounded-l-lg border-gray-300"
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
            // className="border px-4 py-2 rounded-r-lg border-gray-300"
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
            // className="border-y border-l px-4 py-2 rounded-l-lg border-gray-300"
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
          {/* <button className="border-y border-l px-4 py-2 border-gray-300">
            1
          </button>
          <button className="border-y border-l px-4 py-2 border-gray-300">
            2
          </button>
          <button className="border-y border-l px-4 py-2 border-blue-300 bg-blue-100 text-blue-600 font-semibold">
            3
          </button>
          <button className="border-y border-l px-4 py-2 border-gray-300">
            ...
          </button>
          <button className="border-y border-l px-4 py-2 border-gray-300">
            100
          </button> */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            // className="border px-4 py-2 rounded-r-lg border-gray-300"
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
    </>
  );
};

export default Pagination;
