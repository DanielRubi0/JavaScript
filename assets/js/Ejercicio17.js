//Ejercicio 17: Crear un programa que dadas 2 variables tipo number, las sume. Si la suma es mayor que 50 multiplique por 2, si no, por 3. 
let cifra1 = Number(prompt ("Escribe un número"));
let cifra2 = Number(prompt ("Escribe otro número"));
let resultado = cifra1 + cifra2;
if(resultado > 50) {
    alert(`Al ser tu numero mayor que 50 se multiplica por dos, y este es el resultado: (${cifra1} + ${cifra2}) x 2 =  ${resultado * 2}.`);
}
else {
    alert(`Al ser tu numero menor que 50 se multiplica por dos, y este es el resultado: (${cifra1} + ${cifra2}) x 3 =  ${resultado * 3}.`)
}