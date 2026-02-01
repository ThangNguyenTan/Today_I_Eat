import { useState, useCallback } from 'react';

export interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  area: string | null;
  loading: boolean;
  error: string | null;
  hasAttempted: boolean;
}

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    area: null,
    loading: false,
    error: null,
    hasAttempted: false,
  });

  const getAreaName = async (lat: number, lon: number) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`,
        {
          signal: controller.signal,
          headers: {
            'Accept-Language': 'vi',
            'User-Agent': 'TodayIEatV1.0'
          },
        }
      );
      
      clearTimeout(timeoutId);
      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      console.log('📍 Geolocation Address Object:', data);
      const address = data.address;
      
      // In Vietnam, 'city_district' and 'district' are the most reliable for 'Quận/Huyện'
      // 'suburb' is often the Ward (Phường), but we'll use it as a low-priority fallback.
      // We explicitly exclude any result that looks like the City name itself.
      const candidateArea = 
        address.city_district || 
        address.district || 
        address.county || 
        address.town || 
        address.suburb;

      const cityName = address.city || address.province || address.state || "";
      const isPickCity = !candidateArea || (candidateArea === cityName);
      
      // If we only have a city name, we return null to force the manual selector/error 
      // rather than showing a useless "Ở Hồ Chí Minh" filter which would show all restaurants.
      const district = isPickCity ? null : candidateArea;
      
      setState(prev => ({ 
        ...prev, 
        area: district, 
        loading: false,
        hasAttempted: true 
      }));
    } catch (err) {
      clearTimeout(timeoutId);
      console.error('Reverse geocoding failed:', err);
      setState(prev => ({ 
        ...prev, 
        loading: false, 
        error: 'Không thể xác định địa chỉ',
        hasAttempted: true 
      }));
    }
  };

  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setState(prev => ({ ...prev, error: 'Trình duyệt không hỗ trợ định vị', hasAttempted: true }));
      return;
    }

    setState(prev => ({ ...prev, loading: true, error: null, hasAttempted: false }));

    const options: PositionOptions = { 
      enableHighAccuracy: true, 
      timeout: 15000, 
      maximumAge: 60000 
    };

    const successCallback = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setState(prev => ({ ...prev, latitude, longitude }));
      getAreaName(latitude, longitude);
    };

    const errorCallback = (error: GeolocationPositionError) => {
      // If high accuracy timed out, try one more time with low accuracy
      if (error.code === 3 && options.enableHighAccuracy) {
        console.warn('High accuracy timed out, falling back to low accuracy...');
        navigator.geolocation.getCurrentPosition(
          successCallback,
          (secondError) => {
            let errorMsg = 'Lỗi định vị';
            if (secondError.code === 1) errorMsg = 'Bạn đã từ chối quyền truy cập vị trí';
            else if (secondError.code === 2) errorMsg = 'Không thể xác định vị trí';
            else if (secondError.code === 3) errorMsg = 'Hết thời gian yêu cầu vị trí';
            
            setState(prev => ({ 
              ...prev, 
              loading: false, 
              error: errorMsg,
              hasAttempted: true 
            }));
          },
          { ...options, enableHighAccuracy: false, timeout: 10000 }
        );
      } else {
        let errorMsg = 'Lỗi định vị';
        if (error.code === 1) errorMsg = 'Bạn đã từ chối quyền truy cập vị trí';
        else if (error.code === 2) errorMsg = 'Không thể xác định vị trí';
        else if (error.code === 3) errorMsg = 'Hết thời gian yêu cầu vị trí';
        
        setState(prev => ({ 
          ...prev, 
          loading: false, 
          error: errorMsg,
          hasAttempted: true 
        }));
      }
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
  }, []);

  const reset = useCallback(() => {
    setState({
      latitude: null,
      longitude: null,
      area: null,
      loading: false,
      error: null,
      hasAttempted: false,
    });
  }, []);

  return { ...state, getLocation, reset };
};
