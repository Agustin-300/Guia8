//Ejercicio 2.a
const array = [1,2,3,4,5,8];
let indice = 0;

while (indice<array.length) {
    console.log(array[indice]);
    indice++;
}

//Ejercicio 2.b
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//Ejercicio 2.c
array.forEach(array => console.log(array));

//Ejercicio 2.d
array.forEach(array => console.log(array + 1));

//Ejercicio 2.e
const copiaArray = array.map(numeros => numeros+1);
console.log(copiaArray);

//Ejercicio 2.f
let promedio = array.reduce((acumulador, valorActual) => acumulador + valorActual)/array.length;
console.log(promedio);


//Ejercicio 11
let funcion=$(document);
funcion.ready(inicializarEventos);

function inicializarEventos(){
    let funcion = $("#boton1");
    funcion.click(enlace1)
    funcion = $("#boton2");
    funcion.click(enlace2)
    funcion = $("#boton3");
    funcion.click(enlace3)
}

function enlace1(){
    let funcion = $("a");
    funcion.attr("href", "https://www.utn.edu.ar/es/")
    funcion.text("UTN");
}

function enlace2(){
    let funcion = $("a");
    funcion.attr("href", "https://www.unlam.edu.ar/")
    funcion.text("UNLaM");
}

function enlace3(){
    let funcion = $("a");
    funcion.attr("href", "https://www.uba.ar/#/")
    funcion.text("UBA");
}


//Ejercicio 14
