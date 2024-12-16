

// key 239c004f73eeec19c5b2ac6718757e13

// https://api.openweathermap.org/data/2.5/weather?q=Daejeon&appid=239c004f73eeec19c5b2ac6718757e13

// fetch('https://api.openweathermap.org/data/2.5/weather?q=Daejeon&appid=239c004f73eeec19c5b2ac6718757e13');

let weatherValue
// https://openweathermap.org/img/wn/${response.weather[0]}@2x.png
async function fetchMeather(cityName, index, timeAdjust) { // async 함수
   let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=239c004f73eeec19c5b2ac6718757e13`)
  response = await result.json()
  let weatherValue = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
  document.querySelector(`.weather${index}`).innerHTML = `<img src=${weatherValue}>`
  
  let timeValue = new Date()
  let hours = ('0' + (timeValue.getHours() + timeAdjust)).slice(-2)
  let minutes = ('0' + timeValue.getMinutes()).slice(-2)
  
  let time = `${hours}:${minutes}`
  document.querySelector(`.time${index}`).innerHTML = time
}
  fetchMeather()
let contentArray = [
  {
    content: "Daejeon",
    backgroundImage: "url(./img/bg-daejeon.jpg)",
    timeAdjust: 0,
  },
  {
    content: "Berlin",
    backgroundImage: "url(./img/bg-berlin.avif)",
    timeAdjust: -8,
  },
  {
    content: "Taipei",
    backgroundImage: "url(./img/bg-taipei.avif)",
    timeAdjust: -1,
  },
  {
    content: "Athens",
    backgroundImage: "url(./img/bg_athens.jpeg)",
    timeAdjust: -7,
  },
];

// innerHTML을 이용해서 각각의 슬라이드를 fullpage-container에 넣어주기
// 슬라이드의 내용을 배열로 저장을 했음.
// 그러면 배열의 반복문을 이용해서 각각의 슬라이드를 innerHTML로 넣어주면 됨.


let slideContainer = document.querySelector(".fullpage-container");
let dotsContainer = document.querySelector(".dots-container");

contentArray.forEach((item, index) => {
  slideContainer.innerHTML += `<div class="slide"
    id="slide${index}">
    <div class="city-name${index}">${item.content}</div>
    <div class="weather${index}"></div>
    <div class="time${index}"></div>
    </div>`;

    fetchMeather(item.content, index, item.timeAdjust)

  let slideStyle = {
    backgroundImage: item.backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    backgroundBlendMode: "darken",
  };

  let slide = document.querySelector(`#slide${index}`);
  Object.assign(slide.style, slideStyle);

  // 도시 이름 스타일
  let cityNameStyle = {
    position: "absolute",
    top: "10%",
    left: "10%",
    color: "#fff",
    fontSize: "3rem",
    fontWeight: "bold",
  };


  let cityName = document.querySelector(`.city-name${index}`);
  Object.assign(cityName.style, cityNameStyle);

  // 날씨 스타일 
  let weatherStyle = {
    position: "absolute",
    top: "8%",
    right: "10%",
    color: "#fff",
    fontSize: "2rem",
    fontWeight: "bold",
  };

  let weather = document.querySelector(`.weather${index}`);
  Object.assign(weather.style, weatherStyle);


  // 날씨 스타일 
  let timeStyle = {
    position: "absolute",
    top: "12%",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#fff",
    fontSize: "2rem",
    fontWeight: "bold",
  };

  let timeText = document.querySelector(`.time${index}`);
  Object.assign(timeText.style, timeStyle);

  dotsContainer.innerHTML += '<div class="dot"></div>';
});
