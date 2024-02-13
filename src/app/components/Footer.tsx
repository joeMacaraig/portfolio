import React from "react";

export default function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="text-center max-w-6xl mx-auto tracking-wide p-3 border">
      {getYear() == 2024 ? (
        <p>&copy;2024 Joseph Bryan Macaraig.</p>
      ) : (
        <p>&copy;2024-{getYear()} Joseph Bryan Macaraig</p>
      )}
    </div>
  );
}
