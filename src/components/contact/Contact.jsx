import React, { useEffect, useState } from "react";
import img from "../images/contactusar.jpg";
import Back from "../common/Back";
import "./contact.css";
import Heading from "../common/Heading";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import instance from "../data/BaseUrl";



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = ({ inHome, language }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const lan = document.querySelector("html").dir;

  if (inHome !== "true") {
    if (lan === "rtl") language = "arabic";
  }
  const isArabic = language === "arabic";

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const [data, setData] = useState({
    name: "",
    subject: "",
    email: "",
    phone_number: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handelInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    // التحقق مما إذا كانت جميع الحقول مملوءة
    const filled = Object.values(data).every((value) => value.trim() !== "");
    setAllFieldsFilled(filled);
  }, [data]);
  const sendMessage = async () => {
    try {
      const fdata = new FormData();
      fdata.append("name", data.name);
      fdata.append("subject", data.subject);
      fdata.append("email", data.email);
      fdata.append("phone_number", data.phone_number);

      const response = await instance.post("/message", fdata);

      if (response.status === 200) {
        setMessage("تم إرسال البيانات بنجاح");
        setSeverity("success");
        setOpen(true);
        // تفريغ الحقول بعد الإرسال بنجاح
        setData({
          name: "",
          subject: "",
          email: "",
          phone_number: "",
        });
      } else {
        setMessage("حدث خطأ أثناء إرسال البيانات");
        setSeverity("error");
        setOpen(true);
      }
    } catch (error) {
      console.error("حدث خطأ أثناء إرسال البيانات:", error);
      setMessage("حدث خطأ أثناء إرسال البيانات");
      setSeverity("error");
      setOpen(true);
    }
  };

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
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
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
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="subj_input">
                  <input
                    name="subject"
                    onChange={handelInputChange}
                    type="text"
                    placeholder={isArabic ? "الموضوع *" : "Subject *"}
                    value={data.subject}
                    required
                    // value={service ?? ""}
                    // onChange={(e) => setService(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    name="name"
                    onChange={handelInputChange}
                    type="text"
                    placeholder={isArabic ? "الاسم *" : "Name *"}
                    value={data.name}
                    required
                  />
                  <input
                    name="email"
                    onChange={handelInputChange}
                    type="email"
                    placeholder={isArabic ? "البريد الإلكتروني *" : "Email *"}
                    value={data.email}
                    required
                  />
                </div>
                <div>
                  <input
                    name="phone_number"
                    onChange={handelInputChange}
                    type="tel"
                    placeholder={isArabic ? "الهاتف *" : "Phone *"}
                    value={data.phone_number}
                    required
                  />
                  <button onClick={allFieldsFilled ? sendMessage : undefined}>
                    {isArabic ? "إرسال الطلب" : "Submit Request"}
                  </button>
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
