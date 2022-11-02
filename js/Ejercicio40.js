//Ejercicio 40: Calcular la media de la puntuación de un partido de bowling. La máquina pone números negativos y queremos eliminarlos, haciendo la media solo de los números positivos.


const puntos = [2, 9, -8, 4, -10, -9, 8, -3, 7, 9]
let positivos = puntos.filter((i) => i >= 0);
let media = positivos.reduce((a, b) => a + b) / positivos.length;

console.log(`Esta es la puntuación del partido: ${puntos}`);
console.log(`Los valores positivos son: ${positivos}`);
console.log(`Si obviamos los valores negativos la media de puntos es: ${media}`);
