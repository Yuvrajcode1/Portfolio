import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./componnets/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MobileMenupage from "./pages/MobileMenupage";

 
 const App=()=>{
  const [toggleMenu, setToggleMenu] =useState(true);

  return(
    <>
    <div>
      <Navbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </div>
    <div className="text-3xl font-bold">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/menu" element={<MobileMenupage toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />} />
      </Routes>
    </div>
    </>
  )
 }
 export default App;