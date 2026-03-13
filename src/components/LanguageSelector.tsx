import React from "react";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

export const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="flex items-center gap-2">
      <Select value={i18n.language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-12 sm:w-[130px] h-9 border-2 border-primary/20 bg-white/50 backdrop-blur-sm shadow-sm hover:border-primary/40 transition-all flex justify-center sm:justify-between px-0 sm:px-3">
          <Globe className="h-4 w-4 sm:mr-2 text-primary shrink-0" />
          <div className="hidden sm:block truncate">
            <SelectValue placeholder={t("common.language")} />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="vi" className="font-medium cursor-pointer">
            🇻🇳 {t("common.vietnamese")}
          </SelectItem>
          <SelectItem value="en-US" className="font-medium cursor-pointer">
            🇺🇸 {t("common.english")}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
