//5. Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].

const names = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];

/*a. Obtener aquellos nombres con al menos 6 letras.*/

const namesWithSixLatters = names.filter(e => e.length > 6);

console.log(namesWithSixLatters);

/*b. Obtener los nombres que comienzan con "M".*/

const startsWithM = names.filter(e => e.startsWith("M", "B"));

console.log(startsWithM);

//c. Ordenar alfabéticamente y mostrar por consola.

array.sort((a, b) => a.localeCompare(b));

console.log(array);

//d. Generar un array que contenga solo las iniciales

const initialsArray = array.map(e => e.charAt(0));

console.log(initialsArray); 

//f. Generar un array que contenga todos los nombres en mayúscula.

const uppercaseName = array.map(e => e.toUpperCase());

console.log(uppercaseName);

//g. Queremos saber si alguno de estos nombres comienza con "J”*/

const initialJ = array.some(e => e.charAt(0) === "J");

console.log(initialJ);