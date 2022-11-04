//Ejercicio 45: Crear objeto de fruta, genera el tipo, color y peso de la fruta.

class fruta {
    constructor(tipo,color,peso){
        this.tipo = tipo;
        this.color = color;
        this.peso = peso;
    }

    frutaInfo(){
        return`
        Tipo: ${this.tipo} </br>
        Color: ${this.color} </br>
        Peso: ${this.peso}
        `;
    }
}

limón = new fruta("ácida","amarilla","100 gramos");

document.write(`
${limón.frutaInfo()} 
`);