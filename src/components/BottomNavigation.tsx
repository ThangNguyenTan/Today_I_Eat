import {
  Home,
  MapPin,
  UtensilsCrossed,
  ListFilter,
  User as UserIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { type User } from "firebase/auth";

interface BottomNavigationProps {
  onHome: () => void;
  onNearby: () => void;
  onSuggest: () => void;
  onFilter: () => void;
  onLogin: () => void;
  isFilterActive: boolean;
  isNearbyActive?: boolean;
  user: User | null;
}

export function BottomNavigation({
  onHome,
  onNearby,
  onSuggest,
  onFilter,
  onLogin,
  isFilterActive,
  isNearbyActive,
  user,
}: BottomNavigationProps) {
  const { t } = useTranslation();

  // Determine active tab ID for the gliding bubble
  let activeTab = "explore";
  if (isNearbyActive) activeTab = "nearby";
  else if (isFilterActive) activeTab = "filter";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
      {/* Background with glass effect and gradient border top */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)]" />

      <div className="relative container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Home */}
        <button
          onClick={onHome}
          className={`flex flex-col items-center gap-1.5 transition-colors duration-300 flex-1 relative ${activeTab === "explore" ? "text-primary" : "text-gray-400 hover:text-primary/70"}`}
        >
          <div className="relative p-1.5 z-10 flex items-center justify-center">
            {activeTab === "explore" && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Home className="h-5 w-5" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-tighter whitespace-nowrap">
            {t("bottomNav.explore")}
          </span>
        </button>

        {/* Nearby */}
        <button
          onClick={onNearby}
          className={`flex flex-col items-center gap-1.5 transition-colors duration-300 flex-1 relative ${activeTab === "nearby" ? "text-primary" : "text-gray-400 hover:text-primary/70"}`}
        >
          <div className="relative p-1.5 z-10 flex items-center justify-center">
            {activeTab === "nearby" && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <MapPin className="h-5 w-5" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-tighter whitespace-nowrap">
            {t("bottomNav.nearby")}
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
          className={`flex flex-col items-center gap-1.5 transition-colors duration-300 flex-1 relative ${
            activeTab === "filter"
              ? "text-primary"
              : "text-gray-400 hover:text-primary/70"
          }`}
        >
          <div className="relative p-1.5 z-10 flex items-center justify-center">
            {activeTab === "filter" && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <ListFilter className="h-5 w-5" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-tighter whitespace-nowrap">
            {t("bottomNav.filter")}
          </span>
        </button>

        {/* User / Login */}
        <button
          onClick={onLogin}
          className={`flex flex-col items-center gap-1.5 transition-colors duration-300 flex-1 text-gray-400 hover:text-primary/70 relative`}
        >
          <div className="relative p-1.5 z-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-transparent rounded-xl transition-colors group-active:bg-gray-100 -z-10" />
            {user && user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User"
                className="h-5 w-5 rounded-full object-cover"
              />
            ) : (
              <UserIcon className="h-5 w-5" />
            )}
          </div>
          <span className="text-[9px] font-black uppercase tracking-tighter whitespace-nowrap">
            {t("bottomNav.account")}
          </span>
        </button>
      </div>

      {/* iPhone Home Indicator Space */}
      <div className="h-[env(safe-area-inset-bottom)] min-h-[10px] bg-white/95 backdrop-blur-xl" />
    </div>
  );
}
