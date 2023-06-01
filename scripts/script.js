
let nombre = prompt("¿Cómo te llamás?");
if (nombre != null && nombre != "") {
  let saludo = document.getElementById("saludo");
  saludo.textContent = "¡Hola " + nombre + "!";
};

let agradecimiento = document.getElementById("agradecimiento");
agradecimiento.textContent = "Gracias " + nombre + " por visitar Mi Sitio Web. Te espero para entrenar!";
