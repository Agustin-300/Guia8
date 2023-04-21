//Ejercicio 2.a
const array = [1,2,3,4,5,6];
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