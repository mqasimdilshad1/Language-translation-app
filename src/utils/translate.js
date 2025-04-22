export async function fetchTranslation(text, fromLang, toLang) {
  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`
    );

    const data = await response.json();
    return data?.responseData?.translatedText || "Translation not available.";
  } catch (error) {
    console.error("Translation Error:", error);
    return "Translation failed.";
  }
}
