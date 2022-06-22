//   FUNCION PARALLAX
window.onscroll = function() {
  var posicion = window.pageYOffset || document.documentElement.scrollTop;
  var selfie = document.getElementById("selfie");
  var texto = document.getElementById("contenedor");
  selfie.style.right = posicion * 0.25 + "px";
}
