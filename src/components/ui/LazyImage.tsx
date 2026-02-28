import { useState } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  containerClassName,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn("relative overflow-hidden bg-gray-100", containerClassName)}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "transition-all duration-700 ease-in-out w-full h-full object-cover",
          !isLoaded
            ? "scale-110 blur-xl grayscale opacity-0"
            : "scale-100 blur-0 grayscale-0 opacity-100",
          className,
        )}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />
      )}
    </div>
  );
};
