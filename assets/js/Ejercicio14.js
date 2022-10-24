//Ejercicio 14: Sustituir la palabra "contigo" por la palabra "yo" sin crear una nueva cadena y imprimir la nueva cadena en consola:

// Opción 1
// let saludito = "Hey Tú, cómo te llamas. ¡Hey, estoy hablando contigo!".replace("contigo", "yo");
// console.log(saludito);

// Opción 2 (mejor crear una variable nueva apra no perder la original)
let saludito = "Hey Tú, cómo te llamas. ¡Hey, estoy hablando contigo!";
let saludito2 = saludito.replace("contigo", "yo");
console.log(saludito2);