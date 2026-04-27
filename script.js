function Mostrarmensaje (){
    let mensaje = document. getElementById("mensaje");
    mensaje.innerHTML="Cuida y protege a los animales";
    mensaje.style.display = "block";
    setTimeout (() => {
        mensaje.style.opacity = "1";
    mensaje.style.transform = "translateY(0)";
    },50);
}
function Mostrarmensaje2 (){
    let mensaje = document. getElementById("mensaje2");
    mensaje.innerHTML="Hola. Hoy quiero presentarte mi página";
    mensaje.style.display = "block";
    setTimeout (() => {
        mensaje.style.opacity = "1";
    mensaje.style.transform = "translateY(0)";
    },50);
}