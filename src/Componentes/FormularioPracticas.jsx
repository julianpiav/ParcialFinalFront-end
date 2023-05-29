export const FormularioPracticas = ({agregar,dato,setDato,edicion,setEdicion,editar,numeroAsignado}) => {
  const enviar = (practica) => {
    if (edicion === true) {
      editarPractica(practica);
    } else {
      guardarPractica(practica);
    }
  };
  const guardarPractica = () => {
    agregar(dato);
    setDato({
      empresa: "",
      supervisor: "",
      fecha: "",
      tareas: "",
    });
  };

  const editarPractica = () => {
    editar(dato);
    setDato({
      empresa: "",
      supervisor: "",
      fecha: "",
      tareas: "",
    });
    setEdicion(false);
  };

  return (
    <>
    {""}
    <div className="mt-5">
        <form onSubmit={enviar}>
          <div className="col">
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
                  Nombre de Supervisor
                </label>
              </div>
            </div>
          </div>  
            <div className="col">
              <div className="col-6 ">
                    <div className="App">
                    <input
                      type="text"
                      minLength={3}
                      className="form-control"
                      id="tareas"
                      placeholder=" "
                      value={dato.tareas}
                      onChange={(event) =>
                        setDato({ ...dato, tareas: event.target.value })
                      }
                    />
                    <label htmlFor="tareas" className="form-label">
                      Tarea
                    </label>
                    <input
                    type="text"
                    minLength={3}
                    className="form-control"
                    id="fecha"
                    placeholder=" "
                    value={dato.fecha}
                    onChange={(event) =>
                      setDato({ ...dato, fecha: event.target.value }) 
                    }          
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
          <p></p>
        </form>
      </div>
    </>
  );
};
