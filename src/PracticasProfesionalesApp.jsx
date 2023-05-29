import { useState } from "react";
import "./Estilos/PracticasProfesionales.css";
import { FormularioPracticas } from "./Componentes/FormularioPracticas";
import { TablaPracticas } from "./Componentes/TablaPracticas";

export const PracticasProfesionalesApp = () => {
  const [ventana, setVentana] = useState(1)
  const [practicas, setPracticas]=useState([]);
  const [dato, setDato] = useState({ numero: "", empresa: "", supervisor: "", fecha: "", tareas: []});
  
  const agregarPractica = (practica) => {
    setPracticas([...practicas, practica])
}

  const elegirVentana = (index) => {
    setVentana(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={ventana === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => elegirVentana(1)}
        >
          Gestion Practicas
        </button>
        <button
          className={ventana === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => elegirVentana(2)}
        >
          Mis practicas
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={ventana === 1 ? "content  active-content" : "content"}
        >
          <FormularioPracticas dato={dato}
              setDato={setDato}
              agregar={(practicaNueva) => {
                agregarPractica(practicaNueva);
              }}/>
        </div>

        <div
          className={ventana === 2 ? "content  active-content" : "content"}
        >
          <TablaPracticas
          listaPracticas={practicas}/>
        </div>
      </div>
    </div>
  );
};