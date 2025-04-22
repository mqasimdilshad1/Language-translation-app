import { useState } from "react";
import LanguageSelector from "./components/LanguageSelector";
import TextAreaBox from "./components/TextAreaBox";
import TranslateButton from "./components/TranslateButton";
import SwapLanguagesButton from "./components/SwapLanguagesButton";
import { fetchTranslation } from "./utils/translate";
import { useDebouncedEffect } from "./hooks/useDebouncedEffect";



export default function App() {
  const [inputText, setInputText] = useState("Hello, how are you");
  const [translatedText, setTranslatedText] = useState("");
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("fr");

  useDebouncedEffect(() => {
    if (inputText.trim()) {
      fetchTranslation(inputText, fromLang, toLang).then(setTranslatedText);
    }
  }, [inputText, fromLang, toLang], 600); 

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 py-8"
      style={{ backgroundImage: `url('/src/assets/hero_img.jpg')` }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-4xl w-full">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-4">
          <LanguageSelector value={fromLang} onChange={setFromLang} label="From" />
          <SwapLanguagesButton onSwap={() => {
            setFromLang(toLang);
            setToLang(fromLang);
          }} />
          <LanguageSelector value={toLang} onChange={setToLang} label="To" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <TextAreaBox
            text={inputText}
            onChange={setInputText}
            label="Input"
            showCopy
            showSpeaker
          />
          <TextAreaBox
            text={translatedText}
            readonly
            label="Translation"
            showCopy
            showSpeaker
          />
        </div>

        <div className="flex justify-center">
        <TranslateButton onClick={async () => {
  const result = await fetchTranslation(inputText, fromLang, toLang);
  setTranslatedText(result);
}} />

        </div>
      </div>
    </div>
  );
}
