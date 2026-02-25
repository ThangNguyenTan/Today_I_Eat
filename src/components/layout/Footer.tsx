import React from "react";
import { UtensilsCrossed, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20 pt-24 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6 relative z-10 mx-auto max-w-2xl sm:max-w-none">
        <div className="grid gap-12 sm:grid-cols-2 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-orange-500 text-white shadow-lg">
                <UtensilsCrossed className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-black tracking-tight">Ăn Gì Đây?</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Nền tảng giúp bạn khám phá tinh hoa ẩm thực Việt Nam. Tìm kiếm
              những quán ăn ngon nhất quanh bạn chỉ với vài cú chạm.
            </p>
          </div>

          <div className="space-y-6 sm:text-right">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">
              Hợp tác kinh doanh
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Bạn muốn đưa quán của mình lên bản đồ ẩm thực?
                <br />
                Hãy liên hệ với chúng tôi để cùng phát triển!
              </p>
              <div className="flex flex-col sm:items-end gap-2">
                <a
                  href="mailto:partnership@angiday.vn"
                  className="group inline-flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors"
                >
                  partnership@angiday.vn
                  <div className="p-1.5 rounded-lg bg-gray-50 group-hover:bg-primary/10 transition-colors">
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </a>
                <a
                  href="tel:+84901234567"
                  className="group inline-flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors"
                >
                  +84 901 234 567
                  <div className="p-1.5 rounded-lg bg-gray-50 group-hover:bg-primary/10 transition-colors">
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
              Ăn Gì Đây? © 2026
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[10px] font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
              >
                Điều khoản
              </a>
              <a
                href="#"
                className="text-[10px] font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
              >
                Bảo mật
              </a>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-[0.1em]">
            Handcrafted with ✨ for Vietnam Cuisine
          </p>
        </div>
      </div>
    </footer>
  );
};
