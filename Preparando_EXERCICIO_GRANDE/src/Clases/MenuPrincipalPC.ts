import { EtiquetaA } from "../Etiquetas/EtiquetaA.js";
import { EtiquetaDiv } from "../Etiquetas/EtiquetaDiv.js";
//import { EtiquetaDivWithImg } from "../Etiquetas/EtiquetaDivWithImg";
import { EtiquetaImg } from "../Etiquetas/EtiquetaImg.js";
import { Icono } from "../Interfaces/Icono.js";
import { Navegacion } from "./Navegacion.js";
import { PintarElemento } from "./PintarElemento.js";

class NavegacionMenuPrincipal extends Navegacion{
    //private referenciaEtiquetaA: EtiquetaA;    
    private referenciaEtiquetaImg:EtiquetaImg;
    private posicionarEtiquetaCreada: PintarElemento;
    private referenciaEtiquetaDiv: EtiquetaDiv;
    private direccion: string = '';// témola que inicializar o non iniciala no constructor
    private etiquetasCreadasImg : HTMLImageElement[] = [];
    constructor(enlace:Icono){
        super();// obliga a ter 'super()'
        //this.referenciaEtiquetaA = new EtiquetaA();
        
        this.referenciaEtiquetaImg = new EtiquetaImg(enlace);
        this.posicionarEtiquetaCreada = new PintarElemento();
        this.referenciaEtiquetaDiv = new EtiquetaDiv();
    }

    crearAtributos(direccion:string):void{
        // {Clase EtiquetaA}
        //this.referenciaEtiquetaA.introducirAtributoHref()
        // {Clase EtiquetaDiv}
        
        // {Clase EtiquetaImg}
        //this.referenciaEtiquetaImg.introducirAtributoSrc()
         this.etiquetasCreadasImg = this.referenciaEtiquetaImg.creamosEtiquetas()
    }
    pintarEnPantalla(direccion:string): void {
        this.direccion = direccion;
        //let moitoLio = this.agregandoEtiqueta(this.referenciaEtiquetaImg.valorRefImg,this.referenciaEtiquetaA.valorRefEtiquetaA)
        //let divAImg = this.agregandoEtiqueta(moitoLio,this.referenciaEtiquetaDiv.referenciaEtiquetaDiv)
        //document.body.append(divAImg)
        this.crearAtributos(direccion)
        for(let etiquetaImg of this.etiquetasCreadasImg){
            document.body.prepend(etiquetaImg)
        }
    }
    introducirTextoNasEtiquetas(texto:string):void{
        //this.referenciaEtiquetaA.introducirTexto(texto)
  
    }
    establecerEstilo(estiloA:string,estiloDiv:string,estiloImg:string): void {
        //this.referenciaEtiquetaA.introducirAtributoClass(estiloA);
        //this.referenciaEtiquetaImg.introducirAtributoClass(estiloImg);
    }


    private agregandoEtiqueta(ondePintoAntes: HTMLElement,referencia:HTMLElement){ 
        return this.posicionarEtiquetaCreada.pintarOFinal(ondePintoAntes,referencia)

    }

}


export{NavegacionMenuPrincipal}
 