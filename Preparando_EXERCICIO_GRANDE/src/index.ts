import { NavegacionMenuPrincipal } from "./Clases/MenuPrincipalPC.js";
import { Icono } from "./Interfaces/Icono.js";


// Utilizo a clase NavegacionMenuPrincipal
// para crear o menú
// INSTANCIO A CLASE DE NAVEGACIÓN DO MENÚ PRINCIPAL




let icono : Icono = {
    home:"./imaxes/Home.svg",
    grupo:"./imaxes/Persoas.svg",
    etiqueta:"./imaxes/Shape.svg"
}
let navegar = new NavegacionMenuPrincipal(icono);

navegar.pintarEnPantalla("#")













