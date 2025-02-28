import { IBoton } from "../Interfaces/IBoton.js";

export class EtiquetaBoton{
    private boton:HTMLButtonElement;
    private estilo:string;
    private texto: string;
    constructor(boton: IBoton){
        this.boton = boton.etiquetaButton;
        this.estilo = boton.estilo;
        this.texto = boton.texto;
        this.crearBoton()
        this.pintarBoton()
    }
    
    public eventoClick(): void {
        this.estiloBoton();
        this.textoBoton();
        this.boton.addEventListener("click",()=>{
            console.log("boas dende o boton")
        })
    }

    private estiloBoton():void{
        this.boton.setAttribute("class",this.estilo)
    }
    private textoBoton():void{
        this.boton.innerHTML = this.texto;
    }
    private crearBoton(){
        this.textoBoton();
        this.estiloBoton();
    }
    private pintarBoton(){
        document.body.prepend(this.boton)
    }
    get etiquetaBoton(){
        
        return this.boton
    }
}