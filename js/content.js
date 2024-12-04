let contentArray = [
  {
    content: "Deajeon",
    backgroundImage: "url(./img/bg-seoul.jpg)",
  },
  {
    content: "Tokyo",
    backgroundImage: "url(./img/bg-tokyo.jpg)",
  },
  {
    content: "New York",
    backgroundImage: "url(./img/bg-newyork.jpg)",
  },
  {
    content: "London",
    backgroundImage: "url(./img/bg-london.jpg)",
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
