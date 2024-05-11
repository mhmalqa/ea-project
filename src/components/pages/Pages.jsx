import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../home/Home";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import { ViewImage } from "../home/recent/view_properties/slideView";
import { LoginBage } from "../login/Login";
import { RecentBage } from "../recentbage/RecentBage";

const Pages = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language"));
  document.querySelector("html").dir = language === "arabic" ? "rtl" : "ltr";

  return (
    <>
      <Router>
        <Header language={language} setLanguage={setLanguage} />
        <Switch>
          <Route
            exact
            path="/home"
            component={() => <Home language={language} />}
          />
          <Route
            path="/about"
            component={() => <About language={language} />}
          />
          <Route
            path="/services"
            component={() => <Services language={language} />}
          />
          <Route
            path="/login"
            component={() => <LoginBage language={language} />}
          />
          <Route
            path="/real-estate"
            component={() => <RecentBage language={language} />}
          />
          <Route path="/blog" component={Blog} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact" component={Contact} />
          <Route path="/image" component={ViewImage} />
          <Redirect from="/" to="/home" />
        </Switch>
        <Footer language={language} />
      </Router>
    </>
  );
};

export default Pages;
