//Ejercicio 37: A partir de un array, devuelve otro array con la elevación a potencia de 3 de cada elemento del array inicial. let pow = [2, 4, 25]; // [8, 64, 15625]

const array1 = [2, 4, 25];
const array2 = array1.map(x => x ** 3);
console.log(array2);

