import { EtiquetaBoton } from "../../Etiquetas/EtiquetaButton.js";
/**
 * Extender o Xenérico a Clase EtiquetaBoton 
 * fai que 'this.boton.etiquetaBoton me devolva
 * o botón creado
 */
export class Comunicacion<T extends EtiquetaBoton>{
    boton:T;
    constructor(boton:T){
        this.boton = boton; // this.boton é a instancia a clase EtiquetaBoton
    }

    async getDatosServer(){
        // Este método relaciona a clase EtiquetaBoton
        // utilizando o 'get' de etiquetaBoton 
        // que devolve o botón creado dende 'index.ts'
        this.boton.etiquetaBoton.addEventListener("click", async ()=>{
            let datos = await fetch("/enviarDatos");
            let datosJson = await datos.json()
            console.log("datosJson ",datosJson)
        })
    }
}