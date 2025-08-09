'use-client'
import {useTrivia} from "@/app/Providers/TriviaProvider";
import { useNavigate } from "react-router-dom";

export default function Resultados() {
  const contexto = useTrivia();
  const navigate = useNavigate();

  if (!contexto) return null;

  const { puntaje, respuesta, reiniciar } = contexto;

  const EmpezarNuevo = () => {
    reiniciar();
    navigate("/");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Resultado Final</h2>
      <p>Preguntas Respondidas: {respuesta}</p>
      <p>Puntaje Total: {puntaje}</p>
      <button onClick={EmpezarNuevo}>Reiniciar de nuevo Trivia</button>
    </div>
  );
};

