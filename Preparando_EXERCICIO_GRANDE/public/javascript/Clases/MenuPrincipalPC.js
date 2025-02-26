import { EtiquetaA } from "../Etiquetas/EtiquetaA.js";
import { EtiquetaDiv } from "../Etiquetas/EtiquetaDiv.js";
//import { EtiquetaDivWithImg } from "../Etiquetas/EtiquetaDivWithImg";
import { EtiquetaImg } from "../Etiquetas/EtiquetaImg.js";
import { Navegacion } from "./Navegacion.js";
import { PintarElemento } from "./PintarElemento.js";
class NavegacionMenuPrincipal extends Navegacion {
    constructor(enlace) {
        super(); // obliga a ter 'super()'
        this.direccion = ''; // témola que inicializar o non iniciala no constructor
        this.etiquetasCreadasImg = [];
        this.referenciaEtiquetaA = new EtiquetaA();
        this.referenciaEtiquetaImg = new EtiquetaImg(enlace);
        this.posicionarEtiquetaCreada = new PintarElemento();
        this.referenciaEtiquetaDiv = new EtiquetaDiv();
    }
    crearAtributos(direccion) {
        // {Clase EtiquetaA}
        this.referenciaEtiquetaA.introducirAtributoHref(direccion);
        // {Clase EtiquetaDiv}
        // {Clase EtiquetaImg}
        //this.referenciaEtiquetaImg.introducirAtributoSrc()
        this.etiquetasCreadasImg = this.referenciaEtiquetaImg.creamosEtiquetas();
    }
    pintarEnPantalla(direccion) {
        this.direccion = direccion;
        //let moitoLio = this.agregandoEtiqueta(this.referenciaEtiquetaImg.valorRefImg,this.referenciaEtiquetaA.valorRefEtiquetaA)
        //let divAImg = this.agregandoEtiqueta(moitoLio,this.referenciaEtiquetaDiv.referenciaEtiquetaDiv)
        //document.body.append(divAImg)
        this.crearAtributos(direccion);
        for (let etiquetaImg of this.etiquetasCreadasImg) {
            document.body.prepend(etiquetaImg);
        }
    }
    introducirTextoNasEtiquetas(texto) {
        this.referenciaEtiquetaA.introducirTexto(texto);
    }
    establecerEstilo(estiloA, estiloDiv, estiloImg) {
        this.referenciaEtiquetaA.introducirAtributoClass(estiloA);
        //this.referenciaEtiquetaImg.introducirAtributoClass(estiloImg);
    }
    agregandoEtiqueta(ondePintoAntes, referencia) {
        return this.posicionarEtiquetaCreada.pintarOFinal(ondePintoAntes, referencia);
    }
}
export { NavegacionMenuPrincipal };
