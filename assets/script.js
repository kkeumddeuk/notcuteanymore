
document.querySelectorAll(".accordion-button").forEach((btn) => {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.classList.remove("active");
    });
    this.parentElement.classList.add("active");

    toggleBelowImage();
  });
});

// 좌측 카테고리 이미지 넣기
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
  // 필요한 카테고리 추가 가능합니다!
};

document.querySelectorAll(".accordion-panel").forEach((panel) => {
  const sliderImg = panel.querySelector(".slider-img");
  const prevBtn = panel.querySelector(".slider-prev");
  const nextBtn = panel.querySelector(".slider-next");
  if (!sliderImg) return; 
  const cat = sliderImg.dataset.category;
  const imgs = sliderImages[cat] || [];
  let idx = 0;

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
revealGalleryImages();
