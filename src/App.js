import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Corregido el import
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/Home/Home";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import About from "./components/About/About";
import Footer from "./components/Footer";
import PdfViewer from "./components/Resume/PdfViewer";
import Projects from "./components/Projects/Projects";
import Preloader from "../src/components/Pre";

function App() {
  const [load, updateLoad] = useState(true); // Corregido el error tipográfico

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false); // Corregido el error tipográfico
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {" "}
      {/* Usar solo BrowserRouter */}
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/portafolio_joel" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<PdfViewer />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
