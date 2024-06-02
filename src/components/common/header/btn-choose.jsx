import React, { useState } from "react";
import { Link } from "react-router-dom";

import { toggleLanguage } from "../../data/toggleLanguage";

export function BtnChoose({ currentLanguage, setLanguage }) {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "arabic"
  );
  const homepage = process.env.PUBLIC_URL || "/"; // تحديد الرابط الرئيسي

  const handleLanguageToggle = (selectedLanguage) => {
    localStorage.setItem("language", selectedLanguage);
    setSelectedLanguage(selectedLanguage);
    toggleLanguage(selectedLanguage, setLanguage);
  };

  return (
    <>
      <select
        className="language-menu"
        value={selectedLanguage}
        onChange={(e) => handleLanguageToggle(e.target.value)}
      >
        <option value="arabic">عربي</option>
        <option value="english">English</option>
      </select>
      <Link to="/maindashbord">
        {" "}
        <i class="fa-solid fa-gauge icon-dashbord"></i>
      </Link>
    </>
  );
}
