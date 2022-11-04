//Ejercicio 46: A partir de un array de objetos, escribir una función que devuelva el nombre del mejor jugador, su media en puntuación y comprobar si está inscrito en la próxima temporada. Usar map, reduce y sort.

let data = [
    {
        name: "Gracia",
        score: [21,3,5,78,25],
        temporada: true
    },
    {
        name: "Nico M",
        score: [55,66,77,55,66],
        temporada: false
    },
    {
        name: "Nico G",
        score: [12,34,67,89,34],
        temporada: true
    },
    {
        name: "Gemma",
        score: [12,90,13,45,6],
        temporada: true
    }]

    console.log(data[0][1][0]);
// let average = data.score.reduce((a, b) => a + b) / i.length;
//
