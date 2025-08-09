'use client'
import React from "react";
import { useTrivia } from "../Providers/TriviaProvider";

export default function TriviaComponent() {
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

