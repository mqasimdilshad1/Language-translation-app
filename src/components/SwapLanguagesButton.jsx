import React from "react";
import { Repeat } from "lucide-react"; 

export default function SwapLanguagesButton({ onSwap }) {
  return (
    <button
      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
      onClick={onSwap}
      title="Swap Languages"
    >
      <Repeat className="w-5 h-5" />
    </button>
  );
}
