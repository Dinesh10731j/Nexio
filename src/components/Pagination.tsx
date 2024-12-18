import React from "react";
import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };


  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
 
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
   
      pages.push(1);

      if (currentPage > 4) {
        pages.push("...");
      }

      const startPage = Math.max(2, currentPage - 2);
      const endPage = Math.min(totalPages - 1, currentPage + 2);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 3) {
        pages.push("...");
      }

   
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center p-4">
      <UIPagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={currentPage === 1 ? undefined : handlePrevious}
              className={`cursor-pointer ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:from-blue-500 hover:to-purple-500"
              }`}
            />
          </PaginationItem>

          {renderPageNumbers().map((page, index) => (
  <PaginationItem key={index}>
    {typeof page === "number" ? (
      <PaginationLink
        onClick={(e) => {
          e.preventDefault();
          onPageChange(page);
        }}
        className={`cursor-pointer px-4 py-1 rounded-full ${
          currentPage === page
            ? "font-bold shadow-md bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500"
            : "text-purple-600"
        }`}
      >
        {page}
      </PaginationLink>
    ) : (
      <span className="px-2 text-gray-500">...</span>
    )}
  </PaginationItem>
))}

          <PaginationItem>
            <PaginationNext
              onClick={currentPage === totalPages ? undefined : handleNext}
              className={`cursor-pointer ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:from-blue-500 hover:to-purple-500"
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </UIPagination>
    </div>
  );
};

export default Pagination;
