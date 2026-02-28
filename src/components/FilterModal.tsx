import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import {
  MapPin,
  UtensilsCrossed,
  RotateCcw,
  Check,
  ChevronsUpDown,
  Search,
  Filter,
  ArrowLeft,
} from "lucide-react";
import { FOOD_TYPES, HCM_DISTRICTS } from "@/constants";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTypes: string[];
  manualArea: string | null;
  onApply: (filters: { types: string[]; area: string | null }) => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  activeTypes,
  manualArea,
  onApply,
}) => {
  const [localTypes, setLocalTypes] = useState<string[]>(activeTypes);
  const [localArea, setLocalArea] = useState<string | null>(manualArea);
  const [isAreaOpen, setIsAreaOpen] = useState(false);

  // Sync with props ONLY when they actually change, preserving unapplied state across opens
  useEffect(() => {
    setLocalTypes(activeTypes);
    setLocalArea(manualArea);
  }, [activeTypes, manualArea]);

  const handleApply = () => {
    onApply({
      types: localTypes,
      area: localArea,
    });
    onClose();
  };

  const handleReset = () => {
    setLocalTypes([]);
    setLocalArea(null);
  };

  const isResetable = localTypes.length > 0 || localArea !== null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="fixed left-[50%] top-[50%] z-50 w-[94vw] max-w-md translate-x-[-50%] translate-y-[-50%] border-0 p-0 overflow-hidden rounded-[2.5rem] shadow-2xl max-h-[90vh] flex flex-col transition-all duration-300 [&>button]:hidden"
        aria-describedby={undefined}
      >
        <DialogDescription className="sr-only">
          Tùy chỉnh bộ lọc tìm kiếm quán ăn
        </DialogDescription>

        <div className="bg-gradient-to-br from-primary/10 via-orange-50/50 to-amber-50/30 p-8 pt-12 text-center relative flex-none">
          <button
            onClick={onClose}
            className="absolute top-6 left-6 z-20 p-3 rounded-2xl bg-white/80 hover:bg-white text-gray-500 shadow-sm border border-gray-100 transition-all active:scale-95"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none" />

          <DialogHeader className="relative z-10 text-center items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl shadow-primary/10">
              <Filter className="h-8 w-8 text-primary" />
            </div>
            <DialogTitle className="text-3xl font-black tracking-tight text-gray-900">
              Bộ lọc
            </DialogTitle>
            <p className="text-muted-foreground text-[11px] font-bold uppercase tracking-[0.2em] mt-1">
              Tìm kiếm theo nhu cầu của bạn
            </p>
          </DialogHeader>
        </div>

        <div className="flex-1 overflow-y-auto p-8 pt-2 space-y-10 bg-white">
          {/* Location Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 px-1">
              <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-500">
                <MapPin className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                Khu vực
              </span>
            </div>
            <Popover
              open={isAreaOpen}
              onOpenChange={setIsAreaOpen}
              modal={true}
            >
              <PopoverTrigger asChild>
                <button
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-[1.25rem] text-sm font-bold transition-all border-2 ${
                    localArea
                      ? "bg-emerald-50/30 border-emerald-100 text-emerald-600 shadow-sm"
                      : "bg-gray-50/50 border-transparent text-gray-500 hover:bg-gray-100/50"
                  }`}
                >
                  <span className="uppercase tracking-widest">
                    {localArea || "Toàn thành phố"}
                  </span>
                  <ChevronsUpDown className="h-4 w-4 opacity-30" />
                </button>
              </PopoverTrigger>
              <PopoverContent
                className="w-[calc(100vw-4rem)] max-w-[320px] p-0 rounded-3xl border-gray-100 shadow-2xl z-[60] pointer-events-auto"
                style={{ touchAction: "none" }}
                align="center"
                sideOffset={10}
                onInteractOutside={() => {
                  // Don't close or prevent interactions when it's outside
                }}
              >
                <Command>
                  <CommandInput
                    placeholder="Tìm Quận..."
                    className="h-14 text-sm border-none focus:ring-0"
                  />
                  <CommandList
                    className="max-h-[280px] p-2 overflow-y-auto"
                    style={{ touchAction: "pan-y" }}
                  >
                    <CommandEmpty className="text-sm py-8 text-center text-muted-foreground">
                      Không tìm thấy khu vực này 📍
                    </CommandEmpty>
                    <CommandGroup>
                      {HCM_DISTRICTS.map((district) => (
                        <CommandItem
                          key={district}
                          value={district}
                          onSelect={() => {
                            setLocalArea(district);
                            setIsAreaOpen(false);
                          }}
                          className="text-sm py-3.5 px-4 rounded-xl cursor-pointer hover:bg-emerald-50 data-[selected=true]:bg-emerald-100/50"
                        >
                          <div className="flex items-center justify-between w-full">
                            <span className="font-bold">{district}</span>
                            {localArea === district && (
                              <Check className="h-4 w-4 text-emerald-500" />
                            )}
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Categories Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-orange-50 text-orange-500">
                  <UtensilsCrossed className="h-4 w-4" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                  Loại món ăn
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setLocalTypes([])}
                className={`px-4 py-4 rounded-2xl text-[11px] font-black uppercase tracking-wider transition-all duration-300 border-2 ${
                  localTypes.length === 0
                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white border-gray-100 text-gray-400 hover:border-primary/30 hover:text-primary"
                }`}
              >
                🍽️ Tất cả
              </button>
              {FOOD_TYPES.map((type) => {
                const emoji =
                  (
                    {
                      Phở: "🍜",
                      "Bánh Mì": "🥖",
                      "Gỏi Cuốn": "🥗",
                      "Chả Giò": "🥓",
                      "Nem Rán": "🥓",
                      "Bún Chả": "🍜",
                      "Bún Bò Huế": "🍜",
                      "Cơm Tấm": "🍚",
                      "Cao Lầu": "🍜",
                      "Bánh Cuốn": "🍥",
                      "Bánh Xèo": "🥞",
                      "Bánh Khọt": "🥞",
                      "Bún Đậu Mắm Tôm": "🥒",
                      "Bánh Bao": "🥟",
                      Xôi: "🍚",
                      "Bún Riêu": "🍜",
                      "Bò Kho": "🥘",
                      "Nem Nướng": "🍢",
                      "Bánh Tráng Nướng": "🍕",
                      "Bánh Bèo": "🍥",
                      "Bánh Canh": "🍜",
                      "Bánh Mì Xíu Mại": "🥖",
                      "Bún Thịt Nướng": "🍜",
                      "Mì Quảng": "🍝",
                      "Hủ Tiếu": "🍲",
                      "Cơm Gà": "🍗",
                      "Cơm Chiên": "🍚",
                      "Bún Mắm": "🍜",
                      "Cháo Lòng": "🥣",
                      Ốc: "🐚",
                      Lẩu: "🫕",
                      "Trà Sữa": "🧋",
                      "Cà Phê": "☕",
                      Chè: "🍧",
                    } as Record<string, string>
                  )[type] || "🍽️";

                return (
                  <button
                    key={type}
                    onClick={() => {
                      if (localTypes.includes(type)) {
                        setLocalTypes(localTypes.filter((t) => t !== type));
                      } else {
                        setLocalTypes([...localTypes, type]);
                      }
                    }}
                    className={`px-4 py-4 rounded-2xl text-[11px] font-black uppercase tracking-wider transition-all duration-300 border-2 truncate flex items-center justify-center gap-2 ${
                      localTypes.includes(type)
                        ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                        : "bg-white border-gray-100 text-gray-400 hover:border-primary/30 hover:text-primary"
                    }`}
                  >
                    <span>{emoji}</span>
                    <span className="truncate">{type}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-6 bg-white border-t border-gray-100 flex-none flex items-center gap-3">
          <button
            onClick={handleReset}
            disabled={!isResetable}
            className={`flex items-center justify-center gap-2 h-[60px] px-6 rounded-[1.25rem] font-black uppercase tracking-widest transition-all border-2 ${
              isResetable
                ? "bg-red-50 border-red-100 text-red-500 hover:bg-red-100 hover:border-red-200"
                : "bg-gray-50 border-gray-100 text-gray-300 pointer-events-none"
            }`}
          >
            <RotateCcw className="h-5 w-5" />
            Xóa
          </button>
          <Button
            onClick={handleApply}
            className="flex-1 h-[60px] rounded-[1.25rem] bg-gradient-to-r from-primary to-orange-500 text-white font-black uppercase tracking-widest shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 gap-3"
          >
            <Search className="h-5 w-5" />
            Tìm kiếm ngay
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
