import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = ({ language }) => {
  // تحديد عنوان العنصر والعنوان الفرعي بناءً على اللغة المحددة
  const title = language === "arabic" ? "العقارات" : "Properties";
  const subtitle =
    language === "arabic"
      ? "العقارات في المملكة العربية السعودية"
      : "Properties in Saudi Arabia";

  return (
    <>
      <section className="recent padding">
        <div className="container">
          {/* استخدام العنوان والعنوان الفرعي المحدد بناءً على اللغة */}
          <Heading title={title} subtitle={subtitle} />
          <RecentCard language={language} />
        </div>
      </section>
    </>
  );
};

export default Recent;
