import { NavegacionMenuPrincipal } from "./Clases/MenuPrincipalPC.js";
// Utilizo a clase NavegacionMenuPrincipal
// para crear o menú
// INSTANCIO A CLASE DE NAVEGACIÓN DO MENÚ PRINCIPAL
let icono = {
    home: "./imaxes/Home.svg",
    grupo: "./imaxes/Persoas.svg",
    etiqueta: "./imaxes/Shape.svg"
};
let navegar = new NavegacionMenuPrincipal(icono);
navegar.pintarEnPantalla("#");
//navegar.crearAtributos("#",icono);
//navegar.establecerEstilo("selector-a","test-selector-div","test-selector-img");
//navegar.introducirTextoNasEtiquetas("este é o enlace");
//navegar.pintarEnPantalla();
// 
/* for(let variable in icono){
    console.log(`${variable} ${icono[variable as keyof Icono]}`)
    navegar.crearAtributos("#",icono[variable as keyof Icono]);
    navegar.establecerEstilo("selector-a","test-selector-div","test-selector-img");
    navegar.introducirTextoNasEtiquetas("este é o enlace");
    navegar.pintarEnPantalla();
} */
