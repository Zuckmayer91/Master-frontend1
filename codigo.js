// comentario

var texto = "hola";
var numero = 1;
var arreglo = ["1","2","3"];
// Seleccionar json
var objetos = {"propiedad1" : "valor1", "propiedad2" : "valor2"};
// Seleccionarid
var etiqueta1 = document.querySelector("#etiqueta1");
//seleccionar clases
var igual = document.querySelectorAll(".igual");

function cambiarColor(){

    igual[0].style.background = "green";
    igual[0].style.color = "black";

    igual[1].style.background = "green";
    igual[1].style.color = "black";

}

etiqueta1.addEventListener("click",cambiarColor);