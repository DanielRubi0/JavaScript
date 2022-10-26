//Ejercicio 31: Encuentra la forma más rápida de convertir la primera letra de una cadena en mayúscula a través de una función. Ejemplo: capitalize('simon') Simon

function capitalize(nombre){
    let corregido = String(nombre).charAt(0).toUpperCase() + String(nombre).slice(1);
    alert(corregido);
}

capitalize(prompt("Pon un nombre en minúsculas: "));
