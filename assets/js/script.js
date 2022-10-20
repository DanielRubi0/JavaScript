// Ejercicio 2
console.log("¡Empezamos con javascript!");

//Ejercicio 3
console.log("Hola, soy un estudiante Hackademy.");

//Ejercicio 4
let nombre = "Daniel";
nombre = "Dani";
console.log(nombre);

//Ejercicio 5
let frase = " está aprendiendo JavaScript";
console.log(nombre + frase);

//Ejercicio 6
let numer = 21;
let saludo = "Hola";
let encendido = true;
let sym1 = Symbol('€');
let nulo = null;

console.log(typeof numer);
console.log(typeof saludo);
console.log(typeof encendido);
console.log(typeof indefinido);
console.log(typeof sym1);
console.log(typeof nulo);

if (nulo == null) {
    console.log("es null");
} else {
    console.log("No es null");
}

//Ejercicio 7
let num = 5;
console.log(num + 5);

//Ejercicio 8
let calle1 = "Avenida"
let calle2 = " de América"
console.log(calle1 + calle2);

//Ejercicio 9
let num2 = "5";
console.log(typeof num);
console.log(typeof num2);

//Ejercicio 10
let num3 = 0.123456;
console.log(String(num3.toFixed(3)));

//Ejercicio 11
console.log((calle1+calle2).length);

//Ejercicio 12
let calleComp =  ((calle1+calle2).length);
console.log(`Tengo ${calleComp} años`);

//Ejercicio 13
let cifra1 = 10;
let cifra2 = "1";
console.log(cifra1 + cifra2)
console.log(typeof (cifra1 + cifra2))
console.log(cifra1 - cifra2)
console.log(typeof (cifra1 - cifra2))

//Ejercicio 14
// let saludito = "Hey Tú, cómo te llamas. ¡Hey, estoy hablando contigo!".replace("contigo", "yo");
// console.log(saludito);

let saludito = "Hey Tú, cómo te llamas. ¡Hey, estoy hablando contigo!";
let saludito2 = saludito.replace("contigo", "yo");
console.log(saludito2);