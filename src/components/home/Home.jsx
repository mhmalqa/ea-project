import React from "react";
import Awards from "./awards/Awards";
import Sectors from "./featured/Featured";
import Post from "./post/Post";
import Hero from "./hero/Hero";
import Recent from "./recent/Recent";
import About from "../about/About";
import Services from "../services/Services";
import Contact from "../contact/Contact";

const Home = (props) => {
  return (
    <>
      <Hero language={props.language} />
      <Post language={props.language} isServices={true} />
      <Services language={props.language} inHome="true" />
      <Post language={props.language} />
      <Recent language={props.language} />
      <Awards language={props.language} />
      <About language={props.language} inHome="true" />
      <Contact language={props.language} inHome="true" />
      <Sectors language={props.language} />

      {/* <Location language={props.language} /> 
      <Team language={props.language} />  */}
    </>
  );
};

export default Home;
