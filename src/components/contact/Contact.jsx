import React, { useEffect, useState } from "react";
import img from "../images/contactusar.jpg";
import Back from "../common/Back";
import "./contact.css";
import Heading from "../common/Heading";

const Contact = ({ inHome, language }) => {
  const lan = document.querySelector("html").dir;
  if (inHome !== "true") {
    if (lan === "rtl") language = "arabic";
  }
  const isArabic = language === "arabic";
  // استخدام useState لإنشاء حالة محلية
  const [service, setService] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get("service");

    // تحديث القيمة في حالة المكون
    if (serviceParam) {
      setService(serviceParam);
    }
  }, []);

  return (
    <>
      <section className="contact mb">
        <br />
        {inHome === "true" ? (
          <Heading title={isArabic ? "اتصل بنا" : "Contact Us"} subtitle="" />
        ) : (
          <>
            <Back
              name={isArabic ? "اتصل بنا" : "Contact Us"}
              title={
                isArabic
                  ? "احصل على المساعدة والدعم "
                  : "Get Helps & Friendly Support"
              }
              cover={img}
            />
            <br />
            <Heading title={isArabic ? "اتصل بنا" : "Contact Us"} subtitle="" />
          </>
        )}

        <br />
        <div className="container">
          <div className="shadow container-con">
            <div className="info-p">
              <h3>
                {isArabic
                  ? "طلب خدمة استشارية"
                  : "Request Consultation Service"}
              </h3>
              <p>
                {isArabic
                  ? " يُرجى ملء النموذج لطلب خدمة استشارية. يهمنا الحصول على جميع التفاصيل الضرورية التي تساعدنا في تحديد احتياجاتك بدقة، وسنعمل على التواصل معك في غضون 24 ساعة لتقديم الدعم اللازم."
                  : "Please fill out the consultation service request form with all the necessary details and initial information that help us understand your request accurately. One of our representatives will contact you within 24 hours to assist you."}
              </p>
            </div>
            <div className="tow-section">
              <form>
                <div className="subj_input">
                  <input
                    type="text"
                    placeholder={isArabic ? "الموضوع" : "Subject"}
                    required
                    value={service || ""}
                    onChange={(e) => setService(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder={isArabic ? "الاسم" : "Name"}
                    required
                  />
                  <input
                    type="email"
                    placeholder={isArabic ? "البريد الإلكتروني" : "Email"}
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder={isArabic ? "الهاتف" : "Phone"}
                    required
                  />
                  <button>{isArabic ? "إرسال الطلب" : "Submit Request"}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
