//Ejercicio 25: Crear una función, tipCalculator(), que tenga dos parámetros: una cadena que represente la calidad del servicio recibido y un número que represente el coste total. Devuelve la propina, como un número, basado en lo siguiente: 'fatal' deber a devolver un 5% de propina. //'ok' deber a devolver un 15% de propina. // 'bueno' deber a devolver un 20% de propina. // 'excelente' deber a devolver un 30% de propina.//Toda la demás propina deben ser predeterminadas al 18%.

let coste = Number(prompt('Introduce el precio de la cena sin usar símbolos de moneda: '));

let calidad = prompt('Introduce la calidad del sevicio: excelente, bueno, ok, fatal');

function tipCalculator(calidad, coste){

    switch (calidad){
        case "fatal": return coste * 5 / 100
        break;

        case "ok": return coste * 15 / 100
        break;        
        
        case "bueno": return coste * 20 / 100
        break;        
        
        case "excelente": return coste * 30 / 100
        break;

        default: return coste * 18 / 100
    }

    // if (calidad === "fatal") {
    //     return coste * 5 / 100;
    // }
    // else if (calidad === "ok") {
    //     return coste * 15 / 100;
    // }
    // else if (calidad === "bueno") {
    //     return coste * 20 / 100;
    // }
    // else if (calidad === "fatal") {
    //     return coste * 30 / 100;
    // }
    // else {
    //     return coste * 18 / 100;
    // }
}
const tip = tipCalculator(calidad, coste)
alert(`La propina será de ${tip}€`)