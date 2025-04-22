import React from "react";

const GlobalGlow: React.FC<{ active: boolean }> = ({ active }) => (
  <div
    className={`fixed inset-0 z-20 pointer-events-none transition-all duration-500 ${active ? "bg-primary/40 backdrop-blur-sm" : "bg-transparent"}`}
    aria-hidden="true"
  />
);

export default GlobalGlow;
