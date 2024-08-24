import "./App.css";
import Navbar from "./Components/Navbar";
import {Routes, Route} from "react-router-dom";
import Hero from "./Components/Hero";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>} />
      </Routes>
    </>
  );
}

export default App;
