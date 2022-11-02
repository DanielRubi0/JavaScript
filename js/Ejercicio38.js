//Ejercicio 38: A partir de un array, devuelve otro array con las primeras 3 letras por cada elemento del array inicial.

//Ejemplo: const días = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
//Resultado = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab', 'Dom']


const días = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const resultado = días.map((value) => value.charAt(0) + value.charAt(1) + value.charAt(2));
console.log(resultado);

