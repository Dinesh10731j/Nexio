import React from "react";
import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationEllipsis,
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

  return (
    <div className="flex justify-center p-4">
      <UIPagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={handlePrevious}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:from-blue-500 hover:to-purple-500"
            />
          </PaginationItem>

          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={() => onPageChange(index + 1)}
                className={`bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:from-blue-500 hover:to-purple-500 ${
                  currentPage === index + 1
                    ? "font-bold underline bg-blue-500 text-purple-600 rounded-full"
                    : "text-blue-600"
                }`}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationEllipsis className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text" />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:from-blue-500 hover:to-purple-500"
            />
          </PaginationItem>
        </PaginationContent>
      </UIPagination>
    </div>
  );
};

export default Pagination;
