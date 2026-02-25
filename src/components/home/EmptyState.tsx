import React from "react";
import { Heart, UtensilsCrossed, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  user: any;
  onLogin: () => void;
  onAdd: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  user,
  onLogin,
  onAdd,
}) => {
  return (
    <div className="col-span-full py-24 text-center glass rounded-[2.5rem] border-dashed border-2 border-gray-100 flex flex-col items-center justify-center group overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none" />

      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-pulse" />
        <div className="relative h-28 w-28 flex items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-white to-gray-50 shadow-2xl shadow-primary/10 border-4 border-white transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
          <Heart className="h-12 w-12 text-gray-200 fill-gray-50 transition-colors duration-500 group-hover:text-red-400 group-hover:fill-red-100" />
        </div>
        <div
          className="absolute -top-2 -right-2 h-8 w-8 bg-red-100 rounded-full flex items-center justify-center animate-bounce shadow-lg"
          style={{ animationDelay: "0.2s" }}
        >
          <Heart className="h-4 w-4 text-red-500 fill-red-500" />
        </div>
        <div
          className="absolute -bottom-2 -left-2 h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center animate-bounce shadow-lg"
          style={{ animationDelay: "0.4s" }}
        >
          <UtensilsCrossed className="h-3 w-3 text-orange-500" />
        </div>
      </div>

      {user ? (
        <div className="relative z-10 max-w-sm px-4">
          <h4 className="text-2xl font-black mb-3 text-gray-800">
            Chưa có "quán ruột" nào?
          </h4>
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            Đừng để bụng đói! Hãy thêm những quán ăn yêu thích của bạn để chúng
            tôi có thể gợi ý cho bữa sau nhé.
          </p>
          <Button
            onClick={onAdd}
            className="rounded-xl px-8 h-12 bg-primary text-white font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Thêm quán ngay
          </Button>
        </div>
      ) : (
        <div className="relative z-10 max-w-sm px-4">
          <h4 className="text-2xl font-black mb-3 text-gray-800">
            Bạn chưa đăng nhập
          </h4>
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            Đăng nhập để lưu lại những địa điểm ăn uống yêu thích và đồng bộ
            trên mọi thiết bị của bạn.
          </p>
          <Button
            onClick={onLogin}
            className="rounded-xl px-10 h-12 font-black uppercase tracking-widest bg-gradient-to-r from-primary to-orange-500 text-white shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-all"
          >
            Đăng nhập ngay
          </Button>
        </div>
      )}
    </div>
  );
};
