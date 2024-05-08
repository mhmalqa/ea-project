import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";
import { HeaderRel } from "./Header-rel";

const Recent = ({ language }) => {
  // تحديد عنوان العنصر والعنوان الفرعي بناءً على اللغة المحددة
  const title =
    language === "arabic" ? "بدر محمد الصيوان" : "Badr Mohammed Al-Saywan";
  const subtitle =
    language === "arabic"
      ? "لخدمات التسويق العقاري "
      : "Real Estate Marketing Services";
  const slogan =
    language === "arabic"
      ? "رقم الترخيص 1100012564"
      : "License Number 1100012564";

  return (
    <>
      <section className="recent padding">
        <div className="container">
          {/* استخدام العنوان والعنوان الفرعي المحدد بناءً على اللغة */}
          {/* <Heading title={title} subtitle={slogan} slogan={subtitle} /> */}
          <HeaderRel/>
          <RecentCard language={language} />
        </div>
      </section>
    </>
  );
};

export default Recent;
