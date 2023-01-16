const API_KEY = '3f07b5e02082d9469be1165c540b8f09'; //openweater API KEY


function onGeoOk(position){
  const lat = position.coords.latitude; //위도
  const lng = position.coords.longitude; //경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then((data) => {
    const weather = document.querySelector('#weather span:first-child');
    const city = document.querySelector('#weather span:last-child');
    city.innerText = data.name 
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}
function onGeoError(){
  alert("Can't find you. No Weather for you.");
}

// 성공함수, 에러함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);