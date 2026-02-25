import { useState, useCallback } from "react";
import { DEFAULT_LOCATION } from "../constants";

export interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  area: string | null;
  loading: boolean;
  error: string | null;
  hasAttempted: boolean;
  isFallback: boolean;
}

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    area: null,
    loading: false,
    error: null,
    hasAttempted: false,
    isFallback: false,
  });

  const getAreaName = useCallback(
    async (lat: number, lon: number) => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000); // reduced to 3s for faster fallback

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`,
          {
            signal: controller.signal,
            headers: {
              "Accept-Language": "vi",
              "User-Agent": "TodayIEatV1.0",
            },
          },
        );

        clearTimeout(timeoutId);
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        const address = data.address;

        const candidateArea =
          address.city_district ||
          address.district ||
          address.county ||
          address.town ||
          address.suburb;

        const cityName =
          address.city || address.province || address.state || "";
        const isPickCity = !candidateArea || candidateArea === cityName;
        const district = isPickCity ? null : candidateArea;

        setState((prev) => ({
          ...prev,
          area: district || DEFAULT_LOCATION.area,
          latitude: lat,
          longitude: lon,
          loading: false,
          hasAttempted: true,
          isFallback: !district,
        }));
      } catch (err) {
        clearTimeout(timeoutId);
        if (err instanceof Error && err.name === "AbortError") return;

        console.error("Reverse geocoding failed:", err);
        setState((prev) => ({
          ...prev,
          latitude: lat,
          longitude: lon,
          area: DEFAULT_LOCATION.area,
          loading: false,
          error: "Không thể xác định địa chỉ cụ thể, đã chọn Quận 1",
          hasAttempted: true,
          isFallback: true,
        }));
      }
    },
    [DEFAULT_LOCATION, setState],
  );

  const setFallbackLocation = useCallback((errorMsg: string) => {
    setState((prev) => ({
      ...prev,
      latitude: DEFAULT_LOCATION.latitude,
      longitude: DEFAULT_LOCATION.longitude,
      area: DEFAULT_LOCATION.area,
      loading: false,
      error: `${errorMsg}. Đã chuyển sang Quận 1.`,
      hasAttempted: true,
      isFallback: true,
    }));
  }, []);

  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setFallbackLocation("Trình duyệt không hỗ trợ định vị");
      return;
    }

    setState((prev) => ({
      ...prev,
      loading: true,
      error: null,
      hasAttempted: false,
      isFallback: false,
    }));

    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 10000, // Reduced slightly for better UX
      maximumAge: 60000,
    };

    const successCallback = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      getAreaName(latitude, longitude);
    };

    const errorCallback = (error: GeolocationPositionError) => {
      // If high accuracy timed out, try one more time with low accuracy
      if (error.code === 3 && options.enableHighAccuracy) {
        console.warn(
          "High accuracy timed out, falling back to low accuracy...",
        );
        navigator.geolocation.getCurrentPosition(
          successCallback,
          (secondError) => {
            let errorMsg = "Lỗi định vị";
            if (secondError.code === 1)
              errorMsg = "Bạn đã từ chối quyền truy cập vị trí";
            else if (secondError.code === 2)
              errorMsg = "Không thể xác định vị trí";
            else if (secondError.code === 3)
              errorMsg = "Hết thời gian yêu cầu vị trí";

            setFallbackLocation(errorMsg);
          },
          { ...options, enableHighAccuracy: false, timeout: 5000 },
        );
      } else {
        let errorMsg = "Lỗi định vị";
        if (error.code === 1) errorMsg = "Bạn đã từ chối quyền truy cập vị trí";
        else if (error.code === 2) errorMsg = "Không thể xác định vị trí";
        else if (error.code === 3) errorMsg = "Hết thời gian yêu cầu vị trí";

        setFallbackLocation(errorMsg);
      }
    };

    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options,
    );
  }, [getAreaName, setFallbackLocation]);

  const reset = useCallback(() => {
    setState({
      latitude: null,
      longitude: null,
      area: null,
      loading: false,
      error: null,
      hasAttempted: false,
      isFallback: false,
    });
  }, []);

  return { ...state, getLocation, reset };
};
