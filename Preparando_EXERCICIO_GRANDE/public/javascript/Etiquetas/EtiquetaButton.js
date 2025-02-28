export class EtiquetaBoton {
    constructor(boton) {
        this.boton = boton.etiquetaButton;
        this.estilo = boton.estilo;
        this.texto = boton.texto;
        this.crearBoton();
        this.pintarBoton();
    }
    eventoClick() {
        this.estiloBoton();
        this.textoBoton();
        this.boton.addEventListener("click", () => {
            console.log("boas dende o boton");
        });
    }
    estiloBoton() {
        this.boton.setAttribute("class", this.estilo);
    }
    textoBoton() {
        this.boton.innerHTML = this.texto;
    }
    crearBoton() {
        this.textoBoton();
        this.estiloBoton();
    }
    pintarBoton() {
        document.body.prepend(this.boton);
    }
    get etiquetaBoton() {
        return this.boton;
    }
}
