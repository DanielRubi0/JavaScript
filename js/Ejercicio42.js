//Ejercicio 42: A partir de 2 arrays, compararlos y devolver un array sin duplicados a través de una función.
//Ejemplo: a = [1, 2, 3, 4], b = [1, 2]
//Resultado = [3, 4];


//Creamos los dos arrays
let array1 = [];
for (let i = 0; i < 3; i++) {
            let random = Math.random() * (5 - 1) + 1;
            random = Math.trunc(random);
            array1[i] = random;
        }

let array2 = [];
for (let i = 0; i < 3; i++) {
            let random = Math.random() * (5 - 1) + 1;
            random = Math.trunc(random);
            array2[i] = random;
        }


console.log(`Primer array: ${array1}`);
console.log(`Segundo array: ${array2}`);

//Eliminamos los valores repetidos dentro de un mismo array para que no salgan dos veces en al comparación
let uniqueArray1 = [...new Set(array1)];
let uniqueArray2 = [...new Set(array2)];

//Comparamos los array y buscamos los duplicados con una función
let compareArr = uniqueArray1
                .filter(x => !uniqueArray2.includes(x))
                .concat(uniqueArray2.filter(x => !uniqueArray1.includes(x)));
console.log(`Los valores que no se repiten son: ${compareArr}`);