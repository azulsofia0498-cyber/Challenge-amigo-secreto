// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para que los nombres se guarden
let amigos = [];

//Función para agregar un amigo
function agregarAmigo () {
    let input= document.getElementById ("amigo");
    let nombre= input.value.trim ();

    //Crear una alerta para asegurarse que la caja no esté vacía
    
    if (nombre === "") {
        alert ("Por favor, ingresá un nombre");
        return;
    }

    //En caso que el usuario ingrese un numero, poner alerta para que eso no sea posible

    if (/\d/.test(nombre)) {
        alert("El nombre no puede contener números");
        return;
    }

    amigos.push (nombre);
    input.value= ""; 
    //Esto limpia la caja donde se ingresa el nombre
    mostrarLista();
}

//Función para mostrar la lista en la pantalla
 function mostrarLista() {
    let lista = document.getElementById ("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo)=> {
        let li = document.createElement ("li");
        li.textContent =  amigo; 
        lista.appendChild (li)
    });
 }
  
 //Función para sortear un amigo
 function sortearAmigo () {
    if (amigos.length === 0) {
        alert ("La lista está vacía. Agregá al menos un nombre");
        return;
    }

    let indice = Math.floor (Math.random () * amigos.length);
    let resultado = amigos [indice];

    let mostrarResultado = document.getElementById ("resultado");
    mostrarResultado.innerHTML = `El resultado amigo secreto es: <strong>${resultado}</strong>`;


 }

