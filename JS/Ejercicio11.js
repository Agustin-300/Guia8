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