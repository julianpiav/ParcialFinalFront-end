import { useState } from "react";
import "./Estilos/PracticasProfesionales.css";
import { FormularioPracticas } from "./Componentes/FormularioPracticas";
import { TablaPracticas } from "./Componentes/TablaPracticas";

export const PracticasProfesionalesApp = () => {
  const [ventana, setVentana] = useState(1)
  const [practicas, setPracticas]=useState([]);
  const [edicion,setEdicion]=useState(false);
  const [dato, setDato] = useState({ id: practicas.length+1, empresa: "", supervisor: "", fecha: "", tareas:""});
  
  const agregarPractica = (practica) => {
    setPracticas([...practicas, practica])
    console.log(practicas)
}
const eliminarPractica =(practica)=>{
  setPracticas(practicas.filter((pr)=>pr.id!== practica.id));
}
const editarPractica=(practica)=>{
  setPracticas(practica.map((pr)=>{
      if(pr.id===practica.id){
          const practicaModificada={
          ...practica,
          empresa : practica.empresa,
          supervisor : practica.semestre,
          fecha : practica.facultad,
          tareas : practica.programa
          }
          return practicaModificada  
      }
      return pr;
  }))
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
              edicion={edicion}
              setEdicion={setEdicion}
              agregar={(practicaNueva) => {
                agregarPractica(practicaNueva);
                
              }}
              editar={(practicaEditada) => {
                editarPractica(practicaEditada);
              }}
              numeroAsignado={practicas.length+1}/>
        </div>
        <div
          className={ventana === 2 ? "content  active-content" : "content"}
        >
          <TablaPracticas
          listaPracticas={practicas}
              editarPractica={(practica) => {
                setDato(practica);
                setEdicion(true);
              }}
              eliminarPractica={(practica) => {
                eliminarPractica(practica);
              }}/>
        </div>
      </div>
    </div>
  );
};