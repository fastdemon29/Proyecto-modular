document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", registrarse);
window.addEventListener("resize", anchoPagina);

//Declaracion de variables
var contenedor_login_registrarse = document.querySelector(".contenedor__login-registrarse");
var formulario_login = document.querySelector(".formulario__login");
var formulario_registrarse = document.querySelector(".formulario__registrarse");
var caja_trasera_login = document.querySelector(".caja_trasera-login");
var caja_trasera_registrarse= document.querySelector(".formulario__registrarse");

function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_registrarse.style.display = "block";
    }else{
        caja_trasera_registrarse.style.display = "block";
        caja_trasera_registrarse.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_registrarse.style.display = "none";
        contenedor_login_registrarse.style.left = "0px";
    }
}

anchoPagina();

function iniciarSesion(){

    if(window.innerWidth > 850){
        formulario_registrarse.style.display = "none";
        contenedor_login_registrarse.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_registrarse.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else{
        formulario_registrarse.style.display = "none";
        contenedor_login_registrarse.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_registrarse.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
    
}


function registrarse(){

    if(window.innerWidth > 850){
        formulario_registrarse.style.display = "block";
        contenedor_login_registrarse.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_registrarse.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_registrarse.style.display = "block";
        contenedor_login_registrarse.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_registrarse.style.display = "block";
        caja_trasera_login.style.display = "1";
    }

}