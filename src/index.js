import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// permite el uso de links dinamicos
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importacion de las secciones
import Layout from "./sections/Layout";
import Principal from "./sections/Principal";
import Pacientes from "./sections/Pacientes";
import Citas from "./sections/Citas";
import Solicitudes from "./sections/Solicitudes";
import FichaPaciente from "./sections/FichaPaciente";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Principal />} />
            <Route path="/Pacientes" element={<Pacientes />} />
            <Route path="/Citas" element={<Citas />} />
            <Route path="/Solicitudes" element={<Solicitudes />} />
            <Route path="/FichaPaciente" element={<FichaPaciente />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

reportWebVitals();
