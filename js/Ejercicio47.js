//Ejercicio 47: Ordena esta estructura completa por profesor, comunication y estudiantes a la vez que ordenándolo por edad, y devuelve un objeto.

const data = {
    Antonio: {
        classification: "communication",
        age: 40,
    },
    Nicola: {
        classification: "profesor",
        age: 34,
    },
    Gracia: {
        clasification: "profesor",
        edad: 37,
    },
    Oscar: {
        classification: "student",
        age: 35,
    },
    Nico: {
        classification: "profesor",
        age: 29,
    },
    Lufi: {
        classification: "student",
        age: 26,
    },
    Maria: {
        classification: "communication",
        age: 28,
    },
    Pablo: {
        classification: "student",
        age: 36,
    },
};

// data.sort((classification, age) => {
//     if (a.classification === "profesor") {
//         return -1;
//     }
//     if (a.classification === "communication") {
//         return 1;
//     }
//     if (a.classification === "student") {
//         return 2;
//     }
//     if (a.age < b.age) {
//         return -1;
//     }
//     if (a.age > b.age) {
//         return 1;
//     }
//     return 0;
// });

// console.log(data);
