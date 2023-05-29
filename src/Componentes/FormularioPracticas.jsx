import { useState } from "react";

export const FormularioPracticas = ({agregar,dato,setDato,datoTarea,setDatoTarea, edicion,setEdicion,editar}) => {
  const [inputList, setinputList]= useState([{nombreTarea:'', fechaTarea:''}]);

  const enviar = (practica) => {
    if (edicion === true) {
      editarPractica(practica);
    } else {
      guardarPractica(practica);
    }
  };
  const guardarPractica = () => {
    agregar(dato,datoTarea);
    setDato({
      empresa: "",
      supervisor: "",
    });
    setDatoTarea({
      nombreTarea:"",
      fechaTarea:""
    })
  };
  const agregarInput=()=>{
    let inputNuevo={
      nombreTarea:"",
      fechaTarea:""
    }
    setinputList([...inputList, inputNuevo]);
  }
  const borrarInput=(index)=>{
    let inputBien=[...inputList];
    inputBien.splice(index,1)
    setinputList(inputBien)
  }
  const editarPractica = () => {
    editar(dato, datoTarea);
    setDato({
      empresa: "",
      supervisor: "",
    });
    setDatoTarea({
      nombreTarea:"",
      fechaTarea:""
    })
    setEdicion(false);
  };
  

  return (
    <>
    {""}
    <div className="mt-5">
        <form onSubmit={enviar}>
            <div className="col-12">
              <div className="form-group">
                <input
                  type="text"
                  required={true}
                  minLength={3}
                  className="form-control"
                  id="empresa"
                  placeholder=" "
                  value={dato.empresa}
                  onChange={(event) =>
                    setDato({ ...dato, empresa: event.target.value })
                  }
                />
                <label htmlFor="empresa" className="form-label">
                  Ingrese Nombre de Empresa o Institucion
                </label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <input
                  type="text"
                  minLength={3}
                  required={true}
                  className="form-control"
                  id="supervisor"
                  placeholder=" "
                  value={dato.supervisor}
                  onChange={(event) =>
                    setDato({ ...dato, supervisor: event.target.value })
                  }
                />
                <label htmlFor="supervisor" className="form-label">
                  Ingrese Nombre de Supervisor o Superior
                </label>
              </div>
            </div>
            <div className="col-6">
              {inputList.map((index)=>{
              return(
                <>
                <div key={index} className="form-control" >
                  <input
                    type="text"
                    minLength={3}
                    required={true}
                    className="form-control"
                    id="nombreTarea"
                    placeholder=" "
                    value={datoTarea.nombreTarea}
                    onChange={(event) =>
                      setDato({ ...datoTarea, nombreTarea: event.target.value })
                    }
                  />
                  <label htmlFor="nombreTarea" className="form-label">
                    Ingrese Tarea
                  </label>
                  <input
                    type="date"
                    minLength={3}
                    required={true}
                    className="form-control"
                    id="fechaTarea"
                    placeholder=" "
                    value={datoTarea.fechaTarea}
                    onChange={(event) =>
                      setDato({ ...datoTarea, fechaTarea: event.target.value })
                    }
                  />
                  <label htmlFor="nombreTarea" className="form-label">
                    Ingrese Tarea
                  </label>

                  <button onClick={()=>borrarInput(index)}>Quitar Tarea</button>
                </div>
                </>
              )
              })}
                <button onClick={agregarInput}>Agregar Tarea</button>
            </div>
          <br />
          <div className="row">
            <div className="col-md-4 text-center">
                <button type="submit" className="btn btn-primary">
                  Registrar
                </button>
            </div>
          </div>
          <p></p>
        </form>
      </div>
    </>
  );
};
