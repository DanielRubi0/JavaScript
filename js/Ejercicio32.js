//Ejercicio 32: Calcular la serie de fibonacci que devuelve hasta n números bajo forma de array. Ejemplo [1, 2, 3, 5, 8, 13, 21, 34]

function fibonacci(n) {
    let fib=[0,1];

for (let i=2; i < n; i++){
    fib[i]=fib[i-1] + fib[i-2];
}
return fib
}
console.log(fibonacci(10));
