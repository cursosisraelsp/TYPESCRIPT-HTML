import { EtiquetaA } from "../Etiquetas/EtiquetaA";
import { EtiquetaDivWithImg } from "../Etiquetas/EtiquetaDivWithImg";
import { EtiquetaImg } from "../Etiquetas/EtiquetaImg";
import { Navegacion } from "./Navegacion";

class NavegacionMenuPrincipal extends Navegacion{
    private referenciaEtiquetaA: EtiquetaA;// Clase da etiquetaA
    private referenciaEtiquetaDivWithImg: EtiquetaDivWithImg;
    private referenciaEtiquetaImg:EtiquetaImg;
    constructor(){
        super();// obliga a ter 'super()'
        this.referenciaEtiquetaA = new EtiquetaA();
        this.referenciaEtiquetaDivWithImg = new EtiquetaDivWithImg();
        // referencia creada dende a clase EtiquetaImg
        this.referenciaEtiquetaImg = new EtiquetaImg();
    }

    crearAtributos(direccion:string,enlace:string): void {
        // {Clase EtiquetaA}
        this.referenciaEtiquetaA.introducirAtributoHref(direccion)
        // {Clase EtiquetaDiv}
        
        // {Clase EtiquetaImg}
        this.referenciaEtiquetaImg.introduzcoAtributoSrc(enlace)
    }
    pintarEnPantalla(): void {
        this.referenciaEtiquetaA.pintoEnHTML();
        this.referenciaEtiquetaDivWithImg.pintoEnHTML();
        this.referenciaEtiquetaImg.pintoEnHTML()
    }
    introducirTextoNasEtiquetas(texto:string):void{
        this.referenciaEtiquetaA.introducirTexto(texto)
    }
    establecerEstilo(estiloA:string,estiloDiv:string,estiloImg:string): void {
        this.referenciaEtiquetaA.introducirAtributoClass(estiloA);
        this.referenciaEtiquetaDivWithImg.introducirAtributoClass(estiloDiv);
        this.referenciaEtiquetaImg.introducirAtributoClass(estiloImg);
    }
}


export{NavegacionMenuPrincipal}
 