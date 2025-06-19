export function obteneractividades(){
    const datos = localStorage.getItem("actividades");
    return datos ? JSON.parse(datos): [];
} 

export function guardaractividades(actividades){
    localStorage.setItem("actividad", JSON.stringify(actividades));

}