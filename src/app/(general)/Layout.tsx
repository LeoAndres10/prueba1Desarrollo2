'use client'
import TriviaProvider from "../Providers/TriviaProvider";
import TriviaComponent from '@/app/Componentes/TriviaComponent'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./PaginaPrincipal/PaginaPrincipal";
import Resultados from "./Resultados/Resultados";


export default function Layout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      

      <TriviaProvider>
         <TriviaComponent/>
        <PaginaPrincipal></PaginaPrincipal>
        {children}
              <Resultados></Resultados>
      </TriviaProvider>
     
    </div>
  );
}