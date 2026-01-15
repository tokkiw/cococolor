/* =========================
   DOM 获取
========================= */

const photoWraps = document.querySelectorAll('.photo-wrap');
const photos = document.querySelectorAll('.photo');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');

/* =========================
   工具函数
========================= */

function random(min, max) {
  return Math.random() * (max - min) + min;
}

/* =========================
   照片堆叠效果
========================= */

function stackPhotos() {
  photoWraps.forEach(photo => {
    const x = random(-300, 300);
    const y = random(-200, 200);
    const r = random(-20, 20);

    photo.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
  });
}

function activateLayout() {
  document.body.classList.add('active');
  window.removeEventListener('mousemove', activateLayout);
}

photoWraps.forEach((photo, i) => {
  photo.style.transitionDelay = `${i * 40}ms`;
});

/* =========================
   点击放大 Overlay
========================= */

function bindPhotoClick() {
  photos.forEach(photo => {
    photo.addEventListener('click', () => {
      overlayImg.src = photo.src;
      overlay.classList.add('show');
    });
  });
}

function bindOverlayClose() {
  overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
  });
}

/* =========================
   初始化
========================= */

document.addEventListener('DOMContentLoaded', () => {
  stackPhotos();
  bindPhotoClick();
  bindOverlayClose();
  window.addEventListener('mousemove', activateLayout);
});
