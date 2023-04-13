//E7 Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares

const array = [1, 2, 3, 4, 5, 6];

function NumerosPares(array)
{
    const ArrayPares = array.filter(a => a % 2 == 0);

    return ArrayPares;
}

let ArrayPares;
ArrayPares = NumerosPares(array);
console.log(ArrayPares);

//E8 Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga sólo las palabras que empiezan con una vocal.

