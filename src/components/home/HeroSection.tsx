import React from "react";
import { UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  greeting: string;
  onSuggest: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  greeting,
  onSuggest,
}) => {
  return (
    <>
      <section className="mb-12">
        <div className="space-y-1 mb-8 text-center">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-sm font-bold text-primary uppercase tracking-widest animate-bounce-in">
            {greeting}
          </p>
          <h2 className="text-5xl font-black tracking-tight sm:text-6xl leading-[1.1] mt-6">
            Hôm nay bạn <br />
            <span className="text-gradient inline-block animate-in slide-in-from-bottom-4 duration-700">
              thấy thế nào?
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm max-w-xs mx-auto">
            Để chúng tôi giúp bạn chọn món ngon cho bữa ăn hôm nay! 🍜
          </p>
        </div>
      </section>

      <section className="mb-16 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary via-orange-500 to-amber-500 rounded-[3rem] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />

          <div
            className="absolute -top-4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute -top-6 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-float opacity-60"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute -bottom-4 left-1/3 w-2 h-2 bg-amber-400 rounded-full animate-float opacity-60"
            style={{ animationDelay: "1s" }}
          />

          <Button
            size="xl"
            variant="luxury"
            onClick={onSuggest}
            className="relative h-20 px-12 rounded-[2.5rem] shadow-2xl shadow-primary/40 border-4 border-white"
          >
            <div className="absolute inset-0 rounded-[2.25rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            <span className="relative z-10 flex items-center gap-4 text-lg font-black uppercase tracking-wider">
              Ăn gì bây giờ?
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                <UtensilsCrossed className="h-6 w-6 animate-bounce" />
              </div>
            </span>
          </Button>
        </div>
      </section>
    </>
  );
};
