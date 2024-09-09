import "./App.css";
import "./backgrounds.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/Routes/About";
import AllProducts from "./Components/Routes/AllProducts";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
 const {pathname} = useLocation()

 useEffect(()=>{
  window.scrollTo(0,0);
 },[pathname])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allProducts" element={<AllProducts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
