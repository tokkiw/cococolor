// 🖤 空心爱心鼠标指针（稳定版）

// 1️⃣ 创建爱心
const cursorHeart = document.createElement('div');
cursorHeart.textContent = '♡';
cursorHeart.style.position = 'fixed';
cursorHeart.style.left = '0px';
cursorHeart.style.top = '0px';
cursorHeart.style.fontSize = '18px';
cursorHeart.style.color = '#000';
cursorHeart.style.pointerEvents = 'none';
cursorHeart.style.zIndex = '9999';
cursorHeart.style.transition = 'color 0.2s linear';

document.body.appendChild(cursorHeart);

// 2️⃣ 跟随鼠标
document.addEventListener('mousemove', (e) => {
  const offsetX = 6;
  const offsetY = 6;
  cursorHeart.style.left = e.clientX - offsetX + 'px';
  cursorHeart.style.top = e.clientY - offsetY + 'px';
});

// 3️⃣ 彩虹控制变量
let hue = 0;
let rainbowTimer = null;

// 4️⃣ DOM 加载完成后再绑定链接事件
document.addEventListener('DOMContentLoaded', () => {
  const tokkiLink = document.querySelector('.tokki a');
  if (!tokkiLink) return;

  // 移入链接 → 彩虹爱心
  tokkiLink.addEventListener('mouseenter', () => {
    if (rainbowTimer) return; // 防止重复开启

    rainbowTimer = setInterval(() => {
      hue = (hue + 12) % 360;
      cursorHeart.style.color = `hsl(${hue}, 90%, 60%)`;
    }, 30);
  });

  // 移出链接 → 黑色爱心
  tokkiLink.addEventListener('mouseleave', () => {
    clearInterval(rainbowTimer);
    rainbowTimer = null;
    cursorHeart.style.color = '#000';
  });
});

const rainbowTitle = document.querySelector('.rainbow-title');

if (rainbowTitle) {
  rainbowTitle.addEventListener('mouseenter', () => {
    rainbowTimer = setInterval(() => {
      hue = (hue + 12) % 360;
      cursorHeart.style.color = `hsl(${hue}, 90%, 60%)`;
    }, 30);
  });

  rainbowTitle.addEventListener('mouseleave', () => {
    clearInterval(rainbowTimer);
    rainbowTimer = null;
    cursorHeart.style.color = '#000'; // 回到黑色
  });
}
