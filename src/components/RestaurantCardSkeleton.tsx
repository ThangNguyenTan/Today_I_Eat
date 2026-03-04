import { Card, CardHeader, CardContent } from "./ui/card";

export const RestaurantCardSkeleton = () => {
  return (
    <Card className="group relative overflow-hidden border-0 bg-white shadow-sm rounded-[2rem] h-full cursor-wait">
      {/* Thumbnail Skeleton */}
      <div className="w-full h-44 bg-gray-200/50 animate-pulse relative rounded-t-[2rem]">
        {/* Heart icon skeleton */}
        <div className="absolute top-4 right-4 p-2.5 w-9 h-9 rounded-full bg-black/10 backdrop-blur-md" />

        {/* Operating hours & Distance pill skeletons */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <div className="w-20 h-6 rounded-xl bg-black/10 backdrop-blur-md" />
          <div className="w-16 h-6 rounded-xl bg-black/10 backdrop-blur-md" />
        </div>
      </div>

      <CardHeader className="flex flex-col items-start space-y-3 p-6 pb-2 pt-4">
        <div className="flex w-full items-center justify-between">
          {/* Type Badge Skeleton */}
          <div className="w-24 h-7 rounded-full bg-orange-50/80 animate-pulse" />
        </div>

        {/* Title Skeleton */}
        <div className="w-3/4 h-7 rounded-lg bg-gray-200/80 animate-pulse" />

        {/* Rating Skeleton */}
        <div className="flex items-center gap-1.5 mt-1">
          <div className="w-24 h-3 rounded bg-gray-100/80 animate-pulse" />
        </div>
      </CardHeader>

      <CardContent className="p-6 pt-2 space-y-3">
        {/* Location Skeleton */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-gray-50 flex-shrink-0 animate-pulse" />
          <div className="flex-1 space-y-2 mt-1">
            <div className="w-full h-3 rounded-md bg-gray-100/80 animate-pulse" />
            <div className="w-4/5 h-3 rounded-md bg-gray-100/80 animate-pulse" />
          </div>
        </div>

        {/* Tags Skeleton */}
        <div className="flex gap-1.5 pt-1">
          <div className="w-16 h-5 rounded-full bg-orange-50/50 animate-pulse" />
          <div className="w-20 h-5 rounded-full bg-orange-50/50 animate-pulse" />
        </div>

        {/* Maps Button Skeleton */}
        <div className="pt-2">
          <div className="w-full h-11 rounded-xl bg-gray-50/80 animate-pulse" />
        </div>
      </CardContent>
    </Card>
  );
};
