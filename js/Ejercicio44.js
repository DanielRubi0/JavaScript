//Ejercicio 44: Crear objeto de computadora, máquina relacionada con objeto de computadora y método de arranque.

class computadora {
    constructor(navegador){
        this.navegador = navegador;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false) {
            alert("Computadora encendida");
            this.encendido = true;
        } else {
            alert ("Computadora apagada")
            this.encendido == false;
        }
    }
    accederInternet(){
        alert(`Accediendo a ${this.navegador}`)
    }
}

computadora1 = new computadora("Google Chrome");

computadora1.presionarBotonEncendido();
computadora1.accederInternet();