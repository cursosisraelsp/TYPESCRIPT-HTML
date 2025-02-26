class EtiquetaA{
    
    private numEtiquetasImg:number;
    private etiquetasA: HTMLAnchorElement[]=[];
    private estilos:string[];
    private direccions:string[];
    private textos:string[];
    constructor(numEtiquetasImg:number,estilos:string[],direccions:string[],textos:string[]){
        this.estilos = estilos;
        this.numEtiquetasImg = numEtiquetasImg;
        this.direccions = direccions;
        this.textos = textos;
    }

    public EtiquetasA(){
        this.crearEtiquetasA();
        this.introducirAtributoClass();
        this.introducirAtributoHref();
        this.introducirTexto();
    }

    private crearEtiquetasA(){
        for(let contador = 0; contador < this.numEtiquetasImg;contador++){
            
            this.etiquetasA.push(document.createElement("a"))
        }
    }
    private introducirAtributoHref(){
        for(let contador = 0; contador < this.numEtiquetasImg;contador++){
            this.etiquetasA[contador].setAttribute('href',this.direccions[contador]);
        }
        
    }

    private introducirAtributoClass(){
        for(let contador = 0; contador < this.numEtiquetasImg;contador++){
            this.etiquetasA[contador].setAttribute('class',this.estilos[contador]);
        }
    }

    private introducirTexto(){
        for(let contador = 0; contador < this.numEtiquetasImg;contador++){
            this.etiquetasA[contador].innerHTML = this.textos[contador];
        }
    }

    

    get DevolverEtiquetasA() {
        return this.etiquetasA
    }

}

export{EtiquetaA}
