//Ejercicio 26: Escribir un programa que imprima en consola todos los número del 1 al 100. Para los múltiplos de 3 imprime "java". Para los múltiplos de 5 imprime "script". Para los múltiplos de 3 y 5 imprimer "javascript".

for (let i = 1; i<=100; i++) {
    if((i % 3 === 0) && (i % 5 === 0)) {
        console.log(i+" javascript");
        }
        
    else if(i % 5 === 0) {
        console.log(i + " script");
        }

    else if(i % 3 === 0) {
        console.log(i + " java");
        }

    else {
        console.log(i);
    }
}