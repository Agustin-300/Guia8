//Disponer un div de 800 x 70 píxeles. Al hacer doble clic redimensionarlo a 250 x 250 píxeles y si se hace doble clic nuevamente retornar al tamaño 800 x 70.

$(document).ready(function() {

    let divgrande = true;

    $(".mi-div").on("dblclick", function() {
        if(divgrande){
            $(this).css("width", "250px");
            $(this).css("height", "250px");
            divgrande=false;
        }
        else{
            $(this).css("width", "800px");
            $(this).css("height", "70px");
            divgrande=true;
        }
    
    });

});