//   FUNCION MOSTRAR MENU
document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {
  document.querySelector(".menu").classList.toggle("mostrar_menu");
}

//   FUNCION PARALLAX
window.onscroll = function() {
  var posicion = window.pageYOffset || document.documentElement.scrollTop;
  var elemento = document.getElementById("selfie");
  elemento.style.left = posicion * 0.15 + "px";
}
