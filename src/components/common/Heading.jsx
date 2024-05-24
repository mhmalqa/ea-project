import React from "react";
import { Link } from "react-router-dom";
import { SocialMedia } from "./header/socialmedia";
import SmoothScroll from "smooth-scroll";

const Heading = ({
  title,
  slogan,
  subtitle,
  description,
  description2,
  btn_view,
}) => {
  // تهيئة Smooth Scroll
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 3000, // سرعة التمرير بالميلي ثانية
    speedAsDuration: true, // استخدم السرعة كمدة للتمرير بدلاً من إعدادات التأخير
  });

  return (
    <>
      <div className="heading">
        <h1>{title}</h1>
        <p>{slogan}</p>
        <p>{subtitle}</p>

        <h3>{description}</h3>
        <h3>{description2}</h3>
        {btn_view && <SocialMedia />}

        {btn_view && (
          // استخدام الرابط مع التمرير السلس
          <a
            href="#moreAboutUs"
            className="hero-btn"
            onClick={() => scroll.animateScroll("#moreAboutUs")}
          >
            {btn_view}
          </a>
        )}
      </div>
    </>
  );
};

export default Heading;
