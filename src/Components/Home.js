import React from "react";
import Hero from "./Hero";
import Contact from "./Contact";
import Team from "./Team";
import AboutAtLanding from "./AboutAtLanding";
import Services from "./Services";
import Footer from "./Footer";
import Recognition from "./Recognition";
import PageWithScrollAnimation from './PageWithScrollAnimation'

const Home = () => {
  return (
    <div id="/">
      <Hero />
      <div id="aboutAtLanding" className="scroll-m-16">
        <AboutAtLanding />
      </div>
      <div id="services" className="scroll-m-16">
        <Services />
      </div>
      {/* <div>
        <PageWithScrollAnimation />
      </div> */}
      <div id="team" className="scroll-m-16">
        <Team />
      </div>
      <div id="contact" className="scroll-m-16">
        <Contact />
      </div>
      <div>
        <Recognition />
      </div>
      <div id="footer" className="scroll-m-16">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
