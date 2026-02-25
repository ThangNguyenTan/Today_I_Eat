import { useState, useEffect } from "react";
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
  const [blur, setBlur] = useState(true);

  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
      setTimeout(() => setBlur(false), 300);
    };
  }, [src]);

  return (
    <div
      className={cn("relative overflow-hidden bg-gray-100", containerClassName)}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-all duration-700 ease-in-out",
          blur ? "scale-110 blur-lg grayscale" : "scale-100 blur-0 grayscale-0",
          !isLoaded && "opacity-0",
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
