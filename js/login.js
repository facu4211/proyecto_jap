//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {


    var btnAbrirPopup = document.getElementById("btn-abrir-popup"),
        overlay = document.getElementById("overlay"),
        popup = document.getElementById("popup"),
        btnCerrarPopup = document.getElementById("btn-cerrar-popup");

    btnAbrirPopup.addEventListener('click', function () {
        overlay.classList.add("active");
        popup.classList.add("active");
    });

    btnCerrarPopup.addEventListener('click', function () {
        overlay.classList.remove("active");
        popup.classList.remove("active");
    });



});

function validar() {

    let nombre= document.getElementById("name").value;
    let pass= document.getElementById("password").value;
    if((nombre!=="") && (pass !=="") && (pass.length >= 6) && (pass.length <=8)){
        window.location.href="base.html"
    }
    else{
        alert("Debe completar los campos")
    }
}
