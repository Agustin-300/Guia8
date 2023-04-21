/*6. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color 
introducido por el usuario a través de un prompt se encuentra dentro del array o no*/

const colors =  ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

let color = prompt("introducir color: ");

function buscar(color){
    if(colors.includes(color)){
        console.log("El color esta dentro del array");
    }else{
        console.log("El color no esta dentro del array");
    }
}

buscar(color);