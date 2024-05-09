import React from "react";
import img from "../images/services.jpg";
import Back from "../common/Back";
import CardServices from "./CardServices";
import { services } from "../data/Data";
import Heading from "../common/Heading";
import Post from "../home/post/Post";
import "./CardServices.module.css";

const Services = ({ language, inHome }) => {
  const title =
    language === "arabic"
      ? "الخدمات الادارية والمالية وحلول التمويل"
      : "Administrative and Financial Services and Financing Solutions";

  const subtitle = language === "arabic" ? "الخدمات" : "Services";

  return (
    <>
      {inHome === "true" ? "" : <Back name={title} cover={img} />}
      <section className="services background">
        <div className="container">
          <Heading title={title} />

          <div className="infor">
            <p>
              {language === "arabic" ? (
                <>
                  في "علم الريادة للاستشارات الإدارية والمالية"، نقدم مجموعة
                  متكاملة من الخدمات الاستشارية لدعم عملائنا في السوق السعودي
                  المتطور. من خلال فهم عميق للديناميكيات الاقتصادية والتحديات
                  التجارية، نهدف إلى تمكينكم من تحقيق النجاح والاستدامة.
                </>
              ) : (
                <>
                  "In Entrepreneurship Science for Administrative and Financial
                  Consultations, we offer a comprehensive range of consulting
                  services to support our clients in the advanced Saudi market.
                  Through a deep understanding of economic dynamics and business
                  challenges, we aim to empower you to achieve success and
                  sustainability."
                </>
              )}
            </p>
            <div>
              <span>
                <p>
                  {language === "arabic" ? (
                    <>
                      1. دراسة الجدوى الاقتصادية:
                      <br />- نقدم خدمات متخصصة لتوجيه قراراتكم الاستثمارية. -
                      نحلل البيانات المالية والاقتصادية لضمان جدوى المشروع. -
                      نزودكم بتحليلات شاملة لفهم كل الأبعاد المالية والسوقية.
                      <br /> 2. الاستشارات الاقتصادية والمالية والإدارية:
                      <br />- نوفر الدعم اللازم لتحسين كفاءة عملياتكم وأدائكم. -
                      نساعد في تحقيق قرارات استراتيجية ونمو مستدام.
                      <br /> 3. استشارات حلول مالية متطورة:
                      <br />- نقدم استشارات حلول لتمويل المشاريع بدعم حكومي او
                      بالقطاع الخاص. - نساعد في تمويل العقارات وتمويل الشركات
                      ونقاط البيع لتحسين السيولة.
                      <br /> 4. خدمات التسويق والتسويق الرقمي:
                      <br /> - نصمم استراتيجيات تسويقية متكاملة لتعزيز هويتكم
                      التجارية. - ندير حملات إعلانية ونحسن محركات البحث لتوسيع
                      وجودكم الرقمي.
                      <br /> 5. خدمة إعادة الهيكلة الإدارية للشركات:
                      <br />- نقدم حلولاً مخصصة لتعزيز فعالية الشركات وتحقيق
                      الأهداف. - نقوم بتقييم وتصميم هياكل تنظيمية محسّنة لمواجهة
                      تحديات السوق.
                    </>
                  ) : (
                    <></>
                  )}
                </p>
              </span>
            </div>
          </div>
        </div>
        <Post language={language} isServices={true} />
        <Heading title={subtitle} />
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
