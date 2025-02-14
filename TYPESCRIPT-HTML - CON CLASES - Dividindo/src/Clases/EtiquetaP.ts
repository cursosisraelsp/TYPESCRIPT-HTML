import { Etiqueta } from "./Etiqueta.js";

class EtiquetaP extends Etiqueta{
    private referencia: any;// Atributo ou variable local dentro da clase

    creoReferencia(): HTMLParagraphElement {
        return document.createElement("p");
    }
    introduzcoTexto(referencia: HTMLParagraphElement,texto:string): void {
        this.referencia = referencia;
        this.referencia.innerHTML = texto;
    }
    devolverReferencia(): HTMLParagraphElement {
        return this.referencia
    }

}

export {EtiquetaP}