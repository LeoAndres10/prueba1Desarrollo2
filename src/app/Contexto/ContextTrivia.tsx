import { createContext } from "react";

export const ContextTrivia= createContext({
puntaje:0 as number,
respuesta:0 as number,
  aumentarPuntaje: () =>{},
  aumentarRespuesta: () =>{},
  reiniciar: () =>{}

}) 
  