import React, { useState } from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";

const Pages = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language"));
  document.querySelector("html").dir = language === "arabic" ? "rtl" : "ltr"; // تعريف الحالة والدالة هنا

  return (
    <>
      <Router>
        {/* تمرير الحالة والدالة كمعلمات إلى مكون الرأس */}
        <Header language={language} setLanguage={setLanguage} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Home language={language} />}
          />
          <Route
            exact
            path="/about"
            component={() => <About language={language} />}
          />
          <Route
            exact
            path="/services"
            component={() => <Services language={language} />}
          />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer language={language} />
      </Router>
    </>
  );
};

export default Pages;
