import React, { useEffect } from "react";
import { Check, Info, AlertTriangle, XCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastProps {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number;
  onDismiss: (id: string) => void;
}

const icons = {
  success: Check,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
};

const styles = {
  success: "bg-green-50 text-green-600 border-green-200",
  error: "bg-red-50 text-red-600 border-red-200",
  warning: "bg-amber-50 text-amber-600 border-amber-200",
  info: "bg-blue-50 text-blue-600 border-blue-200",
};

const iconStyles = {
  success: "bg-green-100 text-green-600",
  error: "bg-red-100 text-red-600",
  warning: "bg-amber-100 text-amber-600",
  info: "bg-blue-100 text-blue-600",
};

export const Toast: React.FC<ToastProps> = ({
  id,
  message,
  type = "info",
  duration = 3000,
  onDismiss,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(id);
    }, duration);
    return () => clearTimeout(timer);
  }, [id, duration, onDismiss]);

  const Icon = icons[type];

  return (
    <div
      className={cn(
        "pointer-events-auto flex w-full max-w-sm items-center gap-3 rounded-2xl border p-4 shadow-xl shadow-black/5 transition-all duration-500 animate-in slide-in-from-top-full fade-in glass",
        styles[type],
      )}
      role="alert"
    >
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
          iconStyles[type],
        )}
      >
        <Icon className="h-4 w-4" />
      </div>

      <div className="flex-1 text-sm font-bold">{message}</div>

      <button
        onClick={() => onDismiss(id)}
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/5 text-black/40 transition-colors hover:bg-black/10 hover:text-black"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
};
