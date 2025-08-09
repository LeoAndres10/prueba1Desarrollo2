'use client'
import React, { useState, useEffect, useContext } from "react";
import { Preguntas } from "@/app/Modelos/Preguntas";
import TriviaProvider, { useTrivia } from "@/app/Providers/TriviaProvider";
import { useNavigate } from "react-router-dom";

const preguntas: Preguntas[] = [
  {
    id: "1",
    descripcion: "La vida es bonita?",
    opcionRespuesta1: true,
    opcionRespuesta2: false,
    respuestaCorrecta: true,
    puntajePregunta: 1,
  },
  {
    id: "2",
    descripcion: "Todos los autos son blancos?",
    opcionRespuesta1: true,
    opcionRespuesta2: false,
    respuestaCorrecta: false,
    puntajePregunta: 1,
  },
  {
    id: "3",
    descripcion: "Todas las mujeres son iguales?",
    opcionRespuesta1: false,
    opcionRespuesta2: true,
    respuestaCorrecta: false,
    puntajePregunta: 1,
  },
  {
    id: "4",
    descripcion: "El ron contiene alcohol?",
    opcionRespuesta1: true,
    opcionRespuesta2: false,
    respuestaCorrecta: true,
    puntajePregunta: 1,
  },
  {
    id: "5",
    descripcion: "El mar es blanco?.",
    opcionRespuesta1: false,
    opcionRespuesta2: true,
    respuestaCorrecta: false,
    puntajePregunta: 1,
  },
];

export default function PaginaPrincipal() {
  const [preguntas, setPreguntas] = useState<Preguntas[]>([]);
  const [indiceActual, setIndiceActual] = useState(0);
  const [seleccion, setSeleccion] = useState<boolean | null>(null);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState<boolean | null>(null);

  const contexto = useTrivia();
  const navigate = useNavigate();

  useEffect(() => {
    setPreguntas(preguntas);
  }, []);

  if (!contexto) return null;

  const { aumentarPuntaje,aumentarRespuesta } = contexto;

  const manejarRespuesta = (respuesta: boolean) => {
    const preguntaActual = preguntas[indiceActual];
    const esCorrecta = respuesta === preguntaActual.respuestaCorrecta;

    setSeleccion(respuesta);
    setRespuestaCorrecta(esCorrecta);

    if (esCorrecta) {
      aumentarPuntaje();
    }
    aumentarRespuesta();
  };

  const siguientePregunta = () => {
    setSeleccion(null);
    setRespuestaCorrecta(null);

    if (indiceActual + 1 < preguntas.length) {
      setIndiceActual((anterior) => anterior + 1);
    } else {
      navigate("/Resultados");
    }
  };

  const pregunta = preguntas[indiceActual];

  if (!pregunta) return <p>Cargando pregunta...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{pregunta.descripcion}</h2>
      <button onClick={() => manejarRespuesta(true)} disabled={seleccion !== null}>
        Verdadero
      </button>
      <button onClick={() => manejarRespuesta(false)} disabled={seleccion !== null} style={{ marginLeft: "1rem" }}>
        Falso
      </button>

      {seleccion !== null && (
        <div style={{ marginTop: "1rem" }}>
          <p>{respuestaCorrecta ? "¡Correcto!" : "Incorrecto 😢"}</p>
          <button onClick={siguientePregunta}>Siguiente</button>
        </div>
      )}
    </div>
  );
};


