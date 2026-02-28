import React from "react";
import { Info, Navigation, MapPin, ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";

interface ActionSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  apiLoading: boolean;
  geoLoading: boolean;
  totalCount: number;
  activeTypes: string[];
  isFilterOpen: boolean;
  isSortingByDistance: boolean;
  onOpenNearby: () => void;
  onToggleDistanceSort: () => void;
  onToggleFilter: () => void;
}

export const ActionSection: React.FC<ActionSectionProps> = ({
  searchQuery,
  setSearchQuery,
  apiLoading,
  geoLoading,
  totalCount,
  activeTypes,
  isFilterOpen,
  isSortingByDistance,
  onOpenNearby,
  onToggleDistanceSort,
  onToggleFilter,
}) => {
  return (
    <section className="mb-10 space-y-6">
      <SearchBar
        query={searchQuery}
        onChange={setSearchQuery}
        isLoading={apiLoading}
      />

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 px-2">
        <div>
          <h3 className="text-3xl font-black tracking-tight">Khám phá</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
            <Info className="h-3.5 w-3.5 text-primary/60" />
            {apiLoading || geoLoading
              ? "Đang tải..."
              : searchQuery || activeTypes.length > 0
                ? `Tìm thấy ${totalCount.toLocaleString()} địa điểm`
                : `Có ${totalCount.toLocaleString()} địa điểm`}
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100">
          <Button
            variant="ghost"
            size="sm"
            onClick={onOpenNearby}
            className="rounded-xl gap-1.5 font-bold text-[10px] uppercase tracking-widest transition-all text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 h-9"
          >
            <Navigation className="h-3.5 w-3.5" />
            Gần Đây
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleDistanceSort}
            className={`rounded-xl gap-1.5 font-bold text-[10px] uppercase tracking-widest transition-all h-9 ${isSortingByDistance ? "bg-amber-50 text-amber-600 shadow-sm ring-1 ring-amber-200" : "text-amber-600 hover:bg-amber-50"}`}
          >
            <MapPin className="h-3.5 w-3.5" />
            {isSortingByDistance ? "Đang sắp xếp" : "Sắp xếp"}
          </Button>
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
