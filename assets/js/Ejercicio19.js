//Ejercicio 19: Crear un programa que dadas 2 variables booleanas,“buen_tiempo” y “trabajo”, nos diga si puedo ir a la playa. Si trabajo, no puedo ir, si no trabajo verifico que haga buen tiempo. En los casos negativos imprimir un mensaje adecuado. 
let trabajo = confirm('Trabajas hoy?');
if (trabajo === false) {
    let buen_tiempo = confirm('¿Hace buen tiempo?')
    if (buen_tiempo === true){
        alert('Puedes ir a la playa')
    }
}else {
    alert('No puedes ir a la playa');
}