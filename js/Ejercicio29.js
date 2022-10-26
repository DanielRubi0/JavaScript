//Ejercicio 29: Te dan el length y el width de un polígono de 4 lados. El polígono puede ser un rectángulo o un cuadrado. Si es un cuadrado, devuelve su área. Si es un rectángulo, devuelve su perímetro. Para este ejercicio debes asumir que es un cuadrado, de lo contrario, es un rectángulo.

let length = Number(prompt('Introduce el largo del cuadrilátero en cm: '));
let width = Number(prompt('Introduce el ancho del cuadrilátero en cm: '));

    if (length === width) {
        alert(`El área del cuadrado es de ${length*width} cm cuadrados`)
    }
    else {
        alert(`El perímetro del rectángulo es de ${length*2+width*2} cm`)
    }
