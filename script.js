window.onload = function () {
  document.getElementById("pergunta").textContent = "Hollow knights?";
  resposta.focus();
};
const msg = "Sua localização é ";
let timezone; // Variável para armazenar o fuso horário

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
  timezone = TimezoneJS.gettimezone({ lat: latitude, lng: longitude }); // Armazena o fuso horário

  updateTime();
}

function updateTime() {
  const time = new Date().toLocaleString("pt-BR", { timeZone: timezone });
  document.getElementById("showUser").innerHTML = time;
}

// Chamar a função inicial para obter a localização e exibir a hora
showUserTime();

// Atualizar a hora a cada 15 segundos
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
    alert("Resposta correta!");
  } else {
    alert("resposta incorreta");
  }
}

// Corrected function with removed extra parenthesis
function gerarCorAleatoria() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function trocarCores() {
  // Using ID selector for the button container (#cores)
  const elementoCores = document.getElementById("cores");
  const buttonCores = elementoCores.querySelector("button"); // Select the button inside the container

  buttonCores.style.backgroundColor = gerarCorAleatoria();
  buttonCores.style.color = gerarCorAleatoria();

  // Alternatively, if you want to change the color of all elements inside the container:
  // const elementos = document.getElementById('cores').querySelectorAll('*');
  // elementos.forEach(elemento => {
  //   elemento.style.backgroundColor = gerarCorAleatoria();
  //   elemento.style.color = gerarCorAleatoria();
  // });
}

// ... other functions like verificarResposta()
