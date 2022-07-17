const API_KEY = "c085c85ef7adac74dca0cca6afe4cb80";

const weather = document.querySelector("#weather");
const icon = document.querySelector("#icon");
const city = document.querySelector("#city");

function getGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weather.innerText = `${data.weather[0].main}  ${parseInt(
        data.main.temp
      )}°`;
      city.innerText = `${data.name}`;
      icon.innerHTML = `<img src=${iconUrl} />`;
    });
}

function getGeoError() {
  alert("error!");
}

navigator.geolocation.getCurrentPosition(getGeo, getGeoError);
