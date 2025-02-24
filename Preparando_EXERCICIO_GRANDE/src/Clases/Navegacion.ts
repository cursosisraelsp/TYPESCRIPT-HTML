interface BloqueLinkNavegacion{
    crearAtributos:(direccion:string,enlace:string)=> void;
    pintarEnPantalla:() => void;
    introducirTextoNasEtiquetas:(texto:string)=> void;
    establecerEstilo: (estiloA:string,estiloDiv:string,estiloImg:string)=>void;
}


abstract class Navegacion implements BloqueLinkNavegacion{
    abstract crearAtributos(direccion:string,enlace:string):void;
    abstract pintarEnPantalla():void;
    abstract introducirTextoNasEtiquetas(texto:string):void;
    abstract establecerEstilo(estiloA:string,estiloDiv:string,estiloImg:string):void;
}


export{
    Navegacion
}