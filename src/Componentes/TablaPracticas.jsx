export const TablaPracticas = ({ listaPracticas,editarPractica, eliminarPractica }) => {

    return (
        <>
            <div>
                <label htmlFor="fecha">Busqueda por Fecha:</label>
                <input id="fecha">
                </input>
                <button>Filtrar</button>
            </div>
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Empresa/Institucion</th>
                        <th scope="col">Supervisor</th>
                        <th scope="col">Hora Registrada</th>
                        <th scope="col">Tareas </th>
                        <th scope="col">Acciones </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        listaPracticas.map((practica) => 
                            <tr key={practica.id}>
                                <td>{practica.id}</td>
                                <td>{practica.empresa}</td>
                                <td>{practica.supervisor}</td>
                                <td>{practica.fecha}</td>
                                <td>
                                    {practica.tareas.map((tarea) =>
                                <tr key={tarea.id}>
                                    <td>{tarea.nombreTarea} {" Para el dia= "} {tarea.fechaTarea} <br /></td>
                                </tr>
                                )}
                                </td>
                                <td>
                                    <button className="btn btn-info" onClick={()=>editarPractica(practica)}> Editar</button>{" "} 
                                    <button className="btn btn-info" onClick={()=>eliminarPractica(practica)}>Eliminar </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}