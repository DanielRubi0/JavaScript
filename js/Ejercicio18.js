//Ejercicios 18: Crear un programa que dada una variable number, nos diga si es un múltiplo de 3. Si no lo es, nos diga si es múltiplo de 8 y, si no, imprima un mensaje de error.
let cifra = prompt ("Escribe un número");
multiplo3 = cifra % 3;
multiplo8 = cifra % 8;
if(multiplo3 === 0) {
    alert("Este número es múltiplo de 3");
    }
if(multiplo8 === 0) {
    alert("Este número es múltiplo de 8");
    }
if((multiplo3 === 0 && multiplo8 === 0)) {
    alert("Este número es múltiplo de 3 y de 8");
    }
if((multiplo3 !== 0 && multiplo8 !== 0)) {
    alert("Este número no es múltiplo de 3 ni de 8");
    }