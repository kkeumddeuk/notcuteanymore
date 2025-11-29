// 1. 아코디언 자체만 열고 닫기
// document.querySelectorAll(".accordion-button").forEach((btn) => {
//   btn.addEventListener("click", function () {
//     this.parentElement.classList.toggle("active");
//     toggleBelowImage(); // ← 이 한 줄만 추가!
//   });
// });

document.querySelectorAll(".accordion-button").forEach((btn) => {
  btn.addEventListener("click", function () {
    // 1. 모든 아코디언 아이템 닫기
    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.classList.remove("active");
    });
    // 2. 클릭한 아이템만 열기 (toggle 방식이면 .add로 변경)
    this.parentElement.classList.add("active");

    // 3. 아래 이미지 제어 등 추가 로직도 여기서 호출
    toggleBelowImage();
  });
});

// 카테고리별 이미지 배열
const sliderImages = {
  YUNAH: [
    "./assets/images/yunah2.jpeg",
    "./assets/images/yunah1.jpeg",
    "./assets/images/yunah3.jpeg",
  ],
  MINJU: [
    "./assets/images/MINJU3.jpeg",
    "./assets/images/MINJU1.jpeg",
    "./assets/images/MINJU2.jpeg",
  ],
  MOKA: [
    "./assets/images/MOKA3.jpeg",
    "./assets/images/MOKA1.jpeg",
    "./assets/images/MOKA2.jpeg",
  ],
  WONHEE: [
    "./assets/images/wonhee1.jpeg",
    "./assets/images/wonhee2.jpeg",
    "./assets/images/wonhee3.jpeg",
  ],
  IROHA: [
    "./assets/images/IROHA1.jpeg",
    "./assets/images/IROHA2.jpeg",
    "./assets/images/IROHA3.jpeg",
  ],
  // 필요한 카테고리 추가
};

// 2. 슬라이더 기능은 별도로 각 패널마다 한번만 바인딩
document.querySelectorAll(".accordion-panel").forEach((panel) => {
  const sliderImg = panel.querySelector(".slider-img");
  const prevBtn = panel.querySelector(".slider-prev");
  const nextBtn = panel.querySelector(".slider-next");
  if (!sliderImg) return; // 슬라이더 없는 경우 무시
  const cat = sliderImg.dataset.category;
  const imgs = sliderImages[cat] || [];
  let idx = 0;

  // 초기 이미지 세팅
  sliderImg.src = imgs[idx] || "";

  prevBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    idx = (idx - 1 + imgs.length) % imgs.length;
    sliderImg.src = imgs[idx];
  });
  nextBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    idx = (idx + 1) % imgs.length;
    sliderImg.src = imgs[idx];
  });
});

function revealGalleryImages() {
  const imgs = document.querySelectorAll(".gallery-grid img");
  imgs.forEach((img) => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      img.classList.add("visible");
    } else {
      img.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", revealGalleryImages);
// 최초 실행
revealGalleryImages();
