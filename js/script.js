document.addEventListener("DOMContentLoaded", function () {
  Splitting();
});

// 헤더 영역 스크롤 이벤트
document.addEventListener("DOMContentLoaded", function () {
  let prevScrollTop = 0;

  document.addEventListener("scroll", function () {
    let nowScrollTop = window.scrollY;
    const header = document.querySelector("header");

    if (nowScrollTop > prevScrollTop) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
    prevScrollTop = nowScrollTop;
  });
});
