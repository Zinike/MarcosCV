//   FUNCION MOSTRAR MENU
document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {
  document.querySelector(".menu").classList.toggle("mostrar_menu");
}

//   FUNCION PARALLAX
window.onscroll = function() {
  var posicion = window.pageYOffset || document.documentElement.scrollTop;
  var selfie = document.getElementById("selfie");
  var texto = document.getElementById("contenedor");
  selfie.style.right = posicion * 0.5 + "px";

}
