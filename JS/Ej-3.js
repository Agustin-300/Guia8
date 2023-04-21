//El array 
let numeros = [1, 2, 3, 4, 5];

//La función para elevar al cuadrado los números
function elevarAlCuadrado(numero) {
  return numero * numero;
}

//Aplicando la función a cada número del array utilizando map()
let numerosAlCuadrado = numeros.map(elevarAlCuadrado);

//Nuevo array para mostrar en la consola
console.log(numerosAlCuadrado);
