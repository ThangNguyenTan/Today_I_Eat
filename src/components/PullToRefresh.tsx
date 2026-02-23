import { RefreshCw, ChefHat } from "lucide-react";

interface PullToRefreshProps {
  pullDistance: number;
  isRefreshing: boolean;
  pullProgress: number;
}

export function PullToRefresh({
  pullDistance,
  isRefreshing,
  pullProgress,
}: PullToRefreshProps) {
  if (pullDistance <= 0 && !isRefreshing) return null;

  const isReady = pullProgress >= 1;

  return (
    <>
      {/* Dark overlay behind the indicator for contrast */}
      <div
        className="fixed inset-0 z-40 pointer-events-none bg-black/20 backdrop-blur-sm"
        style={{
          opacity: Math.min(pullProgress * 0.8, 0.6),
          transition: isRefreshing ? "opacity 0.3s ease-out" : "none",
        }}
      />

      <div
        className="fixed left-0 right-0 z-50 flex flex-col items-center pointer-events-none"
        style={{
          top: 100,
          transform: `translateY(${Math.max(pullDistance - 10, 0)}px)`,
          transition: isRefreshing ? "transform 0.3s ease-out" : "none",
        }}
      >
        {/* Main indicator - Solid gradient background */}
        <div
          className={`
            flex flex-col items-center gap-3 px-8 py-5 rounded-[2rem]
            bg-gradient-to-br from-primary via-orange-500 to-amber-500
            shadow-[0_10px_40px_rgba(234,88,12,0.4),0_4px_16px_rgba(0,0,0,0.15)]
            border-2 border-white/30
            transition-all duration-300
          `}
          style={{
            opacity: Math.min(pullProgress * 1.5, 1),
            transform: `scale(${0.6 + pullProgress * 0.4})`,
          }}
        >
          {/* Icon container */}
          <div
            className={`
              flex items-center justify-center
              w-14 h-14 rounded-full
              bg-white/20 backdrop-blur-sm
              border-2 border-white/40
              transition-all duration-300
              ${isReady || isRefreshing ? "scale-110" : ""}
            `}
          >
            {isRefreshing ? (
              <RefreshCw
                className="h-6 w-6 text-white animate-spin"
                strokeWidth={2.5}
              />
            ) : isReady ? (
              <ChefHat
                className="h-6 w-6 text-white animate-bounce"
                strokeWidth={2.5}
              />
            ) : (
              <div className="relative">
                {/* Progress ring */}
                <svg className="w-10 h-10 -rotate-90" viewBox="0 0 32 32">
                  <circle
                    cx="16"
                    cy="16"
                    r="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-white/30"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r="12"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeDasharray={2 * Math.PI * 12}
                    strokeDashoffset={2 * Math.PI * 12 * (1 - pullProgress)}
                    strokeLinecap="round"
                    className="transition-all duration-100"
                  />
                </svg>
                <RefreshCw
                  className="absolute inset-0 m-auto h-4 w-4 text-white"
                  strokeWidth={2.5}
                  style={{
                    transform: `rotate(${pullProgress * 360}deg)`,
                  }}
                />
              </div>
            )}
          </div>

          {/* Text indicator */}
          <p className="text-[12px] font-black uppercase tracking-widest text-white whitespace-nowrap drop-shadow-sm">
            {isRefreshing
              ? "🍜 Đang làm mới..."
              : isReady
                ? "✨ Thả để làm mới!"
                : "↓ Kéo xuống để làm mới"}
          </p>
        </div>
      </div>
    </>
  );
}
