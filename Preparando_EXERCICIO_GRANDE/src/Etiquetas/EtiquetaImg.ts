class EtiquetaImg{
    protected etiquetaImg;
    constructor(){
        this.etiquetaImg = document.createElement("img");
    }

    public introduzcoAtributoSrc(enlace:string){
        this.etiquetaImg.setAttribute("src",enlace)
    }

    public introducirAtributoClass(estilo:string){
        this.etiquetaImg.setAttribute("class",estilo)
    }

    public pintoEnHTML(){
        document.body.append(this.etiquetaImg);
    }
}

export{EtiquetaImg}