import React, { useEffect, useState } from "react";
import { useLocation, Link, Route } from "react-router-dom";
import "./MainDashbord.css";
import Img from "../images/about.jpg";
import { CardContact } from "./contact/CardContact";
import { Urls } from "./urls/Url";
import ImageUpload from "./posts/PublishPost";
import PostsPage from "./posts/RemovePost";
import Recent from "../home/recent/Recent";

export function MainDashbord() {
  const location = useLocation(); // استخدام useLocation للحصول على المسار الحالي
  const [currentPath, setCurrentPath] = useState(location.pathname);

  const scrollToTop = () => {
    window.scrollTo(0, 0); // التمرير إلى أعلى الصفحة
  };

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]); // مراقبة تغييرات المسار الحالي

  function getPageTitle(path) {
    switch (path) {
      case "/maindashbord":
        return "الرئيسية";
      case "/maindashbord/messages":
        return "المراسلات";
      case "/maindashbord/links":
        return "الروابط";
      case "/maindashbord/posts/publichpost":
        return "نشر منشور";
      case "/maindashbord/posts":
        return "المنشورات";
      case "/maindashbord/options":
        return "خيارات";
      case "/maindashbord/real-estate":
        return "العقارات";
      case "/maindashbord/logout":
        return "تسجيل خروج";
      default:
        return "Home";
    }
  }

  return (
    <section className="dashbord">
      <div className="info-account">
        <div className="image-name">
          <img src={Img} alt="profile" />
          <p>بدر محمد الصيوان</p>
        </div>
        <div>معلومات الحساب</div>
      </div>
      <div className="dashbord-con">
        <div className="dashbord-title">
          <div className="dashbord-header">
            <h1>{getPageTitle(currentPath)}</h1>
          </div>
          <main className="content">
            <Route exact path="/maindashbord/posts" component={PostsPage} />
            <Route
              exact
              path="/maindashbord/posts/publichpost"
              component={ImageUpload}
            />
            <Route exact path="/maindashbord/links" component={Urls} />
            <Route
              exact
              path="/maindashbord/messages"
              component={CardContact}
            />
            <Route
              exact
              path="/maindashbord/real-estate"
              render={() => (
                <Recent language={"arabic"} isHome={false} isDash={true} />
              )}
            />
          </main>
        </div>
        <nav className="dashbord-sidebar">
          <ul>
            <Link to="/home" style={{ color: "#fff" }} onClick={scrollToTop}>
              <li>الرئيسية</li>
            </Link>
            <Link
              to="/maindashbord/messages"
              style={{ color: "#fff" }}
              onClick={scrollToTop}
            >
              <li>المراسلات</li>
            </Link>
            <Link
              to="/maindashbord/links"
              style={{ color: "#fff" }}
              onClick={scrollToTop}
            >
              <li>الروابط</li>
            </Link>
            <Link
              to="/maindashbord/posts/publichpost"
              style={{ color: "#fff" }}
              onClick={scrollToTop}
            >
              <li>نشر منشور</li>
            </Link>
            <Link
              to="/maindashbord/posts"
              style={{ color: "#fff" }}
              onClick={scrollToTop}
            >
              <li>المنشورات</li>
            </Link>
            <Link
              to="/maindashbord/real-estate"
              style={{ color: "#fff" }}
              onClick={scrollToTop}
            >
              <li>العقارات</li>
            </Link>
            <Link to="" style={{ color: "#fff" }} onClick={scrollToTop}>
              <li>خيارات</li>
            </Link>
            <Link
              to="/maindashbord/logout"
              style={{ color: "#fff" }}
              onClick={scrollToTop}
            >
              <li>تسجيل خروج</li>
            </Link>
          </ul>
        </nav>
      </div>
    </section>
  );
}
