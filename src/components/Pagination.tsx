import React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  isLoading = false,
}) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      const leftBoundary = 3;
      const rightBoundary = totalPages - 2;

      const showLeftEllipsis = currentPage > leftBoundary + 1;
      const showRightEllipsis = currentPage < rightBoundary - 1;

      if (showLeftEllipsis && showRightEllipsis) {
        pages.push("ellipsis");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("ellipsis");
      } else if (!showLeftEllipsis && showRightEllipsis) {
        // Example: 1, 2, 3, 4, 5, ..., 10
        for (let i = 2; i <= Math.max(leftBoundary + 1, currentPage + 1); i++)
          pages.push(i);
        pages.push("ellipsis");
      } else if (showLeftEllipsis && !showRightEllipsis) {
        // Example: 1, ..., 6, 7, 8, 9, 10
        pages.push("ellipsis");
        for (
          let i = Math.min(currentPage - 1, totalPages - leftBoundary);
          i <= totalPages - 1;
          i++
        )
          pages.push(i);
      }

      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-8 sm:mt-12 pb-10">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || isLoading}
          className="rounded-xl w-9 h-9 sm:w-10 sm:h-10 hover:bg-primary/10 hover:text-primary transition-all shadow-sm"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {getPages().map((page, index) =>
            page === "ellipsis" ? (
              <div
                key={`ellipsis-${index}`}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-muted-foreground"
              >
                <MoreHorizontal className="h-4 w-4" />
              </div>
            ) : (
              <Button
                key={page}
                variant={currentPage === page ? "luxury" : "outline"}
                size="icon"
                onClick={() => onPageChange(page)}
                disabled={isLoading}
                className={`rounded-xl w-9 h-9 sm:w-10 sm:h-10 font-bold transition-all duration-300 shadow-sm ${
                  currentPage === page
                    ? "scale-110 z-10 border-0"
                    : "hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                }`}
              >
                {page}
              </Button>
            ),
          )}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || isLoading}
          className="rounded-xl w-9 h-9 sm:w-10 sm:h-10 hover:bg-primary/10 hover:text-primary transition-all shadow-sm"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
          Trang {currentPage} / {totalPages}
        </p>
      </div>
    </div>
  );
};
