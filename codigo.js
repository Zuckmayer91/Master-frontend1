// comentario

// var texto = "hola";
// var numero = 1;
// var arreglo = ["1","2","3"];

// // Seleccionar json
// var objetos = {"propiedad1" : "valor1", "propiedad2" : "valor2"};

// // Seleccionarid
// var etiqueta1 = document.querySelector("#etiqueta1");

// //seleccionar clases
// var igual = document.querySelectorAll(".igual"); 



// function cambiarColor(){


//     if(igual[0].innerHTML = "ADIOS"){
   
//         igual[0].style.background = "purple";
//         igual[0].style.color = "white";
    
//         igual[1].style.background = "green";
//         igual[1].style.color = "white";
    
    
//     }else{
//         igual[0].style.background = "green";
//         igual[0].style.color = "white";
    
//         igual[1].style.background = "green";
//         igual[1].style.color = "white";
//     } 

// }

// etiqueta1.addEventListener("click",cambiarColor);
var igual = $(".igual");
$("#etiqueta1").click(function(){

    if($(igual[0]).html() = "ADIOS"){

        // for(var i = 0; i <= igual.length; i++){
            $(igual[0]).css({"background": "purple", "color":"white"})
            $(igual[1]).css({"background": "yello", "color":"white"})
        // }
    }

}
)

