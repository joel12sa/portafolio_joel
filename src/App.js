import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Corregido BrowserRouter y Routes
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/Home/Home"; // Asegúrate de importar el componente Home
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import About from "./components/About/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/portafolio_joel" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
