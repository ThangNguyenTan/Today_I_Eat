import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import {
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Compass,
  Tent,
  Map,
  Flame,
  Candy,
  Waves,
  Citrus,
  Leaf,
  Coins,
  Wallet,
  Gem,
  CheckCircle2,
  Heart,
  UtensilsCrossed,
} from "lucide-react";
import { FOOD_TYPES } from "@/constants";
import type {
  FoodiePersona,
  AdventureLevel,
  TastePreference,
  BudgetPreference,
} from "@/types";
import { cn } from "@/lib/utils";

interface PersonalityQuizProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (persona: FoodiePersona) => void;
}

type Step = "intro" | "adventure" | "taste" | "budget" | "cuisines" | "result";

export const PersonalityQuiz: React.FC<PersonalityQuizProps> = ({
  isOpen,
  onClose,
  onComplete,
}) => {
  const [step, setStep] = useState<Step>("intro");
  const [adventure, setAdventure] = useState<AdventureLevel>("Balanced");
  const [taste, setTaste] = useState<TastePreference>("Umami");
  const [budget, setBudget] = useState<BudgetPreference>("Mid-range");
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);

  const handleNext = () => {
    if (step === "intro") setStep("adventure");
    else if (step === "adventure") setStep("taste");
    else if (step === "taste") setStep("budget");
    else if (step === "budget") setStep("cuisines");
    else if (step === "cuisines") {
      const persona: FoodiePersona = {
        adventureLevel: adventure,
        primaryTaste: taste,
        budgetPreference: budget,
        favoriteCuisines: selectedCuisines,
        lastUpdated: Date.now(),
      };
      onComplete(persona);
      setStep("result");
    }
  };

  const handleBack = () => {
    if (step === "adventure") setStep("intro");
    else if (step === "taste") setStep("adventure");
    else if (step === "budget") setStep("taste");
    else if (step === "cuisines") setStep("budget");
  };

  const toggleCuisine = (type: string) => {
    setSelectedCuisines((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const reset = () => {
    setStep("intro");
    setAdventure("Balanced");
    setTaste("Umami");
    setBudget("Mid-range");
    setSelectedCuisines([]);
  };

  const currentStepNumber = {
    intro: 0,
    adventure: 1,
    taste: 2,
    budget: 3,
    cuisines: 4,
    result: 5,
  }[step];

  const totalSteps = 4;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
          setTimeout(reset, 300);
        }
      }}
    >
      <DialogContent className="fixed left-[50%] top-[50%] z-50 w-[92vw] max-w-md translate-x-[-50%] translate-y-[-50%] border-0 p-0 overflow-hidden rounded-[2.5rem] shadow-2xl h-[80vh] flex flex-col">
        <DialogDescription className="sr-only">
          Khám phá phong cách ẩm thực của bạn qua bài trắc nghiệm ngắn
        </DialogDescription>

        {/* Progress Bar (Visible after intro) */}
        {currentStepNumber > 0 && currentStepNumber <= totalSteps && (
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100 z-50">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out shadow-[0_0_10px_rgba(249,115,22,0.5)]"
              style={{ width: `${(currentStepNumber / totalSteps) * 100}%` }}
            />
          </div>
        )}

        <div className="flex-1 overflow-y-auto no-scrollbar relative bg-white">
          {/* Intro Step */}
          {step === "intro" && (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl animate-pulse" />
                <div className="relative w-24 h-24 rounded-[2rem] bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shadow-xl shadow-primary/20 rotate-12">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-black tracking-tight text-gray-900">
                  Bạn là "thực thần" <br /> loại nào?
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Chỉ với 4 câu hỏi nhanh, AI sẽ hiểu gu ẩm thực của bạn để đưa
                  ra những gợi ý chính xác đến kinh ngạc.
                </p>
              </div>
              <Button
                size="xl"
                onClick={handleNext}
                className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest shadow-xl shadow-primary/20 group"
              >
                Bắt đầu ngay
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}

          {/* Adventure Step */}
          {step === "adventure" && (
            <div className="p-8 space-y-8 animate-in slide-in-from-right-8 duration-500">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  Câu hỏi 1/4
                </span>
                <h2 className="text-2xl font-black text-gray-900 leading-tight">
                  Tâm trạng hôm nay <br /> bạn muốn gì?
                </h2>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    id: "Conservative",
                    title: "Quen thuộc",
                    desc: "Hương vị truyền thống, an toàn",
                    icon: Tent,
                    color: "bg-blue-50 text-blue-600",
                  },
                  {
                    id: "Balanced",
                    title: "Hài hòa",
                    desc: "Một chút mới lạ nhưng vẫn gần gũi",
                    icon: Map,
                    color: "bg-indigo-50 text-indigo-600",
                  },
                  {
                    id: "Adventurous",
                    title: "Khám phá",
                    desc: "Thử thách những món chưa từng ăn",
                    icon: Compass,
                    color: "bg-purple-50 text-purple-600",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setAdventure(item.id as AdventureLevel);
                      setTimeout(handleNext, 300);
                    }}
                    className={cn(
                      "flex items-center gap-4 p-5 rounded-2xl border-2 transition-all text-left group",
                      adventure === item.id
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-gray-50 bg-gray-50/50 hover:border-gray-200",
                    )}
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                        item.color,
                      )}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Taste Step */}
          {step === "taste" && (
            <div className="p-8 space-y-8 animate-in slide-in-from-right-8 duration-500">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  Câu hỏi 2/4
                </span>
                <h2 className="text-2xl font-black text-gray-900 leading-tight">
                  Vị giác của bạn <br /> đang mong đợi điều gì?
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    id: "Spicy",
                    label: "Cay nồng",
                    icon: Flame,
                    color: "text-red-500",
                  },
                  {
                    id: "Sweet",
                    label: "Ngọt ngào",
                    icon: Candy,
                    color: "text-pink-500",
                  },
                  {
                    id: "Salty",
                    label: "Đậm đà",
                    icon: Waves,
                    color: "text-blue-500",
                  },
                  {
                    id: "Sour",
                    label: "Chua thanh",
                    icon: Citrus,
                    color: "text-amber-500",
                  },
                  {
                    id: "Umami",
                    label: "Thanh đạm",
                    icon: Leaf,
                    color: "text-emerald-500",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setTaste(item.id as TastePreference);
                      setTimeout(handleNext, 300);
                    }}
                    className={cn(
                      "flex flex-col items-center justify-center gap-3 p-6 rounded-[2rem] border-2 transition-all group",
                      taste === item.id
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-gray-50 bg-gray-50/50 hover:border-gray-200",
                    )}
                  >
                    <item.icon
                      className={cn(
                        "h-8 w-8 transition-transform group-hover:scale-125 group-hover:rotate-6",
                        item.color,
                      )}
                    />
                    <span className="text-sm font-bold text-gray-900">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Budget Step */}
          {step === "budget" && (
            <div className="p-8 space-y-8 animate-in slide-in-from-right-8 duration-500">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  Câu hỏi 3/4
                </span>
                <h2 className="text-2xl font-black text-gray-900 leading-tight">
                  Bạn định chi bao nhiêu <br /> cho bữa ăn này?
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    id: "Budget",
                    title: "Cực tiết kiệm",
                    icon: Coins,
                    color: "text-emerald-600",
                  },
                  {
                    id: "Mid-range",
                    title: "Bình dân & Ngon",
                    icon: Wallet,
                    color: "text-amber-600",
                  },
                  {
                    id: "Splurge",
                    title: "Thưởng thức sang chảnh",
                    icon: Gem,
                    color: "text-indigo-600",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setBudget(item.id as BudgetPreference);
                      setTimeout(handleNext, 300);
                    }}
                    className={cn(
                      "w-full flex items-center justify-between p-6 rounded-2xl border-2 transition-all group",
                      budget === item.id
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-gray-50 bg-gray-50/50 hover:border-gray-200",
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform",
                          item.color,
                        )}
                      >
                        <item.icon className="h-6 w-6" />
                      </div>
                      <span className="font-bold text-gray-900">
                        {item.title}
                      </span>
                    </div>
                    {budget === item.id && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Cuisines Step */}
          {step === "cuisines" && (
            <div className="p-8 space-y-6 animate-in slide-in-from-right-8 duration-500 flex flex-col h-full">
              <div className="space-y-2 shrink-0">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  Câu hỏi 4/4
                </span>
                <h2 className="text-2xl font-black text-gray-900 leading-tight">
                  Chọn món "ruột" <br /> của bạn (có thể chọn nhiều)
                </h2>
              </div>

              <div className="flex-1 overflow-y-auto no-scrollbar grid grid-cols-2 gap-2 pb-20">
                {FOOD_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleCuisine(type)}
                    className={cn(
                      "px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left flex items-center justify-between",
                      selectedCuisines.includes(type)
                        ? "border-primary bg-primary/5 text-primary font-bold shadow-sm"
                        : "border-gray-100 bg-white text-gray-600 hover:border-gray-200",
                    )}
                  >
                    {type}
                    {selectedCuisines.includes(type) && (
                      <Heart className="h-3 w-3 fill-current" />
                    )}
                  </button>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white/90 to-transparent">
                <Button
                  onClick={handleNext}
                  disabled={selectedCuisines.length === 0}
                  className="w-full h-14 rounded-2xl bg-primary text-white font-black uppercase tracking-widest shadow-xl shadow-primary/20"
                >
                  Hoàn tất
                </Button>
              </div>
            </div>
          )}

          {/* Result Step */}
          {step === "result" && (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-8 animate-in zoom-in-95 duration-700">
              <div className="relative w-32 h-32">
                <div
                  className="absolute inset-0 bg-primary/20 rounded-full animate-ping"
                  style={{ animationDuration: "2s" }}
                />
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse blur-xl" />
                <div className="relative w-full h-full rounded-[2.5rem] bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shadow-2xl">
                  <UtensilsCrossed className="h-16 w-16 text-white animate-bounce" />
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-black tracking-tight text-gray-900">
                  Phân tích hoàn tất!
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed px-4">
                  AI đã hiểu được gu của bạn. Từ giờ các gợi ý sẽ được tinh
                  chỉnh riêng cho bữa ăn của bạn.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 w-full">
                {[
                  {
                    label: "Phong cách",
                    value:
                      adventure === "Conservative"
                        ? "An toàn"
                        : adventure === "Balanced"
                          ? "Hài hòa"
                          : "Khám phá",
                  },
                  { label: "Vị giác", value: taste },
                  {
                    label: "Ngân sách",
                    value:
                      budget === "Budget"
                        ? "$"
                        : budget === "Mid-range"
                          ? "$$"
                          : "$$$",
                  },
                ].map((box) => (
                  <div
                    key={box.label}
                    className="bg-gray-50 rounded-2xl p-3 border border-gray-100"
                  >
                    <p className="text-[10px] font-black uppercase text-gray-400 mb-1">
                      {box.label}
                    </p>
                    <p className="text-xs font-bold text-primary">
                      {box.value}
                    </p>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => {
                  onClose();
                  setTimeout(reset, 300);
                }}
                className="w-full h-16 rounded-2xl bg-gray-900 text-white font-black uppercase tracking-widest shadow-xl shadow-gray-200"
              >
                Khám phá ngay
              </Button>
            </div>
          )}
        </div>

        {/* Navigation Buttons (Back) */}
        {currentStepNumber > 0 &&
          currentStepNumber <= totalSteps &&
          step !== "cuisines" && (
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                className="rounded-full bg-white/50 backdrop-blur-md shadow-sm border border-gray-100 pointer-events-auto"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
          )}
      </DialogContent>
    </Dialog>
  );
};
