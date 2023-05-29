export const deletePracticas = async (practica) => {
    const url = `http://localhost:8080/practicas/eliminar/${practica.id}`
    const resp = await fetch(url, {
        method: 'DELETE'
    });
    const respuesta = await resp.json();
    console.log(respuesta)

}