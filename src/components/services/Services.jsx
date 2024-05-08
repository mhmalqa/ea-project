import React from "react";
import img from "../images/services.jpg";
import Back from "../common/Back";
import CardServices from "./CardServices";
import { services } from "../data/Data";
import Heading from "../common/Heading";
import "./CardServices.module.css";

const Services = ({ language, inHome }) => {
  const title = language === "arabic" ? "الخدمات" : "Services";
  const subtitle =
    language === "arabic"
      ? "نقدم لكم افضل الخدمات اطلب الان"
      : "We provide you with the best services. Order now";

  return (
    <>
      {inHome === "true" ? (
        ""
      ) : (
        <Back name={title} title={`${title} - All ${title}`} cover={img} />
      )}
      <section className="services background">
        <Heading title={title} subtitle={subtitle} />
        <div className="container grid3">
          {services.map((item) => (
            <CardServices
              language={language}
              name={language === "arabic" ? item.name : item.name_en}
              frontImage={item.cover}
              desc_f={language === "arabic" ? item.desc_f : item.desc_f_en}
              desc_b={language === "arabic" ? item.desc_b : item.desc_b_en}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
