import { EtiquetaDiv } from "./EtiquetaDiv";

class EtiquetaDivWithImg extends EtiquetaDiv{

    constructor(){
        super()
    }
    // Este método é dúvida, poderíase extender a outra Clase
    public introducirEtiquetaImg(etiquetaImg: HTMLImageElement){
        // introduciremos a Imaxen document.createElement("img")
        this.etiquetaDiv = etiquetaImg;
    }

    /* 
        public pintoEnHTML(): void {
            super.pintoEnHTML();// esta faime referencia a clase pai
        } 
    */
    
}

export{
    EtiquetaDivWithImg
}