import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { SocialMedia } from "./header/socialmedia";


const Heading = ({ title, subtitle, description, description2, btn_view }) => {
  return (
    <>
      <div className="heading">
        <h1>{title}</h1>
        <p>{subtitle}</p>

        <h3>{description}</h3>
        <h3>{description2}</h3>
        {btn_view && <SocialMedia insta="www.instagram.com" />}

        {btn_view && (
          <Link to="" className="hero-btn">
            {btn_view}
          </Link>
        )}
      </div>
    </>
  );
};

export default Heading;
