// 🖤 空心爱心鼠标指针（电脑 + 手机稳定版）

/* ========== 1️⃣ 创建爱心 ========== */
const cursorHeart = document.createElement('div');
cursorHeart.textContent = '♡';
cursorHeart.style.position = 'fixed';
cursorHeart.style.left = '0px';
cursorHeart.style.top = '0px';
cursorHeart.style.fontSize = '18px';
cursorHeart.style.color = '#000';
cursorHeart.style.pointerEvents = 'none';
cursorHeart.style.zIndex = '9999';
cursorHeart.style.transition = 'color 0.15s linear';

document.body.appendChild(cursorHeart);

const offsetX = 6;
const offsetY = 6;

/* ========== 2️⃣ 跟随位置（电脑 + 手机） ========== */

// 🖱️ 电脑
document.addEventListener('mousemove', (e) => {
  cursorHeart.style.left = e.clientX - offsetX + 'px';
  cursorHeart.style.top = e.clientY - offsetY + 'px';
});

// 📱 手机
document.addEventListener(
  'touchmove',
  (e) => {
    const touch = e.touches[0];
    if (!touch) return;

    cursorHeart.style.left = touch.clientX - offsetX + 'px';
    cursorHeart.style.top = touch.clientY - offsetY + 'px';
  },
  { passive: true }
);

/* ========== 3️⃣ 彩虹控制（统一管理） ========== */

let hue = 0;
let rainbowTimer = null;

function startRainbow() {
  if (rainbowTimer) return;

  rainbowTimer = setInterval(() => {
    hue = (hue + 16) % 360; // 🌈 速度更快
    cursorHeart.style.color = `hsl(${hue}, 90%, 60%)`;
  }, 20);
}

function stopRainbow() {
  clearInterval(rainbowTimer);
  rainbowTimer = null;
  cursorHeart.style.color = '#000';
}

/* ========== 4️⃣ DOM 加载完成后绑定触发区域 ========== */

document.addEventListener('DOMContentLoaded', () => {
  const tokkiLink = document.querySelector('.tokki a');
  const rainbowTitle = document.querySelector('.rainbow-title');

  // tokki 链接
  if (tokkiLink) {
    tokkiLink.addEventListener('mouseenter', startRainbow);
    tokkiLink.addEventListener('mouseleave', stopRainbow);

    // 📱 手机点按
    tokkiLink.addEventListener('touchstart', startRainbow);
    tokkiLink.addEventListener('touchend', stopRainbow);
  }

  // 标题（只影响鼠标，不改文字颜色）
  if (rainbowTitle) {
    rainbowTitle.addEventListener('mouseenter', startRainbow);
    rainbowTitle.addEventListener('mouseleave', stopRainbow);
  }
});

/* ========== popup ========== */
document.addEventListener('DOMContentLoaded', () => {
  const tokkiLink = document.querySelector('.tokki a');
  const tokkiModal = document.getElementById('tokki-modal');

  if (!tokkiLink || !tokkiModal) return;

  // 点击链接 → 打开
  tokkiLink.addEventListener('click', (e) => {
    e.preventDefault(); // 阻止跳转 Instagram
    tokkiModal.classList.add('show');
  });

  // 点击遮罩 → 关闭
  tokkiModal.addEventListener('click', () => {
    tokkiModal.classList.remove('show');
  });
});
