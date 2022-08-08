import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import TokenContext from "../Contexts/AuthContext";

import LoginPage from "../Components/LoginPage";
import SignUpPage from "../Components/SignUpPage";
import TelaHoje from "../Components/Telahoje";
import TelaHabitos from "../Components/TelaHabitos";
import TelaHistorico from "../Components/TelaHistorico";
import "../Components/reset.css";

export default function App() {
  const [token, setToken] = useState();
  const [image, setImage] = useState();
  const [click, setClick] = useState(false);
  const [contador, setContador] = useState(0)
  const [total, setTotal] = useState(0)

  return (
    <TokenContext.Provider
      value={{ token, setToken, image, setImage, click, setClick, contador, setContador, total, setTotal }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/hoje" element={<TelaHoje />} />
          <Route path="/habitos" element={<TelaHabitos />} />
          <Route path="/historico" element={<TelaHistorico />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}
