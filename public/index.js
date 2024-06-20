(function () {
  'use strict';

  // src/script.js
  let lastScrollTop = 0;
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navMenu.style.display = 'none';
    } else {
      navMenu.style.display = 'flex';
    }

    lastScrollTop = scrollTop;
  });

  // 獲取圖片容器和所有圖片元素
  const photoGallery = document.querySelector('.photo-gallery');
  const images = photoGallery.querySelectorAll('img');

  // 設置初始位置索引
  let currentIndex = 0;

  // 監聽左右滑動事件
  photoGallery.addEventListener('click', (event) => {
    const direction = event.clientX > window.innerWidth / 2 ? 1 : -1; // 判斷點擊位置，右邊為 1，左邊為 -1

    // 計算下一個圖片的索引
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) {
      nextIndex = images.length - 1; // 如果是第一個圖片，則滑到最後一張
    } else if (nextIndex >= images.length) {
      nextIndex = 0; // 如果是最後一個圖片，則滑到第一張
    }

    // 計算圖片偏移量並應用 transform 屬性
    const offset = -nextIndex * images[0].offsetWidth;
    photoGallery.style.transform = `translateX(${offset}px)`;

    // 更新當前索引
    currentIndex = nextIndex;
  });

})();
