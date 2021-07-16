let inicio = document.querySelector("#inicio");
let primero = document.querySelector("#primero");

inicio.addEventListener ("click", irPrimero, false);
function irPrimero (e) {
    primero.scrollIntoView({behavior: "smooth"});
}

let sobreMi = document.querySelector("#sobreMi");
let segundo = document.querySelector("#segundo");

sobreMi.addEventListener("click", irSegundo, false);
function irSegundo (e){
    segundo.scrollIntoView ({behavior: "smooth"});
} 

let artistas = document.querySelector("#artistas");
let tercero = document.querySelector("#tercero");

artistas.addEventListener("click", irTercero, false);
function irTercero (e) {
    tercero.scrollIntoView ({behavior: "smooth"});
}

let trabajo = document.querySelector("#trabajo");
let cuarto = document.querySelector("#cuarto");

trabajo.addEventListener("click", irCuarto, false);
function irCuarto (e) {
    cuarto.scrollIntoView ({behavior: "smooth"});
}

let contacto = document.querySelector("#contacto");
let quinto = document.querySelector("#quinto");

contacto.addEventListener("click", irQuinto, false);
function irQuinto (e) {
    quinto.scrollIntoView ({behavior: "smooth"});
}

const configuracion_ventana =
  "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

let github = document.getElementById("github");
github.addEventListener("click", abrirGithub);
function abrirGithub() {
  github = window.open(
      "https://github.com/MannuOrtiz", "github.com", configuracion_ventana
  );
}

email.addEventListener("click", abrirMail)
function abrirMail() {
    email = window.open(
        "mailto:manuelaortizvelzi@gmail.com", "gmail.com", configuracion_ventana
    );
}

let instagram = document.getElementById("instagram");
instagram.addEventListener("click", abrirInstagram);
function abrirInstagram() {
  instagram = window.open(
    "https://www.instagram.com/mannu.ortiz/", "instagram.com", configuracion_ventana
  );
}
