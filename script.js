//A Partir de esta linea se ejecuta el script para el boton que aparece para subir
window.onscroll = function () {
  if (document.documentElement.scrollTop > 700) {
    document.querySelector(".containerGoTop").classList.add("showGoTop");
    document.querySelector(".subir").classList.remove("ocultarContenido");
    document.querySelector(".up").classList.remove("ocultarContenido");
    //activacion y desactivacion del color de la navbar
    active.classList.add("active");
    disable.classList.remove("active");
  } else {
    document.querySelector(".containerGoTop").classList.remove("showGoTop");
    document.querySelector(".subir").classList.add("ocultarContenido");
    document.querySelector(".up").classList.add("ocultarContenido");
    active.classList.remove("active");
    disable.classList.add("active");
  }
}
