// components/BackToTop.jsx
"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 0); // show immediately for testing
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-[#003366] text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-black hover:border hover:border-black transform hover:scale-110 transition-transform z-50"
    >
      <FontAwesomeIcon icon={faArrowUp} />Back to Top
    </button>
  );
}
