import React, { useState } from "react";
export const FormularioPracticas = ({agregar,dato,setDato}) => {
  const [tareas, setTareas]= useState([{nombreTarea:"", fecha:""}]);

  return (
    <>
    {""}
    <div className="mt-5">
        <form onSubmit>
          <div className="col">
            <div className="col-12">
              <div className="form-group">
                <input
                  type="text"
                  minLength={3}
                  className="form-control"
                  id="empresa"
                  placeholder=" "
                />
                <label htmlFor="empresa" className="form-label">
                  Nombre de Empresa o Institucion
                </label>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col-12">
              <div className="form-group">
                <input
                  type="text"
                  minLength={3}
                  className="form-control"
                  id="supervisor"
                  placeholder=" "
                />
                <label htmlFor="supervisor" className="form-label">
                  Nombre de Supervisor
                </label>
              </div>
            </div>
          </div>  
            <div className="col">
              <div className="col-6 ">
              <button >Agregar otra Tarea</button>
                    <div className="App">
                    <input
                      name="nombreTarea"
                      placeholder=" "
                    />
                    <label htmlFor="tarea" className="form-label">
                      Tarea
                    </label>
                    <input
                      name="fecha"
                      placeholder=" "
                    />
                    <label htmlFor="fecha" className="form-label">
                      Fecha
                    </label>
                    <button className="btn btn-info" >Eliminar </button>
                    </div>
              </div>
            </div>
          <br />
          <div className="row">
            <div className="col-md-4 text-center">
                <button type="submit" className="btn btn-primary">
                  Registrar
                </button>
            </div>
          </div>
          <p>{JSON.stringify(tareas)}</p>
        </form>
      </div>
    </>
  );
};
