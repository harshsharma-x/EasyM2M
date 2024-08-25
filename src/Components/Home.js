import React from "react";
import Hero from "./Hero";
import Contact from "./Contact";
import Teams from "./Teams";
import AboutAtLanding from "./AboutAtLanding";

const Home = () => {
  return (
    <div id="/">
      <Hero />
      <div id="aboutAtLanding" className="scroll-m-16">
        {/* <AboutAtLanding /> */}
      </div>
      <div id="team" className="scroll-m-16">
        <Teams />
      </div>
      <div id="contact" className="scroll-m-16">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
