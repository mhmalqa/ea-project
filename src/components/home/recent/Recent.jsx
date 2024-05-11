import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";
import Post from "../post/Post";
import { HeaderRel } from "./Header-rel";

const Recent = ({ language, isHome }) => {
  // تحديد عنوان العنصر والعنوان الفرعي بناءً على اللغة المحددة
  const title =
    language === "arabic" ? "بدر محمد الصيوان" : "Badr Mohammed Al-Saywan";
  const subtitle =
    language === "arabic"
      ? "خدمات التسويق العقاري"
      : "Real Estate Marketing Services";
  const slogan =
    language === "arabic"
      ? "رقم الترخيص 1100012564"
      : "License Number 1100012564";

  return (
    <>
      <section className="recent padding">
        <div className="container" style={!isHome ? { display: "none" } : null}>
          {/* استخدام العنوان والعنوان الفرعي المحدد بناءً على اللغة */}
          <HeaderRel language={language} />
          <Heading title={title} subtitle={slogan} />

          <div className="infor">
            <p>
              {language === "arabic" ? (
                <>
                  نقدم مجموعة من الخدمات المهنية التي تضمن لكم تحقيق أهدافكم
                  العقارية بكل سهولة ويسر. نتميز بالعمل تحت تفويض رسمي من
                  البائعين والمشترين من خلال منصة الهيئة العامة للعقار، مما يضمن
                  دقة واحترافية تعاملاتنا.
                </>
              ) : (
                <>
                  We offer a range of professional services that ensure you
                  achieve your real estate goals easily and smoothly. We
                  specialize in working under official authorization from both
                  sellers and buyers through the General Authority for Real
                  Estate, ensuring the accuracy and professionalism of our
                  transactions.
                </>
              )}
            </p>
            <div>
              <span>
                <p>
                  {language === "arabic" ? (
                    <>
                      خدماتنا تشمل:
                      <br /> 1. البحث عن فرص عقارية حقيقية: توفير خدمات بحث
                      مهنية للمشترين والبائعين.
                      <br /> 2. تسويق العقار: استخدام استراتيجيات تسويقية مبتكرة
                      لجذب أكبر عدد من المشترين المحتملين.
                      <br /> 3. معاينة العقار: تنظيم معاينات مرنة بواسطة فريقنا
                      المتخصص لعرض عقاركم بأفضل صورة.
                      <br /> 4. المساعدة في العروض والمفاوضات: تقديم دعم كامل في
                      التفاوض وإعداد العروض لضمان الحصول على أفضل النتائج.
                      <br /> 5. التسويق الشامل: التعاون مع شبكة واسعة من
                      المسوقين المعتمدين عبر المملكة لضمان تسويق عقارك في أي
                      مدينة، ونشره على موقعنا الرسمي والمنصات الرائدة.
                    </>
                  ) : (
                    <>
                      Our services include:
                      <br /> 1. Searching for genuine real estate opportunities:
                      Providing professional search services for buyers and
                      sellers.
                      <br /> 2. Real estate marketing: Using innovative
                      marketing strategies to attract the largest number of
                      potential buyers.
                      <br /> 3. Property viewing: Organizing flexible viewings
                      by our specialized team to showcase your property in the
                      best light.
                      <br /> 4. Assistance in offers and negotiations: Providing
                      full support in negotiations and preparing offers to
                      ensure the best results.
                      <br /> 5. Comprehensive marketing: Collaborating with a
                      wide network of accredited marketers across the kingdom to
                      market your property in any city, and publishing it on our
                      official website and leading platforms.
                    </>
                  )}
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="container" style={!isHome ? null : { display: "none" }}>
          <HeaderRel language={language} />
        </div>
        <Post language={language} />
        <div className="container">
          <Heading title={language === "arabic" ? "العقارات" : "Real Estate"} />
          <RecentCard language={language} isHome={isHome} />
        </div>
      </section>
    </>
  );
};

export default Recent;