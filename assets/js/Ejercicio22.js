//Ejercicio 22: Crear un programa que calcule la suma de los primeros “n” números, donde el valor de n, se recibe desde el “prompt”
let n = Number(prompt('Elige un numero para ver la suma de todas sus cifras anteriores'));
let suma = 0;
for(let i = 1; i <= n; i++) {
    console.log(suma)
    suma = suma + i
}
console.log(`El resultado de la suma de todos los numeros hasta el número ${n} es: ${suma}`);