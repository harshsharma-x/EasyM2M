import "./App.css";
import Navbar from "./Components/Navbar";
import {Routes, Route} from "react-router-dom";
import Hero from "./Components/Hero";
import Team from "./Components/Teams"
import Contact from "./Components/Contact"
import Services from "./Components/Services"
import About from "./Components/About"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/Team" element={<Team/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
       
        
      </Routes>
    </>
  );
}

export default App;
