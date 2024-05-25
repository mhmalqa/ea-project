import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
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
import { CardContact } from "../dashbord/contact/CardContact";
import { Urls } from "../dashbord/urls/Url";
import ImageUpload from "../dashbord/posts/PublishPost";
import PostsPage from "../dashbord/posts/RemovePost";
const Pages = () => {
  const defaultLanguage = localStorage.getItem("language") || "english";
  const [language, setLanguage] = useState(defaultLanguage);
  document.querySelector("html").dir = language === "arabic" ? "rtl" : "ltr";

  return (
    <>
      <Router>
        <Header language={language} setLanguage={setLanguage} />
        <Switch>
          <Route
            exact
            path="/home"
            render={() => <Home language={language} />}
          />
          <Route path="/about" render={() => <About language={language} />} />
          <Route
            path="/services"
            render={() => <Services language={language} />}
          />
          <Route
            path="/login"
            render={() => <LoginBage language={language} />}
          />
          <Route
            path="/real-estate"
            render={() => <RecentBage language={language} />}
          />
          <Route path="/blog" component={Blog} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact" component={Contact} />
          <Route path="/view" component={ViewProperty} />
          <Route path="/dash" component={CardContact} />
          <Route path="/links" component={Urls} />
          <Route path="/publichpost" component={ImageUpload} />
          <Route path="/removepublichpost" component={PostsPage} />

          <Redirect from="/" to="/home" />
        </Switch>
        <Footer language={language} /> {/* يتم عرض Footer بشكل افتراضي */}
      </Router>
    </>
  );
};

export default Pages;
