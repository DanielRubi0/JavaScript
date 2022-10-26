//Ejercicio 28: Escribir una función que imprima un intervalo de números entre 0 y 10, excluyendo los pares.


function imparFunction(){
    for (let n = 1; n<=10; n++) {
        if ((n % 2) !== 0) {
            console.log(n)
        }
        else {
            continue;
        }
    }
}

imparFunction();
