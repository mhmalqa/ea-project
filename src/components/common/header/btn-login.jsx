import React from "react";
import { Link } from "react-router-dom"; // استيراد عنصر Link من مكتبة react-router-dom

export function BtnLogin({ language }) {
  return (
    <Link to="/login" className="btn1 btn-login" >
      {" "}
      {/* توجيه المستخدم إلى صفحة تسجيل الدخول عند النقر */}
      <i className="fa fa-sign-out"></i>{" "}
      {language === "arabic" ? " الدخول" : "Login"}
    </Link>
    
  );
}
