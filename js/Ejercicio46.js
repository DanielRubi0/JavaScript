//Ejercicio 46: A partir de un array de objetos, escribir una función que devuelva el nombre del mejor jugador, su media en puntuación y comprobar si está inscrito en la próxima temporada.
//Usar map, reduce y sort.

let data = [
    {
        name: "Gracia",
        score: [21, 3, 5, 78, 25],
        temporada: true,
    },
    {
        name: "Nico M",
        score: [55, 66, 77, 55, 66],
        temporada: false,
    },
    {
        name: "Nico G",
        score: [12, 34, 67, 89, 34],
        temporada: true,
    },
    {
        name: "Gemma",
        score: [12, 90, 13, 45, 6],
        temporada: true,
    },
];

function average(data) {
    let newdata = data.map((el) => {
        return [
            el.name,
            el.score.reduce((a, b) => a + b / el.score.length, 0),
            el.temporada,
        ];
    });

    let orden = newdata.sort(function (a, b) {
        return b[1] - a[1];
    })[0];

    let final = `El mejor jugador es ${
        orden[0]
    } dado que su media de puntuación es de ${orden[1]}, ${
        orden[2]
            ? "y está confirmado para esta temporada."
            : "pero no está confirmado para esta temporada."
    }`;

    return final;
}

console.log(average(data));
