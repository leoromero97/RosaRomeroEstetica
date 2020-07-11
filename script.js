//A Partir de esta linea se ejecuta el script para el boton que aparece para subir
window.onscroll = function () {
  if (document.documentElement.scrollTop > 700) {
    document.querySelector(".containerGoTop").classList.add("showGoTop");
    document.querySelector(".subir").classList.remove("ocultarContenido");
    document.querySelector(".up").classList.remove("ocultarContenido");
    sobreMi.classList.add("state");
    inicio.classList.remove("state");
    servicio.classList.remove("state");
    promociones.classList.remove("state");
    clientes.classList.remove("state");
    contacto.classList.remove("state");

  } else {
    document.querySelector(".containerGoTop").classList.remove("showGoTop");
    document.querySelector(".subir").classList.add("ocultarContenido");
    document.querySelector(".up").classList.add("ocultarContenido");
    inicio.classList.add("state");
    sobreMi.classList.remove("state");
    servicio.classList.remove("state");
    promociones.classList.remove("state");
    clientes.classList.remove("state");
    contacto.classList.remove("state");
  }
}

//Este script es para la topbar.
let burger = document.querySelector(".burger");
let topbar = document.querySelector(".links");
let inicio = document.getElementById("inicioI");
let sobreMi = document.getElementById("sobreMiI");
let servicio = document.getElementById("servicioI");
let promociones = document.getElementById("promocionesI");
let clientes = document.getElementById("clientesI");
let contacto = document.getElementById("contactoI");

inicio.addEventListener("click", () => {
  inicio.classList.add("state");
  sobreMi.classList.remove("state");
  servicio.classList.remove("state");
  promociones.classList.remove("state");
  clientes.classList.remove("state");
  contacto.classList.remove("state");
});

sobreMi.addEventListener("click", () => {
  sobreMi.classList.add("state");
  inicio.classList.remove("state");
  servicio.classList.remove("state");
  promociones.classList.remove("state");
  clientes.classList.remove("state");
  contacto.classList.remove("state");
});

servicio.addEventListener("click", () => {
  servicio.classList.add("state");
  inicio.classList.remove("state");
  sobreMi.classList.remove("state");
  promociones.classList.remove("state");
  clientes.classList.remove("state");
  contacto.classList.remove("state");
});

promociones.addEventListener("click", () => {
  promociones.classList.add("state");
  inicio.classList.remove("state");
  sobreMi.classList.remove("state");
  servicio.classList.remove("state");
  clientes.classList.remove("state");
  contacto.classList.remove("state");
});

clientes.addEventListener("click", () => {
  clientes.classList.add("state");
  inicio.classList.remove("state");
  sobreMi.classList.remove("state");
  servicio.classList.remove("state");
  promociones.classList.remove("state");
  contacto.classList.remove("state");
});

contacto.addEventListener("click", () => {
  contacto.classList.add("state");
  inicio.classList.remove("state");
  sobreMi.classList.remove("state");
  servicio.classList.remove("state");
  promociones.classList.remove("state");
  clientes.classList.remove("state");
});

burger.addEventListener("click", () => {
  topbar.classList.toggle("sidebar");
  //Animacion del menu hamburguesa, pasa a ser una X
  burger.classList.toggle("toggle");
});

//Animacion de las secciones
let containerAbout = document.querySelector(".containerAbout");
window.addEventListener("scroll", () => {
  let currentHeight = window.scrollY; //parte superior de la pantalla
  let sloganPositionY = containerAbout.scrollHeight - 850;
  if (currentHeight >= sloganPositionY) {
    containerAbout.classList.add("aparecer");
  }
});

let containerServices = document.querySelector(".containerServices");
window.addEventListener("scroll", () => {
  let currentHeight2 = window.scrollY; //parte superior de la pantalla
  let sloganPositionY2 = containerServices.scrollHeight + 400;

  if (currentHeight2 >= sloganPositionY2) {
    containerServices.classList.add("aparecer");
    servicio.classList.add("state");
    inicio.classList.remove("state");
    sobreMi.classList.remove("state");
    promociones.classList.remove("state");
    clientes.classList.remove("state");
    contacto.classList.remove("state");
  }
});


let containerBidding = document.querySelector(".containerBidding");
window.addEventListener("scroll", () => {
  let currentHeight3 = window.scrollY; //parte superior de la pantalla
  let sloganPositionY3 = containerBidding.scrollHeight + 1300;

  if (currentHeight3 >= sloganPositionY3) {
    containerBidding.classList.add("aparecer");
    promociones.classList.add("state");
    inicio.classList.remove("state");
    sobreMi.classList.remove("state");
    servicio.classList.remove("state");
    clientes.classList.remove("state");
    contacto.classList.remove("state");
  }
});

let containerClients = document.querySelector(".containerClients");
window.addEventListener("scroll", () => {
  let currentHeight4 = window.scrollY; //parte superior de la pantalla
  let sloganPositionY4 = containerClients.scrollHeight + 2900;

  if (currentHeight4 >= sloganPositionY4) {
    containerClients.classList.add("aparecer");
    clientes.classList.add("state");
    inicio.classList.remove("state");
    sobreMi.classList.remove("state");
    servicio.classList.remove("state");
    promociones.classList.remove("state");
    contacto.classList.remove("state");
  }
});

let footer = document.querySelector(".footer");
window.addEventListener("scroll", () => {
  let currentHeight5 = window.scrollY; //parte superior de la pantalla
  let sloganPositionY5 = footer.scrollHeight + 3800;

  if (currentHeight5 >= sloganPositionY5) {
    contacto.classList.add("state");
    inicio.classList.remove("state");
    sobreMi.classList.remove("state");
    servicio.classList.remove("state");
    promociones.classList.remove("state");
    clientes.classList.remove("state");
  }
});