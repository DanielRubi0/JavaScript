//Ejercicio 30: Escribir una función que calcule el área de un círculo de radio del 1 al 10.

function circle(r){
    console.log(`entonces su área es de ${(Math.PI*(r**2)).toFixed(2)}cm2`);
}

for (let r = 1; r<=10; r++) {
    console.log(`Si el radio del círculo es de ${r}cm,`)
    circle(r);   
    console.log(``)
    }