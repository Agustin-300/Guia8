//Confeccionar una página que contenga algunas palabras con el elemento 'strong', luego cuando sean presionadas ocultarlas.

let elemento = $(".lluvia");
let elemento2 = $(".calor");

$(".lluvia").on("click", function(){
    elemento.hide();
});

$(".calor").on("click", function(){
    elemento2.hide();
});