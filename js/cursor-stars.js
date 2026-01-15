// 🖤 空心爱心鼠标指针（电脑 + 手机稳定丝滑版）

/* ========== 1️⃣ 创建爱心 ========== */
const cursorHeart = document.createElement('div');
cursorHeart.textContent = '♡';
cursorHeart.style.position = 'fixed';
cursorHeart.style.left = '0px';
cursorHeart.style.top = '0px';
cursorHeart.style.fontSize = '28px'; // 更大更明显
cursorHeart.style.color = '#000';
cursorHeart.style.pointerEvents = 'none';
cursorHeart.style.zIndex = '9999';
cursorHeart.style.transition = 'color 0.15s linear';

document.body.appendChild(cursorHeart);

/* ========== 2️⃣ 缓动变量 ========== */
let mouseX = 0, mouseY = 0;
let heartX = 0, heartY = 0;
const offsetX = 10; // 根据字体大小调整
const offsetY = 10;

/* ========== 3️⃣ 鼠标 / 触摸事件更新目标位置 ========== */
// 电脑鼠标
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// 手机触摸
document.addEventListener(
  'touchmove',
  (e) => {
    const touch = e.touches[0];
    if (!touch) return;
    mouseX = touch.clientX;
    mouseY = touch.clientY;
  },
  { passive: true }
);

/* ========== 4️⃣ 平滑移动函数 ========== */
function animateCursor() {
  // 缓动追随
  heartX += (mouseX - heartX) * 0.2; // 0.2 控制追随速度，越小越慢
  heartY += (mouseY - heartY) * 0.2;

  cursorHeart.style.left = heartX - offsetX + 'px';
  cursorHeart.style.top = heartY - offsetY + 'px';

  requestAnimationFrame(animateCursor);
}

animateCursor();


/* ========== 3️⃣ 彩虹控制（统一管理） ========== */

let hue = 0;
let rainbowTimer = null;

// 触发彩虹爱心的元素：标题、链接、照片
const rainbowTargets = [
  ...document.querySelectorAll('.rainbow-title'),
  ...document.querySelectorAll('.tokki a'),
  ...document.querySelectorAll('.photo')
];

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
  rainbowTargets.forEach(el => {
    // 鼠标进入/离开
    el.addEventListener('mouseenter', startRainbow);
    el.addEventListener('mouseleave', stopRainbow);

    // 手机触屏
    el.addEventListener('touchstart', startRainbow);
    el.addEventListener('touchend', stopRainbow);
  });
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
