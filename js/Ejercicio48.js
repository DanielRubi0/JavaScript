//Ejercicio 48: Escribir una función que acepte como parámetro un objeto de estudiantes y votaciones. { Nico: 5, Gemma: 7... }.
//Calcular la media de las votaciones, incrementarla del 10% y redondearla por defecto.
//Devolver un objeto con llave el nombre del estudiante, y valor "Promovido con NN" o "Suspendido con NN", donde NN es el voto de cada estudiante en el objeto inicial en base al que sea mayor o menor de la media calculada.

let people = [
    {
        name: "Nico",
        score: 5,
    },
    {
        name: "Gemma",
        score: 7,
    },
    {
        name: "Daniel",
        score: 10,
    },
];

// function average(people){
//     let media = people.map((el) => {
//     return[
//     people.score.reduce((a, b) => a + b / people.score.length, 0),
//     ]

// console.log(average);
