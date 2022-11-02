//Ejercicio 43: A partir de un array, escribir una función que encuentre el único elemento distinto.
//Ejemplo: [5, 5, 5, 5, 4, 5, 5] = 4, 
//Ejemplo: [2, 2, 2, 2, 3, 2, 2, 2, 2] = 3

let array = [5, 5, 5, 5, 4, 5, 5];

const getNonDuplicatedValues = (arr) => 
    arr.filter((item,index) => {
    arr.splice(index,1)
    const unique = !arr.includes(item)
    arr.splice(index,0,item)
    return unique
})

console.log("El valor único es: " , ...getNonDuplicatedValues(array));
