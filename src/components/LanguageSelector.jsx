import React from "react";
import { languages } from "../utils/languages";

export default function LanguageSelector({ value, onChange, label }) {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1 font-medium text-sm">{label}</label>
      <select
        className="p-2 border rounded-lg bg-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
