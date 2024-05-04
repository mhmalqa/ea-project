import React from "react";

export function BtnLogin({ language }) {
  return (
    <button className="btn1">
      <i className="fa fa-sign-out"></i>{" "}
      {language === "arabic" ? "تسجيل الدخول" : "Login"}
    </button>
  );
}
