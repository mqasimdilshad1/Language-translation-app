import React from "react";

export default function TextAreaBox({
  text,
  onChange,
  readonly = false,
  label,
  showSpeaker = false,
  showCopy = false,
}) {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1 font-medium text-sm">{label}</label>
      <textarea
        value={text}
        onChange={(e) => onChange?.(e.target.value)}
        readOnly={readonly}
        maxLength={500}
        className="p-2 border rounded-lg h-32 resize-none"
      />
      <div className="flex justify-end gap-2 mt-1">
        {showCopy && (
          <button className="text-sm px-2 py-1 bg-gray-200 rounded" onClick={() => navigator.clipboard.writeText(text)}>
            Copy
          </button>
        )}
        {showSpeaker && (
          <button
            className="text-sm px-2 py-1 bg-gray-200 rounded"
            onClick={() => {
              const utterance = new SpeechSynthesisUtterance(text);
              speechSynthesis.speak(utterance);
            }}
          >
            🔊 Speak
          </button>
        )}
      </div>
    </div>
  );
}
