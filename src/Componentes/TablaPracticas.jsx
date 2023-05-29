import React, { useState } from "react";
export const TablaPracticas = ({ listaPracticas}) => {

    return (
        <>
            <div>
                <label htmlFor="fechaPractica">Busqueda por Fecha:</label>
                <input id="fechaPractica">
                </input>
                <button>Filtrar</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Empresa/Institucion</th>
                        <th scope="col">Supervisor</th>
                        <th scope="col">Tareas</th>
                        <th scope="col">Hora</th>
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
                                <td>{practica.tareas}</td>
                                <td>
                                    <button className="btn btn-info">Editar</button>{" "} 
                                    <button className="btn btn-info" >Eliminar </button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}