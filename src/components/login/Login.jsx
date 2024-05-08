import "./Login.css";
export function LoginBage({ language }) {
  const isArabic = language === "arabic";

  return (
    <>
      <div className="container-login">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">{isArabic ? "تسجيل الدخول" : "Sign in"}</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder={isArabic ? "اسم المستخدم" : "Username"}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
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
