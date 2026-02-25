import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getGoogleMapsUrl(
  name: string,
  address: string,
  lat?: number,
  lng?: number,
): string {
  const query = `${name} ${address}`.trim();
  const encodedQuery = encodeURIComponent(query);

  if (lat && lng) {
    // Combine name/address search with absolute coordinate precision
    // Using api=1 Search with query for labeling/context and center/zoom for precise positioning
    return `https://www.google.com/maps/search/?api=1&query=${encodedQuery}&center=${lat},${lng}&zoom=18`;
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
}

export function formatOperatingHours(
  openTime?: string,
  closeTime?: string,
): string | null {
  if (!openTime || !closeTime) return null;

  const formatTime = (timeStr: string) => {
    const parts = timeStr.split(":");
    if (parts.length < 2) return timeStr;
    return `${parts[0]}:${parts[1]}`;
  };

  return `${formatTime(openTime)} - ${formatTime(closeTime)}`;
}
