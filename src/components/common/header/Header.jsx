import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import { BtnChoose } from "./btn-choose";
import { BtnLogin } from "./btn-login";

const Header = ({ language, setLanguage }) => {
  const [navList, setNavList] = useState(false);

  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <Link to="/">
            <img src="../../../../public/images/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {nav.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  {language === "arabic" ? item.text_ar : item.text_en}
                </Link>
              </li>
            ))}

            {navList && (
              <li>
                <li>
                  <BtnLogin language={language} />
                  <BtnChoose language={language} setLanguage={setLanguage} />
                </li>
              </li>
            )}
          </ul>
        </div>

        <div className="button flex">
          <BtnLogin language={language} />
          <BtnChoose language={language} setLanguage={setLanguage} />
        </div>

        <div className="toggle">
          <button onClick={() => setNavList(!navList)}>
            {navList ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
