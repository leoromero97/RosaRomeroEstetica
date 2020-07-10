//A Partir de esta linea se ejecuta el script para el boton que aparece para subir
window.onscroll = function () {
  if (document.documentElement.scrollTop > 700) {
    document.querySelector(".containerGoTop").classList.add("showGoTop");
    document.querySelector(".subir").classList.remove("ocultarContenido");
    document.querySelector(".up").classList.remove("ocultarContenido");

  } else {
    document.querySelector(".containerGoTop").classList.remove("showGoTop");
    document.querySelector(".subir").classList.add("ocultarContenido");
    document.querySelector(".up").classList.add("ocultarContenido");
  }
}

//Este script es para la topbar.
const navSlide = () => {
  let burger = document.querySelector(".burger");
  let topbar = document.querySelector(".links");

  burger.addEventListener("click", () => {
    topbar.classList.toggle("sidebar");
    //Animacion del menu hamburguesa, pasa a ser una X
    burger.classList.toggle("toggle");
  });
};
navSlide();
