// src/ui/Card.jsx
import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-gray-800 rounded-lg shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
}
