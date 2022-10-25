//Ejercicio 23: Crear un programa que calcule el factorial de un número n, donde el valor de n se recibe desde el “prompt” y además se verifique si el valor es de tipo number. Si no lo es, se sale del programa con un mensaje de error.
let n = Number(prompt('Elige un numero para calcular su factorial'));
if (typeof n === "number" && !Number.isNaN(n)) {
    let resultado = 1;
    for (let i = 1; i <= n; i++){
    resultado = resultado * i;}
    alert(`El factorial de ${n} es: ${resultado}`);
} 

else {
    alert("Error. Tienes que introducir un número");
}

// //Opción con do while
// let fact = Number(prompt('Elige un numero para calcular su factorial'));
// let i = 1;
// let total2 = 1;
//     if (typeof fact === "number" && !Number.isNaN(fact)) {
//         do {
//             console.log(total2 = total2 * i);
//             i++;
//         } while (i<= fact)}

//     else{
//         console.log("No es un número");
//     }