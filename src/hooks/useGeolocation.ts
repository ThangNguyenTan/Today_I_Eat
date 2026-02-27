import { useState, useCallback, useEffect } from "react";
import { DEFAULT_LOCATION } from "../constants";

export interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  area: string | null;
  loading: boolean;
  error: string | null;
  hasAttempted: boolean;
  isFallback: boolean;
  permissionStatus: PermissionState | "loading";
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
    permissionStatus: "loading",
  });

  // Check permission status on mount and when it changes
  useEffect(() => {
    if (!navigator.permissions) {
      setState((prev) => ({ ...prev, permissionStatus: "prompt" }));
      return;
    }

    let permissionObj: PermissionStatus | null = null;

    const updateStatus = () => {
      if (permissionObj) {
        setState((prev) => ({
          ...prev,
          permissionStatus: permissionObj!.state,
        }));
      }
    };

    navigator.permissions.query({ name: "geolocation" }).then((status) => {
      permissionObj = status;
      updateStatus();
      status.onchange = updateStatus;
    });

    return () => {
      if (permissionObj) permissionObj.onchange = null;
    };
  }, []);

  const getAreaName = useCallback(
    async (lat: number, lon: number) => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);

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

        const district = candidateArea || null;

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
    [DEFAULT_LOCATION],
  );

  const setFallbackLocation = useCallback(
    (errorMsg: string) => {
      setState((prev) => ({
        ...prev,
        latitude: DEFAULT_LOCATION.latitude,
        longitude: DEFAULT_LOCATION.longitude,
        area: DEFAULT_LOCATION.area,
        loading: false,
        error: errorMsg,
        hasAttempted: true,
        isFallback: true,
      }));
    },
    [DEFAULT_LOCATION],
  );

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
      timeout: 8000,
      maximumAge: 60000,
    };

    const successCallback = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      getAreaName(latitude, longitude);
    };

    const errorCallback = (error: GeolocationPositionError) => {
      let errorMsg = "Lỗi định vị";
      if (error.code === 1) {
        errorMsg = "Quyền truy cập vị trí bị từ chối";
        // If they denied, we should update status just in case Permissions API didn't
        setState((prev) => ({ ...prev, permissionStatus: "denied" }));
      } else if (error.code === 2) {
        errorMsg = "Không thể xác định vị trí";
      } else if (error.code === 3) {
        errorMsg = "Hết thời gian yêu cầu vị trí";
      }

      setFallbackLocation(errorMsg);
    };

    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options,
    );
  }, [getAreaName, setFallbackLocation]);

  const reset = useCallback(() => {
    setState((prev) => ({
      ...prev,
      latitude: null,
      longitude: null,
      area: null,
      loading: false,
      error: null,
      hasAttempted: false,
      isFallback: false,
    }));
  }, []);

  return { ...state, getLocation, reset };
};
