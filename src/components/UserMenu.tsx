import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogIn, LogOut, Heart, Sparkles } from "lucide-react";

interface UserMenuProps {
  user: {
    name: string;
    email: string;
    photoURL: string;
  } | null;
  onLogin: () => void;
  onLogout: () => void;
  onOpenFavorites?: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({
  user,
  onLogin,
  onLogout,
  onOpenFavorites,
}) => {
  if (!user) {
    return (
      <Button
        variant="ghost"
        onClick={onLogin}
        className="group rounded-full gap-2 font-bold text-xs uppercase tracking-widest hover:bg-gradient-to-r hover:from-primary/10 hover:to-orange-500/10 transition-all duration-300 active:scale-95 border border-transparent hover:border-primary/20"
      >
        <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <LogIn className="h-3.5 w-3.5" />
        </div>
        <span className="hidden sm:inline">Đăng nhập</span>
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="relative group outline-none">
            <div className="h-11 w-11 rounded-2xl overflow-hidden border-2 border-white shadow-lg shadow-black/10 ring-2 ring-primary/10 transition-all duration-300 group-hover:ring-primary group-hover:ring-4 group-hover:scale-105 group-active:scale-95">
              <img
                src={user.photoURL}
                alt={user.name}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Online indicator with pulse */}
            <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 border-2 border-white shadow-lg">
              <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50" />
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-72 rounded-[2rem] p-5 mt-3 border-0 shadow-2xl bg-white/95 backdrop-blur-xl"
          align="end"
        >
          {/* User info header */}
          <DropdownMenuLabel className="p-0 pb-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg">
                  <img
                    src={user.photoURL}
                    alt={user.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 p-1 bg-gradient-to-r from-primary to-orange-500 rounded-lg">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-black leading-tight truncate">
                  {user.name}
                </p>
                <p className="text-xs font-medium text-muted-foreground truncate">
                  {user.email}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] font-bold text-green-600 uppercase">
                    Online
                  </span>
                </div>
              </div>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator className="my-3 bg-gray-100" />

          {/* Menu items */}
          <div className="space-y-1">
            <DropdownMenuItem
              onClick={onOpenFavorites}
              className="rounded-xl py-3.5 px-4 cursor-pointer gap-3 focus:bg-gradient-to-r focus:from-red-50 focus:to-pink-50 transition-all duration-200 group"
            >
              <div className="p-2 rounded-xl bg-red-50 text-red-500 group-focus:bg-red-100 transition-colors">
                <Heart className="h-4 w-4" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="font-bold text-sm">Quán ruột của tôi</span>
                <span className="text-[10px] text-muted-foreground">
                  Danh sách đã lưu
                </span>
              </div>
            </DropdownMenuItem>
          </div>

          <DropdownMenuSeparator className="my-3 bg-gray-100" />

          {/* Logout */}
          <DropdownMenuItem
            onClick={onLogout}
            className="rounded-xl py-3.5 px-4 cursor-pointer gap-3 text-red-500 focus:bg-red-50 focus:text-red-600 transition-all duration-200 group"
          >
            <div className="p-2 rounded-xl bg-red-50 group-hover:bg-red-100 transition-colors">
              <LogOut className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm">Đăng xuất</span>
              <span className="text-[10px] opacity-70">
                Tạm biệt, hẹn gặp lại!
              </span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
