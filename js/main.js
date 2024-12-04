// 슬라이드 이동 함수
function scrollSlide(direction) {
  if (isScrolling === false) {
    isScrolling = true;

    dots[currentSlide].classList.remove("active");
    slide[currentSlide].classList.remove("active");

    if (direction === "down" && currentSlide < slide.length - 1) {
      currentSlide++;
    } else if (direction === "up" && currentSlide > 0) {
      currentSlide--;
    } else if (typeof direction === "number") {
      currentSlide = direction;
    }

    slide[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");

    // slide[currentSlide].scrollIntoView({
    //   behavior: "smooth",
    // });

    setTimeout(() => {
      isScrolling = false;
    }, 1050);
  }
}
