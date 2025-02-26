/**
 * A entrada do constructor será @etiquetaDiv : document.createElement("div")
 */
class EtiquetaDiv {
    constructor() {
        //this.etiquetaDiv = etiquetaDiv;
        this.etiquetaDiv = document.createElement("div");
    }
    introducirAtributoClass(estilo) {
        // introduciremos o estilo
        this.etiquetaDiv.setAttribute("class", estilo);
    }
    pintoEnHTML() {
        document.body.append(this.etiquetaDiv);
    }
    get referenciaEtiquetaDiv() {
        return this.etiquetaDiv;
    }
}
export { EtiquetaDiv };
