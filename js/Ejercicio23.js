//Ejercicio 23: Crear un programa que calcule el factorial de un número n, donde el valor de n se recibe desde el “prompt” y además se verifique si el valor es de tipo number. Si no lo es, se sale del programa con un mensaje de error.
let n = Number(prompt('Elige un numero para calcular su factorial'));
if (isNaN(n)) {
    console.log("Error. Tienes que introducir un número");
} 
let resultado = 1;
let i = 1;
for (let i = 1; i <= n; i++){
resultado = resultado * i;}
alert(`El factorial de ${n} es: ${resultado}`);
