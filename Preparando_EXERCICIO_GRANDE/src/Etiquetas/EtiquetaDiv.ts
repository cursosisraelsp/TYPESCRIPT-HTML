/**
 * A entrada do constructor será @etiquetaDiv : document.createElement("div")
 */

class EtiquetaDiv{
    // O 'protected' fai que a poda ver noutra clase, pero dende fora non
    protected etiquetaDiv;
    constructor(){
        //this.etiquetaDiv = etiquetaDiv;
        this.etiquetaDiv = document.createElement("div");
    }

    public introducirAtributoClass(estilo:string):void{
        // introduciremos o estilo
        this.etiquetaDiv.setAttribute("class",estilo)

    }

    public pintoEnHTML(){
        document.body.append(this.etiquetaDiv)
    }

    get referenciaEtiquetaDiv(){
        return this.etiquetaDiv;
    }
    
}

export{
    EtiquetaDiv
}