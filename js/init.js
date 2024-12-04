// 선택자
const slide = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// 스위치
let isScrolling = false;

// 슬라이드 숫자 담을 변수
let currentSlide = 0;

dots[currentSlide].classList.add("active");
slide[currentSlide].classList.add("active");

// 점 클릭 이벤트
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    scrollSlide(index);
  });
});

// Wheel 이벤트
window.addEventListener(
  "wheel",
  (e) => {
    // 작동방지
    e.preventDefault();

    if (e.deltaY > 0) {
      scrollSlide("down");
    } else {
      scrollSlide("up");
    }
  },
  { passive: false }
);

// Keydown 이벤트
window.addEventListener("keydown", (e) => {
  console.log(e.key);

  // 작동방지
  e.preventDefault();
  // 키보드 위 방향키를 누르면 -> up  "ArrowUp"
  // 키보드 아래 방향키를 누르면 -> down  "ArrowDown"

  if (e.key == "ArrowUp") {
    scrollSlide("up");
  } else if (e.key == "ArrowDown") {
    scrollSlide("down");
  }
});
