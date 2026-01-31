import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import type { FoodType, MealTime } from '@/types';
import { FOOD_TYPES, MEAL_TIMES } from '@/constants';

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

export const RestaurantForm: React.FC<RestaurantFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState<string>('');
  const [location, setLocation] = useState('');
  const [googleMapsUrl, setGoogleMapsUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [mealTimes, setMealTimes] = useState<MealTime[]>(["Trưa", "Tối"]);

  const toggleMealTime = (time: MealTime) => {
    setMealTimes(prev => 
      prev.includes(time) 
        ? prev.filter(t => t !== time) 
        : [...prev, time]
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
      mealTimes
    });
    setName('');
    setType('');
    setLocation('');
    setGoogleMapsUrl('');
    setNotes('');
    setMealTimes(["Trưa", "Tối"]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-muted-foreground mr-1">Tên Quán</Label>
          <Input
            id="name"
            placeholder="Ví dụ: Phở Hòa Pasteur"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl border-gray-100 focus:ring-primary h-12"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="type" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Loại Món Ăn</Label>
            <Select value={type} onValueChange={setType} required>
              <SelectTrigger className="rounded-xl border-gray-100 h-12">
                <SelectValue placeholder="Chọn loại món ăn" />
              </SelectTrigger>
              <SelectContent>
                {foodTypes.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Địa Chỉ</Label>
            <Input
              id="location"
              placeholder="Quận 1, TP.HCM"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="rounded-xl border-gray-100 h-12"
              required
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Phù hợp ăn lúc nào?</Label>
          <div className="flex flex-wrap gap-2">
            {mealTimeOptions.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => toggleMealTime(time)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  mealTimes.includes(time)
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-white border-gray-100 text-gray-500 hover:border-primary/50'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="googleMapsUrl" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Link Google Maps</Label>
          <Input
            id="googleMapsUrl"
            placeholder="Dán link vào đây..."
            value={googleMapsUrl}
            onChange={(e) => setGoogleMapsUrl(e.target.value)}
            className="rounded-xl border-gray-100 h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Ghi chú thêm</Label>
          <Input
            id="notes"
            placeholder="Không gian thoáng, có chỗ đỗ xe..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="rounded-xl border-gray-100 h-12"
          />
        </div>
      </div>

      <Button type="submit" className="w-full h-14 rounded-2xl bg-primary text-white font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
        Thêm Vào Danh Sách
      </Button>
    </form>
  );
};
