import React from 'react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogIn, LogOut, Cloud, Heart } from 'lucide-react';

interface UserMenuProps {
  user: {
    name: string;
    email: string;
    photoURL: string;
  } | null;
  onLogin: () => void;
  onLogout: () => void;
  isSyncing?: boolean;
}

export const UserMenu: React.FC<UserMenuProps> = ({ user, onLogin, onLogout, isSyncing }) => {
  if (!user) {
    return (
      <Button
        variant="ghost"
        onClick={onLogin}
        className="rounded-full gap-2 font-bold text-xs uppercase tracking-widest hover:bg-primary/10 transition-all active:scale-95"
      >
        <LogIn className="h-4 w-4" />
        <span className="hidden sm:inline">Đăng nhập</span>
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {isSyncing && (
        <div className="flex items-center gap-1 px-3 py-1 bg-green-50 rounded-full border border-green-100 animate-in fade-in slide-in-from-right-2">
          <Cloud className="h-3 w-3 text-green-500 animate-pulse" />
          <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Đã đồng bộ</span>
        </div>
      )}
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="relative group outline-none">
            <div className="h-10 w-10 rounded-2xl overflow-hidden border-2 border-white shadow-lg shadow-black/5 ring-2 ring-primary/20 transition-all group-hover:ring-primary group-active:scale-95">
              <img src={user.photoURL} alt={user.name} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 rounded-[2rem] p-4 mt-2 border-0 shadow-2xl glass" align="end">
          <DropdownMenuLabel className="p-2 pt-0">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-black leading-none">{user.name}</p>
              <p className="text-xs font-medium text-muted-foreground">{user.email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="my-2 bg-gray-100/50" />
          <DropdownMenuItem className="rounded-xl py-3 cursor-pointer gap-3 focus:bg-primary/5 focus:text-primary transition-colors">
            <Heart className="h-4 w-4 text-red-500" />
            <div className="flex flex-col">
              <span className="font-bold text-xs uppercase tracking-widest">Quán ruột</span>
              <span className="text-[10px] text-muted-foreground">Tự động đồng bộ</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="my-2 bg-gray-100/50" />
          <DropdownMenuItem 
            onClick={onLogout}
            className="rounded-xl py-3 cursor-pointer gap-3 text-red-500 focus:bg-red-50 focus:text-red-500 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span className="font-bold text-xs uppercase tracking-widest">Đăng xuất</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
