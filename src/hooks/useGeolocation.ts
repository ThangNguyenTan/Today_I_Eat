import { useState } from 'react';

export interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  area: string | null;
  loading: boolean;
  error: string | null;
}

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    area: null,
    loading: false,
    error: null,
  });

  const getAreaName = async (lat: number, lon: number) => {
    try {
      // Using Nominatim (OpenStreetMap) for free reverse geocoding
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`,
        {
          headers: {
            'Accept-Language': 'vi', // Request Vietnamese response
          },
        }
      );
      const data = await response.json();
      
      // Extract district (Quận/Huyện)
      const address = data.address;
      const district = address.suburb || address.district || address.city_district || address.town || address.village;
      
      setState(prev => ({ ...prev, area: district || null, loading: false }));
    } catch (err) {
      console.error('Reverse geocoding failed:', err);
      setState(prev => ({ ...prev, loading: false, error: 'Không thể xác định địa chỉ' }));
    }
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setState(prev => ({ ...prev, error: 'Trình duyệt không hỗ trợ định vị' }));
      return;
    }

    setState(prev => ({ ...prev, loading: true, error: null }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setState(prev => ({ ...prev, latitude, longitude }));
        getAreaName(latitude, longitude);
      },
      (error) => {
        let errorMsg = 'Lỗi định vị';
        if (error.code === 1) errorMsg = 'Bạn đã từ chối quyền truy cập vị trí';
        else if (error.code === 2) errorMsg = 'Không thể xác định vị trí';
        else if (error.code === 3) errorMsg = 'Hết thời gian yêu cầu vị trí';
        
        setState(prev => ({ ...prev, loading: false, error: errorMsg }));
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  return { ...state, getLocation };
};
