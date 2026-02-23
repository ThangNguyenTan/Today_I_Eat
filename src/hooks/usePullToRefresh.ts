import { useState, useEffect, useCallback, useRef } from "react";

interface UsePullToRefreshOptions {
  onRefresh: () => Promise<void> | void;
  threshold?: number;
  maxPull?: number;
}

interface UsePullToRefreshReturn {
  pullDistance: number;
  isRefreshing: boolean;
  isPulling: boolean;
  pullProgress: number; // 0 to 1
}

export function usePullToRefresh({
  onRefresh,
  threshold = 80,
  maxPull = 120,
}: UsePullToRefreshOptions): UsePullToRefreshReturn {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isPulling, setIsPulling] = useState(false);

  const startY = useRef(0);
  const currentY = useRef(0);
  const isAtTop = useRef(true);

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      // Only enable pull-to-refresh when scrolled to top
      if (window.scrollY <= 0 && !isRefreshing) {
        startY.current = e.touches[0].clientY;
        isAtTop.current = true;
      } else {
        isAtTop.current = false;
      }
    },
    [isRefreshing],
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isAtTop.current || isRefreshing) return;

      currentY.current = e.touches[0].clientY;
      const diff = currentY.current - startY.current;

      // Only allow pulling down
      if (diff > 0 && window.scrollY <= 0) {
        // Apply resistance - the further you pull, the harder it gets
        const resistance = 0.4;
        const resistedPull = Math.min(diff * resistance, maxPull);

        setPullDistance(resistedPull);
        setIsPulling(true);

        // Prevent default scroll behavior when pulling
        if (resistedPull > 10) {
          e.preventDefault();
        }
      }
    },
    [isRefreshing, maxPull],
  );

  const handleTouchEnd = useCallback(async () => {
    if (!isPulling) return;

    if (pullDistance >= threshold && !isRefreshing) {
      // Trigger refresh
      setIsRefreshing(true);
      setPullDistance(threshold * 0.6); // Keep some visual feedback during refresh

      try {
        await onRefresh();
      } finally {
        // Add a small delay for better UX
        setTimeout(() => {
          setIsRefreshing(false);
          setPullDistance(0);
          setIsPulling(false);
        }, 300);
      }
    } else {
      // Snap back
      setPullDistance(0);
      setIsPulling(false);
    }
  }, [pullDistance, threshold, isRefreshing, isPulling, onRefresh]);

  useEffect(() => {
    const options: AddEventListenerOptions = { passive: false };

    document.addEventListener("touchstart", handleTouchStart, options);
    document.addEventListener("touchmove", handleTouchMove, options);
    document.addEventListener("touchend", handleTouchEnd, options);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return {
    pullDistance,
    isRefreshing,
    isPulling,
    pullProgress: Math.min(pullDistance / threshold, 1),
  };
}
