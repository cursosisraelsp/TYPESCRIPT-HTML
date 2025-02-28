import { NavegacionMenuPrincipal } from "./Clases/MenuPrincipalPC.js";
import { EtiquetaBoton } from "./Etiquetas/EtiquetaButton.js";
import { Comunicacion } from "./Xenericos/Clases/Comunicacion.js";
// Utilizo a clase NavegacionMenuPrincipal
// para crear o menú
// INSTANCIO A CLASE DE NAVEGACIÓN DO MENÚ PRINCIPAL
let iconos = {
    home: "./imaxes/Home.svg",
    grupo: "./imaxes/Persoas.svg",
    etiqueta: "./imaxes/Shape.svg"
};
let etiquetasA = {
    numEtiquetasImg: 3,
    estilos: ['selector-a', 'selector-a', 'selector-a'],
    direccions: ['#', '#', '#'],
    textos: ['isto é un enlace 1', 'isto é un enlace 2', 'isto é un enlace 3']
};
let estiloDiv = {
    estilo: "test-selector-div"
};
let navegar = new NavegacionMenuPrincipal(iconos, etiquetasA, estiloDiv);
navegar.pintarEnPantalla("#");
//#### 
let unBoton = {
    etiquetaButton: document.createElement("button"),
    estilo: "boton",
    texto: "Traer Datos do Servidor"
};
let instanciaBoton = new EtiquetaBoton(unBoton);
let instanciaComunicacion = new Comunicacion(instanciaBoton);
instanciaComunicacion.getDatosServer();
