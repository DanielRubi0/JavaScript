//Ejercicio 27: Escribir una función que nos diga si un número es par o impar.

let n = prompt('Introduce un número para saber si es par o impar');

function parFunction(){
    if (n % 2 === 0) {
        return alert(`El número ${n} es un número par`)
    }

    else {
        return alert(`El número ${n} es un número impar`)
    }
}

const par = parFunction()