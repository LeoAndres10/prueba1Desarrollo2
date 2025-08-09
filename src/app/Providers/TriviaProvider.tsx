'use client'
import React, {useContext, useState } from "react";

import { Plantilla } from "../Modelos/Plantilla";

import { ContextTrivia } from "../Contexto/ContextTrivia";

export default function TriviaProvider({children}:Plantilla){
  const [puntaje, setPuntaje] = useState(0);
  const [respuesta, setRespuesta] = useState(0);

  function aumentarPuntaje(){
    setPuntaje((anterior) => anterior + 1)
  };
  function aumentarRespuesta(){
    setRespuesta((anterior) => anterior + 1)
  };
  function reiniciar(){
    setPuntaje(0);
    setRespuesta(0);
  };

  return (
    <div>
    <ContextTrivia.Provider value={{ puntaje, respuesta, aumentarPuntaje, aumentarRespuesta, reiniciar }}>
      {children}
    </ContextTrivia.Provider>
  </div>
  );
}

export const useTrivia=()=>{
    return useContext(ContextTrivia)
}