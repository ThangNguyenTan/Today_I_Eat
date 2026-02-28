import {
  Home,
  MapPin,
  UtensilsCrossed,
  ListFilter,
  PlusCircle,
} from "lucide-react";
import { Button } from "./ui/button";

interface BottomNavigationProps {
  onHome: () => void;
  onNearby: () => void;
  onSuggest: () => void;
  onFilter: () => void;
  onAdd: () => void;
  isFilterActive: boolean;
  isFormOpen: boolean;
  isNearbyActive?: boolean;
}

export function BottomNavigation({
  onHome,
  onNearby,
  onSuggest,
  onFilter,
  onAdd,
  isFilterActive,
  isFormOpen,
  isNearbyActive,
}: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
      {/* Background with glass effect and gradient border top */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)]" />

      <div className="relative container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Home */}
        <button
          onClick={onHome}
          className={`flex flex-col items-center gap-1.5 transition-colors duration-300 flex-1 ${!isFormOpen && !isNearbyActive && !isFilterActive ? "text-primary" : "text-gray-400 hover:text-primary"}`}
        >
          <div
            className={`p-1 rounded-xl transition-colors ${!isFormOpen && !isNearbyActive && !isFilterActive ? "bg-primary/10" : "group-active:bg-gray-100"}`}
          >
            <Home className="h-5 w-5" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-tighter">
            Khám phá
          </span>
        </button>

        {/* Nearby */}
        <button
          onClick={onNearby}
          className={`flex flex-col items-center gap-1.5 transition-colors duration-300 flex-1 ${isNearbyActive ? "text-emerald-500" : "text-gray-400 hover:text-emerald-500"}`}
        >
          <div
            className={`p-1 rounded-xl transition-colors ${isNearbyActive ? "bg-emerald-50" : "group-active:bg-emerald-50"}`}
          >
            <MapPin className="h-5 w-5" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-tighter">
            Gần đây
          </span>
        </button>

        {/* Suggestion Center Button - Prominent */}
        <div className="relative flex-1 flex justify-center pb-8">
          <div className="absolute -bottom-2 bg-primary/20 blur-2xl rounded-full h-12 w-12 animate-pulse" />
          <Button
            size="icon"
            onClick={onSuggest}
            className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-orange-500 shadow-xl shadow-primary/30 border-4 border-white hover:scale-110 active:scale-95 transition-all duration-300 relative z-10"
          >
            <UtensilsCrossed className="h-7 w-7 text-white" />
          </Button>
        </div>

        {/* Filter */}
        <button
          onClick={onFilter}
          className={`flex flex-col items-center gap-1.5 transition-colors duration-300 flex-1 ${
            isFilterActive ? "text-primary" : "text-gray-400 hover:text-primary"
          }`}
        >
          <div
            className={`p-1 rounded-xl transition-colors ${isFilterActive ? "bg-primary/10" : "group-active:bg-gray-100"}`}
          >
            <ListFilter className="h-5 w-5" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-tighter">
            Bộ lọc
          </span>
        </button>

        {/* Add */}
        <button
          onClick={onAdd}
          className={`flex flex-col items-center gap-1.5 transition-colors duration-300 flex-1 ${
            isFormOpen ? "text-primary" : "text-gray-400 hover:text-primary"
          }`}
        >
          <div
            className={`p-1 rounded-xl transition-colors ${isFormOpen ? "bg-primary/10" : "group-active:bg-gray-100"}`}
          >
            <PlusCircle
              className={`h-5 w-5 transition-transform duration-300 ${isFormOpen ? "rotate-45" : ""}`}
            />
          </div>
          <span className="text-[9px] font-black uppercase tracking-tighter">
            Thêm
          </span>
        </button>
      </div>

      {/* iPhone Home Indicator Space */}
      <div className="h-[env(safe-area-inset-bottom)] min-h-[10px] bg-white/95 backdrop-blur-xl" />
    </div>
  );
}
