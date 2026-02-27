import React from "react";
import { UtensilsCrossed, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserMenu } from "@/components/UserMenu";

interface HeaderProps {
  user: any;
  isFormOpen: boolean;
  onToggleForm: () => void;
  onLogin: () => void;
  onLogout: () => void;
  onOpenQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  isFormOpen,
  onToggleForm,
  onLogin,
  onLogout,
  onOpenQuiz,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full glass-premium border-b-0">
      <div className="container flex h-16 items-center justify-between px-6">
        <div
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-orange-500 text-white shadow-lg shadow-primary/25 ring-4 ring-white group-hover:scale-110 transition-transform duration-300">
            <UtensilsCrossed className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            <div
              className="absolute inset-0 rounded-2xl bg-primary/30 animate-ping opacity-0 group-hover:opacity-100"
              style={{ animationDuration: "1.5s" }}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-black tracking-tight leading-none group-hover:text-primary transition-colors duration-300">
              Ăn Gì Đây?
            </h1>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
              🇻🇳 Vietnamese Cuisine
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
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
            onOpenQuiz={onOpenQuiz}
          />
          <div className="w-[1px] h-6 bg-gray-100 mx-1 hidden sm:block" />
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleForm}
            className={`rounded-full transition-all duration-300 ${isFormOpen ? "bg-primary text-white scale-110 rotate-45" : "hover:bg-primary/10 hover:scale-110"} hidden sm:flex`}
          >
            <PlusCircle className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};
