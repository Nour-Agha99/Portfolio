"use client";
import React from "react";

const ScrollUp = () => {
  const [showScrollButton, setShowScrollButton] = React.useState(false);
  const useScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showScrollButton && (
        <div
          onClick={useScrollToTop}
          className="cursor-pointer animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-lg flex items-center justify-center fixed right-12 bottom-12"
        >
          <svg
            className="w-6 h-6 text-violet-500 rotate-180"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      )}
    </>
  );
};

export default ScrollUp;
