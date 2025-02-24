import { NavegacionMenuPrincipal } from "./Clases/MenuPrincipalPC";

// Creo as etiquetas 
let a = document.createElement("a");
let div = document.createElement("div");
let img = document.createElement("img");

// Utilizo a clase NavegacionMenuPrincipal
// para crear o menú
// INSTANCIO A CLASE DE NAVEGACIÓN DO MENÚ PRINCIPAL
let navegar = new NavegacionMenuPrincipal(a,img,div);

// 1º Na etiqueta 'a' creamos no atributo 'href=#'
navegar.crearAtributos("#","./imaxes/codigo.png");
// 2º Introducimos no atributo 'class' o estilo
navegar.establecerEstilo("selector-a","test-selector-div","test-selector-img");
navegar.introducirTextoNasEtiquetas("este é o enlace")
navegar.pintarEnPantalla()







/*
let instanciaEtiquetaA = new EtiquetaA(document.createElement("a"))

instanciaEtiquetaA.introducirAtributoHref("#")

console.log(instanciaEtiquetaA.valorRefEtiquetaA)
*/
/* import { EtiquetaP } from "./Clases/EtiquetaP";
import { PintarElemento } from "./Clases/PintarElemento";

let unTexto = "por fín é VENRES!!!";

// Creo a instancia a clase EtiquetaP
let instanciaEtiquetaP = new EtiquetaP();

// 1º Creo a referencia,neste caso a P
let etiquetaPCreada = instanciaEtiquetaP.creoReferencia();

// 2º Introduzco o texto 
instanciaEtiquetaP.introduzcoTexto(unTexto);

// 3º Creo a instancia a clase de Pintar no HTML
let pintoNoHTML = new PintarElemento(document.body)

// 4º Pinto no HTML
pintoNoHTML.pintarOFinal(instanciaEtiquetaP.devolverReferencia()) */



