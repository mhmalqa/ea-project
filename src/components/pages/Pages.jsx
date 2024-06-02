import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "../home/Home";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import { ViewProperty } from "../home/recent/view_properties/ViewProperty";
import { LoginBage } from "../login/Login";
import { RecentBage } from "../recentbage/RecentBage";
import { MainDashbord } from "../dashbord/MainDashbord";

const Pages = () => {
  const defaultLanguage = localStorage.getItem("language") || "english";
  const [language, setLanguage] = useState(defaultLanguage);
  document.querySelector("html").dir = language === "arabic" ? "rtl" : "ltr";

  return (
    <Router>
      <PageContent language={language} setLanguage={setLanguage} />
    </Router>
  );
};

const PageContent = ({ language, setLanguage }) => {
  const location = useLocation(); // استخدام useLocation للحصول على المسار الحالي

  useEffect(() => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    if (location.pathname.includes("/maindashbord")) {
      if (header) header.style.display = "none";
      if (footer) footer.style.display = "none";
    } else {
      if (header) header.style.display = "block";
      if (footer) footer.style.display = "block";
    }
  }, [location.pathname]); // مراقبة تغييرات المسار الحالي

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <Switch>
        <Route exact path="/" render={() => <Home language={language} />} />
        <Route path="/about" render={() => <About language={language} />} />
        <Route
          path="/services"
          render={() => <Services language={language} />}
        />
        <Route path="/login" render={() => <LoginBage language={language} />} />
        <Route
          exact
          path="/real-estate"
          render={() => <RecentBage language={language} />}
        />
        <Route path="/real-estate/view" component={ViewProperty} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/maindashbord" component={MainDashbord} />
        <Route path="/*" render={() => <Home language={language} />} />
      </Switch>
      <Footer language={language} /> {/* يتم عرض Footer بشكل افتراضي */}
    </>
  );
};

export default Pages;
