//Para el array de los números aleatorios
let numeros = [];
for (let i = 0; i < 10; i++) {
  numeros.push(Math.floor(Math.random() * 100));
}

//Ordeno
numeros.sort(function(a, b) {
  return a - b;
});

//Creando una lista desordenada y agregando los números ordenados
let lista = document.createElement("ul");
for (let i = 0; i < numeros.length; i++) {
  let item = document.createElement("li");
  item.appendChild(document.createTextNode(numeros[i]));
  lista.appendChild(item);
}

//Entonces agrego la lista desordenada al documento
document.body.appendChild(lista);
