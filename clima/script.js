let cidade = document.getElementById("inpt");

let cdd = document.getElementById("cdd");

let temp = document.getElementById("temp");

let imagem = document.getElementById("icon");

let minmax = document.getElementById("minmax");

const apiKey = "f3a7c4eb94741436e67943accbf519b6";

async function tempo() {
  if (cidade.value === "") {
    var busca = "brasil";
  } else {
    busca = cidade.value;
  }

  let clima = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${busca}&lang="pt_br"&units=metric&APPID=${apiKey}`
    )
  ).json();

  cdd.innerHTML = `${clima.name} ,  <span id="pais">${clima.sys.country}</span>`;
  imagem.innerHTML = `<img src="./icons/${clima.weather[0].icon}.png">`;

  temp.innerHTML = parseInt(clima.main.temp) + " °C";

  minmax.innerHTML = `Min ${parseInt(clima.main.temp_min)}° / Max ${parseInt(
    clima.main.temp_max
  )}°`;
}
tempo();

document.getElementById("btn").addEventListener("click", tempo);

document.addEventListener(
  "keypress",
  function (e) {
    if (e.which == 13) {
      tempo();
    }
  },
  false
);
