import { Imaxes } from "./Imaxes";
export class PintadoHTML {
    #imaxes;
    #etiquetas = [];
    constructor(imaxes: any) {
      this.#imaxes = new Imaxes(imaxes);
    }
  
    #etiquetasImaxes() {
      this.#etiquetas = this.#imaxes.funcionCrearRef();
    }
   
  
    pintarHTML() {
      //console.log(this.#etiquetas);
      this.#etiquetasImaxes();
      for (let contador = 0; contador < this.#etiquetas.length; contador++)
        document.body.append(this.#etiquetas[contador]);
    }
  }