import React from "react";
import img from "../images/services.jpg";
import Back from "../common/Back";
import CardServices from "./CardServices";
import { services } from "../data/Data";
import Heading from "../common/Heading";
import "./CardServices.module.css";

const Services = ({ language, inHome }) => {
  const title =
    language === "arabic"
      ? "  الخدمات الاستشارية المالية والادارية والاستشارات الحلول المالية"
      : "Financial and Administrative Consulting Services and Financial Solutions Consultancy";
  const subtitle =
    language === "arabic"
      ? "مكتبنا يقدم خدمات متكاملة وعالية الجودة في مجالات الاستشارات الإدارية والمالية للقطاعين العام والخاص، ونسعى إلى الوصول لموقع تنافسي كأحد المكاتب الاستشارية الرائدة التي تسعى لتحقيق الرؤية الثاقبة 2030 في المملكة العربية السعودية."
      : " Our office provides integrated and high-quality services in the fields of financial and administrative consulting for both public and private sectors. We aspire to achieve a competitive position as one of the leading consulting firms striving to realize the insightful Vision 2030 in the Kingdom of Saudi Arabia.";

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
