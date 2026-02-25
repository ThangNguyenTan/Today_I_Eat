import { useState, useEffect, useRef } from "react";
import { Search, X, Clock, Trash2 } from "lucide-react";
import { Loader2 } from "lucide-react";

interface SearchBarProps {
  query: string;
  onChange: (query: string) => void;
  isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onChange,
  isLoading,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("recent_searches");
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse recent searches", e);
      }
    }
  }, []);

  const saveSearch = (q: string) => {
    if (!q.trim()) return;
    const updated = [
      q.trim(),
      ...recentSearches.filter((s) => s !== q.trim()),
    ].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem("recent_searches", JSON.stringify(updated));
  };

  const removeSearch = (q: string) => {
    const updated = recentSearches.filter((s) => s !== q);
    setRecentSearches(updated);
    localStorage.setItem("recent_searches", JSON.stringify(updated));
  };

  const clearAll = () => {
    setRecentSearches([]);
    localStorage.removeItem("recent_searches");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && query) {
      saveSearch(query);
      setIsFocused(false);
    }
  };

  // Close recent searches when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative group z-30 w-full" ref={containerRef}>
      {/* Gradient border effect */}
      <div
        className={`absolute -inset-0.5 rounded-[2.2rem] bg-gradient-to-r from-primary/50 via-orange-400/50 to-amber-500/50 blur transition duration-500 ${isFocused ? "opacity-100 blur-md" : "opacity-20 group-hover:opacity-100"}`}
      />

      <div
        className={`relative flex items-center bg-white rounded-[2rem] shadow-xl shadow-black/5 transition-all duration-300 ${isFocused ? "shadow-2xl shadow-primary/20 -translate-y-1" : ""}`}
      >
        <div
          className={`pl-6 transition-colors duration-300 ${isFocused ? "text-primary" : "text-muted-foreground"}`}
        >
          {isLoading ? (
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          ) : (
            <Search className="h-6 w-6" />
          )}
        </div>
        <input
          type="text"
          placeholder="Tìm tên quán, món ăn hoặc địa chỉ..."
          value={query}
          onFocus={() => setIsFocused(true)}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full h-16 pl-4 pr-14 rounded-[2rem] bg-transparent border-0 focus:ring-0 text-base font-medium placeholder:text-muted-foreground/50"
        />
        {query && (
          <button
            onClick={() => {
              onChange("");
              setIsFocused(true);
            }}
            className="absolute inset-y-0 right-4 my-auto h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300 hover:rotate-90"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Recent Searches Dropdown */}
      {isFocused && recentSearches.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-3 p-4 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300 overflow-hidden z-50">
          <div className="flex items-center justify-between mb-3 px-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              Tìm kiếm gần đây
            </h4>
            <button
              onClick={clearAll}
              className="text-[10px] font-bold text-primary hover:underline uppercase tracking-widest flex items-center gap-1"
            >
              <Trash2 className="h-3 w-3" />
              Xóa hết
            </button>
          </div>
          <div className="space-y-1">
            {recentSearches.map((s, i) => (
              <div
                key={i}
                className="group/item flex items-center justify-between p-3 rounded-2xl hover:bg-primary/5 cursor-pointer transition-colors"
                onClick={() => {
                  onChange(s);
                  setIsFocused(false);
                }}
              >
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-gray-300 group-hover/item:text-primary transition-colors" />
                  <span className="text-sm font-medium text-gray-700 group-hover/item:text-gray-900">
                    {s}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeSearch(s);
                  }}
                  className="p-1.5 opacity-0 group-hover/item:opacity-100 hover:bg-white rounded-lg transition-all"
                >
                  <X className="h-3 w-3 text-gray-400 hover:text-red-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
