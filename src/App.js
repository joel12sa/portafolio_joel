import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Corregido BrowserRouter y Routes
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/Home/Home"; // Asegúrate de importar el componente Home
import "./style.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
