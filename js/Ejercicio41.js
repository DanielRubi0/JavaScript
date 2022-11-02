//Ejercicio 41: Generando un array de números aleatorios dado un mínimo y un máximo:
//filtramos sólo los número pares
//duplicamos los números obtenidos y sumamos 10
//filtramos estos números para valores mayores de 10 y menores de 100
//y hacemos la suma final


let numerosAleatorios = [];
for (let i = 0; i < 10; i++) {
            let random = Math.random() * (100 - 10) + 10;
            random = Math.trunc(random);
            numerosAleatorios[i] = random;
        }

console.log(`Este es mi array de diez números aleatorios del 10 al 100: ${numerosAleatorios}`);

//filtramos sólo los número pares
let pares = numerosAleatorios.filter((i) => i % 2 === 0);
console.log(`Los valores pares son: ${pares}`);

//duplicamos los números obtenidos y sumamos 10
let calculo = pares.map((i) => (i*2)+10);
console.log(`Duplicamos los números anteriores y les sumamos 10: ${calculo}`);

//filtramos estos números para valores mayores de 10 y menores de 100
let filtro = calculo.filter((i) => i > 10 && i < 100);
console.log(`Eliminamos los números menores de 10 y mayores de 100: ${filtro}`);

//y hacemos la suma final

if (filtro.length === 0){
    console.log(`Al no quedar valores la suma es 0`);}
else{
sumaFinal = filtro.reduce((a, b) => a + b);
console.log(`La suma final es: ${sumaFinal}`);
}

