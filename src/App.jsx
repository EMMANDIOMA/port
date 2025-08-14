import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./component/Contact";
import Pages from "./component/Pages";
import Blog from "./component/Blog";
import Portfolio from "./component/Portfolio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
