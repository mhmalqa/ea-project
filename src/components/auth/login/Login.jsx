import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import instance from "../../data/BaseUrl";
import CryptoJS from "crypto-js";

export function Login({ language, setIsLoggedIn }) {
  const isArabic = language === "arabic";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const secretKey = "560";
  function encrypt(text) {
    return CryptoJS.AES.encrypt(text, secretKey).toString();
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      const encryptedToken = encrypt(response.data.access_token);
      localStorage.setItem("auth_token", encryptedToken);
      localStorage.setItem("isLogin", 560174);
      // history.push("/maindashbord");
      window.location.href = "/maindashbord/messages";
      // setIsLoggedIn(true);
      // localStorage.setItem("auth_token");
    } catch (error) {
      console.error("Error logging in:", error);
      localStorage.setItem("isLogin", 404);
    }
  };

  return (
    <>
      <div className="container-login">
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleLogin} className="sign-in-form">
              <h2 className="title">{isArabic ? "تسجيل الدخول" : "Sign in"}</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isArabic ? "الايميل" : "E-mail"}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={isArabic ? "كلمة المرور" : "Password"}
                />
              </div>
              <input
                type="submit"
                value={isArabic ? "تسجيل الدخول" : "Login"}
                className="btn solid"
              />
              <p className="social-text">
                {isArabic
                  ? "تابعنا على مواقع التواصل الاجتماعي"
                  : "Follow us on social media"}
              </p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
