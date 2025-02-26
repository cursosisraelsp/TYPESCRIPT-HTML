class EtiquetaA {
    constructor() {
        this.etiquetaA = document.createElement("a");
    }
    introducirAtributoHref(direccion) {
        this.etiquetaA.setAttribute('href', direccion);
    }
    introducirAtributoClass(estilo) {
        this.etiquetaA.setAttribute('class', estilo);
        //this.etiquetaA.className = estilo;
    }
    introducirTexto(textoEtiqueta) {
        this.etiquetaA.innerHTML = textoEtiqueta;
    }
    pintoEnHTML() {
        document.body.append(this.etiquetaA);
    }
    get valorRefEtiquetaA() {
        return this.etiquetaA;
    }
}
export { EtiquetaA };
