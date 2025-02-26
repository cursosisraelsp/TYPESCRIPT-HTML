import { Icono } from "../Interfaces/Icono.js";

interface BloqueLinkNavegacion{
    crearAtributos:(direccion:string)=> void;
    pintarEnPantalla:(direccion:string) => void;
    introducirTextoNasEtiquetas:(texto:string)=> void;
    establecerEstilo: (estiloA:string,estiloDiv:string,estiloImg:string)=>void;
}


abstract class Navegacion implements BloqueLinkNavegacion{
    abstract crearAtributos(direccion:string):void;
    abstract pintarEnPantalla(direccion:string):void;
    abstract introducirTextoNasEtiquetas(texto:string):void;
    abstract establecerEstilo(estiloA:string,estiloDiv:string,estiloImg:string):void;
}


export{
    Navegacion
}