//E8 Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga sólo las palabras que empiezan con una vocal.

const palabras = ["Auto", "Camello", "Liebre", "Estación", "Universidad"];

function PalabraPpioVocal(palabras){
    
    const PalabraConVocal = palabras.filter(p => EsPrimeraLetraVocal(p));
    console.log(PalabraConVocal);

}

function EsPrimeraLetraVocal(palabras){
    
    const vocales = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú"];
    let letra = palabras.toLowerCase()[0];
    
    return vocales.includes(letra);
    
}

PalabraPpioVocal(palabras);
