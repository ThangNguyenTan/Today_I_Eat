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
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("ellipsis");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("ellipsis");
      if (!pages.includes(totalPages)) pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-12 pb-10">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || isLoading}
          className="rounded-xl hover:bg-primary/10 hover:text-primary transition-all"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-2">
          {getPages().map((page, index) =>
            page === "ellipsis" ? (
              <div
                key={`ellipsis-${index}`}
                className="w-10 h-10 flex items-center justify-center text-muted-foreground"
              >
                <MoreHorizontal className="h-4 w-4" />
              </div>
            ) : (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="icon"
                onClick={() => onPageChange(page)}
                disabled={isLoading}
                className={`rounded-xl w-10 h-10 font-bold transition-all duration-300 ${
                  currentPage === page
                    ? "shadow-lg shadow-primary/25 scale-110"
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
          className="rounded-xl hover:bg-primary/10 hover:text-primary transition-all"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
        Trang {currentPage} / {totalPages}
      </p>
    </div>
  );
};
