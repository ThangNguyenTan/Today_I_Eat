import React from "react";
import { Button } from "./ui/button";
import { UtensilsCrossed, LogIn, Sparkles, MapPin, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

interface LoginOverlayProps {
  onLogin: () => void;
}

export const LoginOverlay: React.FC<LoginOverlayProps> = ({ onLogin }) => {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-0">
      {/* Premium Blur Background */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl" />

      {/* Animated Decorative Blobs */}
      <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div
        className="absolute bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-orange-400/20 blur-[120px] rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative w-full max-w-md bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white p-8 sm:p-12 overflow-hidden animate-in fade-in zoom-in-95 duration-700">
        {/* Shimmer line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="flex flex-col items-center text-center space-y-8">
          {/* Brand Logo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-[2.25rem] bg-gradient-to-br from-primary to-orange-500 text-white shadow-2xl shadow-primary/30 ring-8 ring-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <UtensilsCrossed className="h-10 w-10" />
            </div>
            <div className="absolute -top-2 -right-2 p-2 bg-amber-400 rounded-xl shadow-lg animate-bounce">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-black tracking-tight text-gray-900 leading-tight">
              {t("login.welcome")} <br />
              <span className="text-primary italic">{t("login.appName")}</span>
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed px-4">
              {t("login.desc")}
            </p>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="flex flex-col items-center p-4 rounded-3xl bg-gray-50/80 border border-gray-100">
              <MapPin className="h-5 w-5 text-emerald-500 mb-2" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                {t("login.nearest")}
              </span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-3xl bg-gray-50/80 border border-gray-100">
              <Heart className="h-5 w-5 text-red-500 mb-2" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                {t("login.favorites")}
              </span>
            </div>
          </div>

          <div className="w-full space-y-4">
            <Button
              size="xl"
              onClick={onLogin}
              className="w-full h-16 rounded-2xl bg-gray-900 hover:bg-gray-800 text-white font-black uppercase tracking-widest shadow-2xl shadow-gray-200 group active:scale-95 transition-all"
            >
              <LogIn className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              {t("login.loginBtn")}
            </Button>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-[0.15em]">
              {t("login.footer")}
            </p>
          </div>
        </div>
      </div>

      {/* Background Floating Food (Abstract) */}
      <div className="fixed top-12 left-12 opacity-5 scale-150 rotate-12 select-none pointer-events-none hidden lg:block">
        🍜
      </div>
      <div className="fixed bottom-24 left-32 opacity-5 scale-125 -rotate-12 select-none pointer-events-none hidden lg:block">
        🥖
      </div>
      <div className="fixed top-48 right-12 opacity-10 scale-150 rotate-45 select-none pointer-events-none hidden lg:block">
        🍛
      </div>
      <div className="fixed bottom-12 right-48 opacity-5 scale-110 -rotate-12 select-none pointer-events-none hidden lg:block">
        🍱
      </div>
    </div>
  );
};
