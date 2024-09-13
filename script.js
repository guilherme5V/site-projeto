window.onload = function () {
  document.getElementById("pergunta").textContent = "Hollow knights?";
  resposta.focus();
};
const msg = "Sua localização é ";
let timezone; //

function showUserTime() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("showUser").innerHTML =
      "Geolocalização não suportada por este navegador.";
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  TimezoneJS.timezone.zoneFileVersion = "2019a";
  TimezoneJS.timezone.init({ async: false });
  timezone = TimezoneJS.gettimezone({ lat: latitude, lng: longitude });

  updateTime();
}

function updateTime() {
  const time = new Date().toLocaleString("pt-BR", { timeZone: timezone });
  document.getElementById("showUser").innerHTML = time;
}

showUserTime();

setInterval(updateTime, 1000);

function atualizarHora() {
  const agora = new Date();
  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();
  document.getElementById(
    "hora"
  ).textContent = `${horas}:${minutos}:${segundos}`;
}
function verificarResposta() {
  const respostaUsuario = document.getElementById("resposta").value;
  const respostaCorreta = "sim";

  if (respostaUsuario.toLowerCase() === respostaCorreta.toLowerCase()) {
    alert("Resposta correta! 🙄");
  } else {
    alert("resposta incorreta 😕");
  }
}

function TrocaCores() {
  var botao = document.getElementById("corbotao");
  var cores = [
    "red",
    "green",
    "blue",
    "white",
    "black",
    "purple",
    "crimson",
    "coral",
    "blanchedalmond",
  ];
  var cores1 = [
    "yellow",
    "orange",
    "pink",
    "gray",
  ];

  var indice = Math.floor(Math.random() * cores.length);
  botao.style.backgroundColor = cores[indice];

  var corpo = document.getElementById("site");
  corpo.style.backgroundColor = cores[indice];

  var titulo = document.getElementById("titulo-principal");
  titulo.style.color = cores[indice];

  var paragrafo = document.getElementById("venom-p");
  paragrafo.style.color = cores[indice];

  var verifica = document.getElementById("verifica-botao-1");
  verifica.style.color = cores[indice];
  verifica.style.backgroundColor = cores1[indice];

  var castle = document.getElementById("castlevania");
  castle.style.color = cores[indice];
  castle.style.backgroundColor = cores1[indice];
  
  var fps = document.getElementById("fps");
  fps.style.color = cores1[indice];
  fps.style.backgroundColor = cores[indice];


  var perguntahollow = document.getElementById("pergunta");
  perguntahollow.style.color = cores1[indice];
  perguntahollow.style.color = cores1[indice];

  var btnhollow = document.getElementById("hollow-btn");
  btnhollow.style.color = cores[indice];
}
