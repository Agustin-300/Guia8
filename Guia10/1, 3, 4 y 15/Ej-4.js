//El array de números
let numeros = [1, -4, 12, 0, -3, 29, -150];

//La función para sumar solo los números positivos
function sumarNumerosPositivos(total, numero) {
  if (numero > 0) {
    return total + numero;
  } else {
    return total;
  }
}

//Aplico la función a cada número del array utilizando reduce()
let sumaNumerosPositivos = numeros.reduce(sumarNumerosPositivos, 0);

//Para mostrar el resultado en la consola:
console.log(sumaNumerosPositivos);
