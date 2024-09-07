(function () {
  'use strict';

  // src/script.js
  window.addEventListener('scroll', () => {
    let lastScrollTop = 0;
    const navMenu = document.getElementById('nav-menu');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const screenWidth = window.innerWidth;

    // 只在寬度大於 768px 時生效
    if (screenWidth > 768) {
      if (scrollTop > lastScrollTop) {
        navMenu.style.display = 'none'; // 向下滾動隱藏
      } else {
        navMenu.style.display = 'flex'; // 向上滾動顯示
      }
    } else {
      navMenu.style.display = 'none'; // 確保手機版時 nav-menu 隱藏
    }

    lastScrollTop = scrollTop;
  });

  // src/another.js
  document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelector('.photo-gallery').children;
    const totalSlides = slides.length;

    // 更新滑動器，應用新的變換值
    function updateSlider() {
      const newTransformValue = `-${currentIndex * 100}%`; // 計算新的位置
      document.querySelector('.photo-gallery').style.transform = `translateX(${newTransformValue})`; // 應用 CSS 變換
    }

    // 更改幻燈片函數，根據點擊方向改變索引
    function changeSlide(direction) {
      currentIndex += direction;

      if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // 返回到最後一張
      } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // 返回到第一張
      }

      updateSlider(); // 更新滑動
    }

    document.querySelector('.slide-left').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.slide-right').addEventListener('click', () => changeSlide(1));

    updateSlider(); // 初始化調用，設置滑動效果
  });

  // src/another.js
  document.addEventListener('DOMContentLoaded', () => {
    // 獲取所有卡片元素和圖片元素
    const card1 = document.querySelector('.card1');
    const card2 = document.querySelector('.card2');
    const card3 = document.querySelector('.card3');
    const defaultImage = document.querySelector('.default-image');
    const image2 = document.querySelector('.image2');
    const image3 = document.querySelector('.image3');

    // 預設圖片顯示（旅遊）
    function showDefaultImage() {
      defaultImage.style.display = 'block';
      image2.style.display = 'none';
      image3.style.display = 'none';
    }

    // 當鼠標移到"拍照"區塊時顯示第二張圖片
    card2.addEventListener('mouseenter', () => {
      defaultImage.style.display = 'none';
      image2.style.display = 'block';
      image3.style.display = 'none';
    });

    // 當鼠標移到"隨筆"區塊時顯示第三張圖片
    card3.addEventListener('mouseenter', () => {
      defaultImage.style.display = 'none';
      image2.style.display = 'none';
      image3.style.display = 'block';
    });

    // 當鼠標移回"旅遊"區塊時，顯示預設的第一張圖片
    card1.addEventListener('mouseenter', showDefaultImage);

    // 當鼠標離開任何區塊時，恢復為預設的第一張圖片
    card1.addEventListener('mouseleave', showDefaultImage);
    card2.addEventListener('mouseleave', showDefaultImage);
    card3.addEventListener('mouseleave', showDefaultImage);
  });

  // src/another.js
  document.addEventListener('DOMContentLoaded', () => {
    // 取得必要的元素
    const burgerMenu = document.getElementById('burger-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const closeBtn = document.getElementById('close-btn');
    const menuLinks = document.querySelectorAll('.menu-link');

    // 點擊burger-menu，顯示側邊菜單
    burgerMenu.addEventListener('click', () => {
      menuOverlay.style.transform = 'translateX(0)';
    });

    // 點擊關閉按鈕或鏈接，關閉側邊菜單
    closeBtn.addEventListener('click', () => {
      menuOverlay.style.transform = 'translateX(100%)';
    });

    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        // menuOverlay.style.transform = 'translateX(100%)';
      });
    });
  });

})();
