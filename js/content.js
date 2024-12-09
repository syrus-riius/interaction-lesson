let contentArray = [
  {
    content: "Daejeon",
    backgroundImage: "url(./img/bg-daejeon.jpg)",
  },
  {
    content: "Berlin",
    backgroundImage: "url(./img/bg-berlin.avif)",
  },
  {
    content: "Taipei",
    backgroundImage: "url(./img/bg-taipei.avif)",
  },
  {
    content: "Santorini",
    backgroundImage: "url(./img/bg-santorini.jpg)",
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
    </div>`;

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

  dotsContainer.innerHTML += '<div class="dot"></div>';
});
