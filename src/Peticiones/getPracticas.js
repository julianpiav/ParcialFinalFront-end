
export const getPracticas = async () => {

    const url = 'http://localhost:8080/practicas/todas'
    const resp = await fetch(url);
    const data = await resp.json();
    const listaPractica = data.map(practica => ({
        id: practica.codigo,
        empresa: practica.empresa,
        supervisor: practica.supervisor,
        fecha: practica.fecha,
        tareas: practica.tareas
    }));
    return listaPractica;

}
