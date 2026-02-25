import { useState, useEffect, useCallback } from "react";

export const useAppUI = () => {
  const [greeting, setGreeting] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 11) setGreeting("Chào buổi sáng ☕");
      else if (hour < 14) setGreeting("Chúc bạn bữa trưa ngon miệng 🍱");
      else if (hour < 18) setGreeting("Chiều rồi, làm chút ăn vặt nhỉ? 🍰");
      else setGreeting("Bữa tối ấm cúng nhé 🍜");
    };

    updateGreeting();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return {
    greeting,
    showScrollTop,
    scrollToTop,
  };
};
