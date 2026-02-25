import { Card, CardHeader, CardContent } from "./ui/card";

export const RestaurantCardSkeleton = () => {
  return (
    <Card className="relative overflow-hidden border-0 bg-white shadow-sm rounded-[2rem] h-full animate-pulse">
      {/* Thumbnail Skeleton */}
      <div className="w-full h-36 bg-gray-200" />

      <CardHeader className="flex flex-col items-start space-y-3 p-6 pb-2 pt-4">
        <div className="flex w-full items-center justify-between">
          {/* Type Badge Skeleton */}
          <div className="w-24 h-6 rounded-full bg-gray-100" />
          {/* Heart Icon Skeleton */}
          <div className="w-8 h-8 rounded-full bg-gray-50" />
        </div>

        {/* Title Skeleton */}
        <div className="w-3/4 h-7 rounded-lg bg-gray-200" />

        {/* Rating Skeleton */}
        <div className="flex items-center gap-1.5">
          <div className="w-20 h-3 rounded bg-gray-100" />
        </div>
      </CardHeader>

      <CardContent className="p-6 pt-2 space-y-3">
        {/* Location Skeleton */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-gray-50" />
          <div className="flex-1 space-y-2 mt-1">
            <div className="w-full h-3 rounded bg-gray-100" />
            <div className="w-2/3 h-3 rounded bg-gray-100" />
          </div>
        </div>

        {/* Tags Skeleton */}
        <div className="flex gap-1.5">
          <div className="w-16 h-5 rounded-full bg-orange-50/50" />
          <div className="w-20 h-5 rounded-full bg-orange-50/50" />
        </div>

        {/* Maps Button Skeleton */}
        <div className="pt-1">
          <div className="w-full h-12 rounded-xl bg-gray-50" />
        </div>
      </CardContent>
    </Card>
  );
};
