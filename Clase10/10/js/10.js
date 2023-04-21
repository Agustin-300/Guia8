/*10. Disponer un título de noticia y seguidamente la descripción de la noticia (encerrarlo en un div con un nombre de clase), 
repetir esto para tres noticias. Agregar tres botones que rescaten el nombre de la clase para la descripción de la noticia y cambien su tamaño de fuente*/


function alterFontSize(classDescription){
    const description = document.getElementsByClassName(classDescription)[0];
    const fontSizeActual = parseInt(getComputedStyle(description).fontSize);
    const nuevoFontSize = fontSizeActual + 2;
    description.style.fontSize = nuevoFontSize + "px";
}