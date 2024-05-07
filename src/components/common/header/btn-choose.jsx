import React, { useState } from "react";
import { toggleLanguage } from "../../data/toggleLanguage";

export function BtnChoose({ currentLanguage, setLanguage }) {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "arabic"
  );

  const handleLanguageToggle = (selectedLanguage) => {
    localStorage.setItem("language", selectedLanguage);
    setSelectedLanguage(selectedLanguage);
    toggleLanguage(selectedLanguage, setLanguage);
  };

  return (
    <select
      className="language-menu"
      value={selectedLanguage}
      onChange={(e) => handleLanguageToggle(e.target.value)}
    >
      <option value="arabic">عربي</option>
      <option value="english" selected>
        English
      </option>
    </select>
  );
}
