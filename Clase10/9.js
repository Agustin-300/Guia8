/*9. Crear un método que permite intercambiar las posiciones de dos elementos de un arreglo en base a sus índice*/

let array = [1, 2, 3, 4, 5]
let index1 = 0;
let index2 = 3;

function swapElement(index1, index2, array){
    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        return console.error("Los índices están fuera del rango del arreglo.");
    }
}

let temp = array[index1];
array[index1] = array[index2];
array[index2] = temp;

console.log(array);