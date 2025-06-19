import { guardaractividades, obteneractividades } from "./storage";

const input = document.getElementById("nuevaactividad");
const boton = document.getElementById("btagregar");
const lista = document.getElementById("listadeactividades");

let actividades = obteneractividades();
function mostraractividades() {
    lista.innerHTML = "";
    actividades.foreach(actividad, index)=>{
        const li = document.createElement("li");
        li.textContent =  '${actividad.texto}(${actividad.fecha})'
        li.addEventListener("click", ()=> eliminaractividad(index));
        lista.appendChild(li);
    };
}
function agregaractividad(){
    const texto = input.ariaValueMax.trim();
    if (texto === "")return
    const nueva = {
        texto,
        fecha:new Date().toLocaleString()
    };
    actividades.push(nueva);
    guardaractividades(actividades);
    mostraractividades();
    input.value="";
}

function eliminaractividad(index){
    actividad.splice(index, 1)
    guardaractividades(actividades);
    mostraractividades();
}

boton.addEventlistener("click", agregaractividad);
input.addEventListener ("keypress", (e)=>{
    if (e.key === "enter") {
        agregaractividad();
    }
});

mostraractividades();
