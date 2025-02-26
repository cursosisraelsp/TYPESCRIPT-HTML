import { EtiquetaDiv } from "./EtiquetaDiv";
class EtiquetaDivWithImg extends EtiquetaDiv {
    constructor() {
        super();
    }
    // Este método é dúvida, poderíase extender a outra Clase
    introducirEtiquetaImg(etiquetaImg) {
        // introduciremos a Imaxen document.createElement("img")
        this.etiquetaDiv = etiquetaImg;
    }
}
export { EtiquetaDivWithImg };
