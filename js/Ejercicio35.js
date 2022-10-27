//Ejercicio 35: A partir de este array de n meros, ordena la secuencia en forma creciente y luego filtra números menor de 10. let num = [100, 2, 20, 35, 4, 44];

let num = [100, 2, 20, 35, 4, 44];
num.sort(function(a, b){return a-b});
console.log(num)

result = num.filter((n) => n < 10 )
console.log(result)