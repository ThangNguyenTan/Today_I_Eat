import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import {
  Check,
  ChevronsUpDown,
  Sparkles,
  MapPin,
  Link2,
  MessageSquare,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getCurrentMealTime } from "@/lib/utils";
import type { MealTime } from "@/types";
import { FOOD_TYPES, MEAL_TIMES } from "@/constants";

interface RestaurantFormProps {
  onAdd: (restaurant: {
    name: string;
    type: string;
    location: string;
    googleMapsUrl?: string;
    notes?: string;
    mealTimes: MealTime[];
  }) => void;
}

const foodTypes = FOOD_TYPES;
const mealTimeOptions = MEAL_TIMES;

// Emoji mapping for meal times
const mealTimeEmojis: Record<string, string> = {
  "Bữa sáng": "🌅",
  "Bữa trưa": "☀️",
  "Bữa tối": "🌙",
  "Ăn khuya": "🌃",
};

export const RestaurantForm: React.FC<RestaurantFormProps> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [googleMapsUrl, setGoogleMapsUrl] = useState("");
  const [notes, setNotes] = useState("");
  const [mealTimes, setMealTimes] = useState<MealTime[]>(() => [
    getCurrentMealTime(),
  ]);

  const toggleMealTime = (time: MealTime) => {
    setMealTimes((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !type || !location || mealTimes.length === 0) return;

    onAdd({
      name,
      type,
      location,
      googleMapsUrl: googleMapsUrl || undefined,
      notes,
      mealTimes,
    });
    setName("");
    setType("");
    setLocation("");
    setGoogleMapsUrl("");
    setNotes("");
    setMealTimes([getCurrentMealTime()]);
  };

  const isFormValid = name && type && location && mealTimes.length > 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Progress indicator */}
      <div className="flex gap-2 pb-2">
        {[name, type, location, mealTimes.length > 0].map((filled, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${filled ? "bg-gradient-to-r from-primary to-orange-500" : "bg-gray-100"}`}
          />
        ))}
      </div>

      <div className="space-y-5">
        {/* Restaurant Name */}
        <div className="space-y-2">
          <Label
            htmlFor="name"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Tên Quán
          </Label>
          <Input
            id="name"
            placeholder="Ví dụ: Phở Hòa Pasteur"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-2xl border-gray-100 focus:ring-primary focus:border-primary h-14 text-base px-5 transition-all duration-300 focus:shadow-lg focus:shadow-primary/10"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Food Type */}
          <div className="space-y-2">
            <Label
              htmlFor="type"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground"
            >
              <span className="text-base">🍜</span>
              Loại Món Ăn
            </Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className={cn(
                    "w-full h-14 justify-between rounded-2xl border-gray-100 font-medium hover:bg-transparent hover:border-primary/50 transition-all duration-300",
                    type && "border-primary/30 bg-primary/5",
                  )}
                >
                  <span
                    className={
                      type ? "text-foreground" : "text-muted-foreground"
                    }
                  >
                    {type
                      ? foodTypes.find((t) => t === type)
                      : "Chọn loại món ăn..."}
                  </span>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                side="bottom"
                avoidCollisions={false}
                className="p-0 rounded-2xl border-gray-100 shadow-2xl w-[var(--radix-popover-trigger-width)]"
              >
                <Command>
                  <CommandInput
                    placeholder="Tìm loại món..."
                    className="h-12"
                  />
                  <CommandList>
                    <CommandEmpty>Không tìm thấy loại này.</CommandEmpty>
                    <CommandGroup>
                      {foodTypes.map((t) => (
                        <CommandItem
                          key={t}
                          value={t}
                          onPointerDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          onSelect={() => {
                            setType(t);
                            setOpen(false);
                          }}
                          className="py-3 px-4 flex items-center justify-between cursor-pointer rounded-xl mx-1 my-0.5"
                        >
                          {t}
                          <Check
                            className={cn(
                              "h-4 w-4 text-primary",
                              type === t ? "opacity-100" : "opacity-0",
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label
              htmlFor="location"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Địa Chỉ
            </Label>
            <Input
              id="location"
              placeholder="Quận 1, TP.HCM"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={cn(
                "rounded-2xl border-gray-100 h-14 px-5 transition-all duration-300 focus:shadow-lg focus:shadow-primary/10",
                location && "border-primary/30 bg-primary/5",
              )}
              required
            />
          </div>
        </div>

        {/* Meal Times */}
        <div className="space-y-3">
          <Label className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
            <Clock className="h-3.5 w-3.5 text-primary" />
            Phù hợp ăn lúc nào?
          </Label>
          <div className="flex flex-wrap gap-2">
            {mealTimeOptions.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => toggleMealTime(time)}
                className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border-2 flex items-center gap-2 hover:scale-105 active:scale-95 ${
                  mealTimes.includes(time)
                    ? "bg-gradient-to-r from-primary to-orange-500 border-transparent text-white shadow-lg shadow-primary/25"
                    : "bg-white border-gray-100 text-gray-500 hover:border-primary/50 hover:text-primary"
                }`}
              >
                <span>{mealTimeEmojis[time]}</span>
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Google Maps URL */}
        <div className="space-y-2">
          <Label
            htmlFor="googleMapsUrl"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground"
          >
            <Link2 className="h-3.5 w-3.5 text-primary" />
            Link Google Maps
            <span className="text-[10px] font-normal normal-case tracking-normal text-muted-foreground/60">
              (không bắt buộc)
            </span>
          </Label>
          <Input
            id="googleMapsUrl"
            placeholder="Dán link vào đây..."
            value={googleMapsUrl}
            onChange={(e) => setGoogleMapsUrl(e.target.value)}
            className="rounded-2xl border-gray-100 h-14 px-5 transition-all duration-300"
          />
        </div>

        {/* Notes */}
        <div className="space-y-2">
          <Label
            htmlFor="notes"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground"
          >
            <MessageSquare className="h-3.5 w-3.5 text-primary" />
            Ghi chú thêm
            <span className="text-[10px] font-normal normal-case tracking-normal text-muted-foreground/60">
              (không bắt buộc)
            </span>
          </Label>
          <Input
            id="notes"
            placeholder="Không gian thoáng, có chỗ đỗ xe..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="rounded-2xl border-gray-100 h-14 px-5 transition-all duration-300"
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={!isFormValid}
        className={cn(
          "w-full h-16 rounded-2xl text-white font-black uppercase tracking-widest transition-all duration-500",
          isFormValid
            ? "bg-gradient-to-r from-primary via-orange-500 to-amber-500 shadow-xl shadow-primary/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/40 active:scale-[0.98]"
            : "bg-gray-200 cursor-not-allowed",
        )}
      >
        {isFormValid ? (
          <span className="flex items-center gap-3">✨ Thêm Vào Danh Sách</span>
        ) : (
          "Điền đầy đủ thông tin nhé"
        )}
      </Button>
    </form>
  );
};
