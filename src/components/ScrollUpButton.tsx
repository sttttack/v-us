// components/ScrollUpButton.tsx
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-8 right-8
        bg-primary text-white p-3 rounded-full shadow-lg
        hover:bg-primary-dark
        transition-colors duration-300
        z-50
      "
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};
