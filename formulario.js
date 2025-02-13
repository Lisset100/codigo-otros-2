var formulario = document.querySelector(".formulario")// le puse el punto y cambié el nombre para que se trajera la clase formulario

formulario.onsubmit = function (e) {

  e.preventdefault();


  let nombreInput = document.getElementById("name");// cambié los var por let
  let edadInput = document.getElementById("age");// cambié como acceder a los elementos en vez de por index por si id
  let nacionalidadInput = document.getElementById("nationality");

  let nombre = nombreInput.value;
  let edad = parseInt(edadInput.value, 10);
  let nacionalidad = nacionalidadInput.value;


  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    nombreInput.classList.add("error")
  }
  if (isNaN(edad) || edad < 18 || edad > 120) {
    edadInput.classList.add("error")
  }

  if (nombre.length > 0
    && (edad > 18
      && edad <= 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
}

let botonBorrar = document.createElement("button") //Quité los var 
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  let lista = document.getElementById("lista-de-invitados");

  if (!lista) {
    lista = document.createElement("div");
    lista.id = "lista-de-invitados";
    document.body.appendChild(lista);
  }
}

if (nacionalidad === "ar") nacionalidad = "Argentina";
if (nacionalidad === "mx") nacionalidad = "Mexicana";
if (nacionalidad === "vnzl") nacionalidad = "Venezolana";
if (nacionalidad === "per") nacionalidad = "Peruana";




let elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)


function crearElemento(descripcion, valor) {
  let spanNombre = document.createElement("span")
  let inputNombre = document.createElement("input")
  let espacio = document.createElement("br")
  spanNombre.textContent = descripcion + ": "
  inputNombre.value = valor
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"

botonBorrar.onclick = function () {
  botonBorrar.remove()// quité el parentNode porque no es necesario
}

elementoLista.appendChild(document.createElement("br"))
elementoLista.appendChild(botonBorrar);
