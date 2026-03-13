import React from "react";
import { UtensilsCrossed } from "lucide-react";
import { UserMenu } from "@/components/UserMenu";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useTranslation } from "react-i18next";
import { type User } from "firebase/auth";
interface HeaderProps {
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
  onOpenFavorites: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onLogin,
  onLogout,
  onOpenFavorites,
}) => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-40 w-full glass-premium border-b tracking-tight">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <div
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-orange-500 text-white shadow-lg shadow-primary/25 ring-2 sm:ring-4 ring-white group-hover:scale-110 transition-transform duration-300">
            <UtensilsCrossed className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
            <div
              className="absolute inset-0 rounded-2xl bg-primary/30 animate-ping opacity-0 group-hover:opacity-100"
              style={{ animationDuration: "1.5s" }}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm sm:text-lg font-black tracking-tight leading-none group-hover:text-primary transition-colors duration-300">
              {t("header.title")}
            </h1>
            <span className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground line-clamp-1">
              🇻🇳 {t("header.subtitle")}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageSelector />
          <UserMenu
            user={
              user
                ? {
                    name: user.displayName || "User",
                    email: user.email || "",
                    photoURL:
                      user.photoURL ||
                      `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.uid}`,
                  }
                : null
            }
            onLogin={onLogin}
            onLogout={onLogout}
            onOpenFavorites={onOpenFavorites}
          />
        </div>
      </div>
    </header>
  );
};
