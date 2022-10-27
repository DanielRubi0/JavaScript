//Ejercicio 36: Devuelve las dos edades más altas dado una matriz de números que representen edades.


let dosEdadesMasAltas = ([1, 2, 10, 8, 22, 3, 6, 12, 80, 4, 55, 19]) 
dosEdadesMasAltas.sort(function(a, b){return a-b});
console.log(dosEdadesMasAltas);
console.log(dosEdadesMasAltas[dosEdadesMasAltas.length - 2], (dosEdadesMasAltas[dosEdadesMasAltas.length - 1]));
