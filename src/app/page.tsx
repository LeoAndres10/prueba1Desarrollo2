import Image from "next/image";
import React from "react";
import {  } from "react-router-dom"
import Layout from "./(general)/Layout";
import { Plantilla } from "./Modelos/Plantilla";
export default function Home({children}: Plantilla) {
  
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       
    <Layout>
      {children}
    </Layout>
      </main>    
    </div>
  );
}
