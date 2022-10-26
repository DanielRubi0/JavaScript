//Ejercicio 24: Escribir una función que, dados un mínimo y un máximos,cree un número aleatorio entre un número y un máximo.

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(0, 99999)
alert(`El número ganador de la lotería de Navidad será el ${rndInt}`)