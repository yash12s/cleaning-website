import React from "react";

export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
