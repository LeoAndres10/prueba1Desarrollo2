'use client'
import React, { useContext } from "react";
import { useTrivia } from "../Providers/TriviaProvider";

const Header: React.FC = () => {
  const contexto = useTrivia();

  if (!contexto) return null;

  const { puntaje } = contexto;

  return (
    <header style={{ padding: "1rem", backgroundColor: "#eee" }}>
      <h1>Aplicacion de Trivia</h1>
      <p>Puntaje actual: {puntaje}</p>
    </header>
  );
};

export default Header;