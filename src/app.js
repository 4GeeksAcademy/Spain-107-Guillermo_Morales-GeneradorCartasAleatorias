import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
CartaNueva();
};

function CartaNueva() {
  let Palos = ["♦", "♥", "♠", "♣"];
  let Numeros = ["A", "2", "3","4","5","6","7","8","9","10","J","Q","K"];

  let PalosAleatorios= Math.floor(Math.random()*Palos.length);
  let NumerosAleatorios= Math.floor(Math.random()*Numeros.length);

  let paloSeleccionado = Palos[PalosAleatorios];
  let numeroSeleccionado = Numeros[NumerosAleatorios];

  
  let top = document.getElementById("top");
  let center = document.getElementById("center");
  let end = document.getElementById("end");

  top.innerText = paloSeleccionado;
  center.innerText = numeroSeleccionado;
  end.innerText = paloSeleccionado;

  if (paloSeleccionado=="♥") {
     top.style.color = "red";
    end.style.color = "red";
    
  }
}
