//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');



form.addEventListener('submit', function (event) {
    event.preventDefault();
    let users = Array(
        {
            usuario: username.value,
            contraseña: password.value
        }
    );
    localStorage.setItem('user', JSON.stringify(users));
    window.location.href='base.html'
});


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

function guardarDatos(){
    localStorage.setItem('user', document.getElementById('username').value)
}


function validar() {

    let nombre = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if ((nombre !== "") && (pass !== "") && (pass.length >= 6) && (pass.length <= 8)) {
        guardarDatos()
        window.location.href = "base.html"
    }
    else {
        alert("Debe completar los campos")
    }
}
