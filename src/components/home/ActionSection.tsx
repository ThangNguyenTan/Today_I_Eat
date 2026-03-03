import React from "react";
import { Info, Navigation, ListFilter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SORT_OPTIONS } from "@/constants";
import type { SortOption } from "@/types";

interface ActionSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  apiLoading: boolean;
  geoLoading: boolean;
  totalCount: number;
  activeTypes: string[];
  isFilterOpen: boolean;
  sortBy: SortOption | "";
  onSortChange: (value: SortOption | "") => void;
  onOpenNearby: () => void;
  onToggleFilter: () => void;
}

const SortSelect: React.FC<{
  sortBy: SortOption | "";
  onSortChange: (value: SortOption | "") => void;
}> = ({ sortBy, onSortChange }) => (
  <Select
    value={sortBy || "near"}
    onValueChange={(val) => onSortChange(val as SortOption)}
  >
    <SelectTrigger
      className={`h-9 min-w-[124px] rounded-xl border-0 bg-transparent px-3 gap-1.5 font-bold text-[10px] uppercase tracking-widest transition-all focus:ring-0 focus:ring-offset-0 ${
        sortBy && sortBy !== "near"
          ? "bg-amber-50 text-amber-600 shadow-sm ring-1 ring-amber-200"
          : "text-amber-600 hover:bg-amber-50"
      }`}
    >
      <div className="flex items-center gap-1.5 whitespace-nowrap">
        <SlidersHorizontal className="h-3.5 w-3.5" />
        <SelectValue placeholder="Sắp xếp" />
      </div>
    </SelectTrigger>
    <SelectContent className="rounded-2xl border-gray-100 shadow-xl overflow-hidden">
      {SORT_OPTIONS.map((opt) => (
        <SelectItem
          key={opt.value}
          value={opt.value}
          className="text-[10px] font-bold uppercase tracking-widest py-3 px-4 focus:bg-amber-50 focus:text-amber-600 cursor-pointer"
        >
          {opt.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export const ActionSection: React.FC<ActionSectionProps> = ({
  searchQuery,
  setSearchQuery,
  apiLoading,
  geoLoading,
  totalCount,
  activeTypes,
  isFilterOpen,
  sortBy,
  onSortChange,
  onOpenNearby,
  onToggleFilter,
}) => {
  return (
    <section className="mb-10 space-y-6">
      <SearchBar
        query={searchQuery}
        onChange={setSearchQuery}
        isLoading={apiLoading}
      />

      <div className="flex items-end justify-between gap-4 px-2">
        <div className="min-w-0">
          <h3 className="text-3xl font-black tracking-tight whitespace-nowrap">
            Khám phá
          </h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1.5">
            <Info className="h-3.5 w-3.5 text-primary/60" />
            {apiLoading || geoLoading
              ? "Đang tải..."
              : searchQuery || activeTypes.length > 0
                ? `Tìm thấy ${totalCount.toLocaleString()} địa điểm`
                : `Có ${totalCount.toLocaleString()} địa điểm`}
          </p>
        </div>

        {/* Mobile-only Sort Select (Far right & Bottom) */}
        <div className="sm:hidden -mb-1">
          <SortSelect sortBy={sortBy} onSortChange={onSortChange} />
        </div>

        {/* Desktop Buttons Container */}
        <div className="hidden sm:flex items-center gap-2 bg-white/50 backdrop-blur-sm p-1.5 rounded-2xl shadow-sm border border-gray-100">
          <Button
            variant="ghost"
            size="sm"
            onClick={onOpenNearby}
            className="rounded-xl gap-1.5 font-bold text-[10px] uppercase tracking-widest transition-all text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 h-9"
          >
            <Navigation className="h-3.5 w-3.5" />
            Gần Đây
          </Button>

          <SortSelect sortBy={sortBy} onSortChange={onSortChange} />

          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleFilter}
            className={`rounded-xl gap-2 font-bold text-[10px] uppercase tracking-widest transition-all h-9 ${isFilterOpen ? "bg-primary text-white shadow-lg" : "text-primary hover:bg-primary/5"}`}
          >
            <ListFilter className="h-3.5 w-3.5" />
            Bộ lọc
          </Button>
        </div>
      </div>
    </section>
  );
};
