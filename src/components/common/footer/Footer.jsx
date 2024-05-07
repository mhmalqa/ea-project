import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";
import { SocialMedia } from "../header/socialmedia";

const Footer = ({ language }) => {
  const filteredFooter = footer.filter((item) => item.language === language);

  return (
    <>
      <footer>
        <div className="container grid3">
          <div className="box">
            <div className="logo">
              <img
                src={`${process.env.PUBLIC_URL}/images/logo-light.png`}
                alt="logo-light"
              />

              <h2>
                {language === "arabic"
                  ? "التحول نحو النجاح"
                  : "Shift to Success"}
              </h2>
              <p>
                {language === "arabic"
                  ? "تفضل بزيارة حساباتنا على مواقع التواصل الاجتماعي للمزيد:"
                  : "Feel free to visit our social media accounts for more:"}
              </p>

              <SocialMedia />
            </div>
          </div>
          {filteredFooter.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li>
                    {items.icons}
                    {items.list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>
          {language === "arabic"
            ? "© جميع الحقوق محفوظة لـ"
            : "© All Rights Reserved to "}
          <a
            href="https://www.instagram.com/mhmalqa/"
            target="_blank"
            style={{ color: "white" }}
            rel="noreferrer"
          >
            mhmalqa
          </a>{" "}
          - 2024
        </span>
      </div>
    </>
  );
};

export default Footer;
