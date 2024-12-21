document.addEventListener('DOMContentLoaded', function() {
    // スライドショー機能
    const heroSlider = document.querySelector('.hero-slider');
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
  
    function switchSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      heroSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    setInterval(switchSlide, 5000); // 5秒ごとにスライド切替
  
    // 「私たちの強み」アニメーション（Intersection Observer）
    const strengthItems = document.querySelectorAll('.strength-item');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inview');
        }
      });
    }, {threshold: 0.1});
  
    strengthItems.forEach(item => {
      observer.observe(item);
    });
  
    // スムーススクロール（必要に応じて）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
          e.preventDefault();
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            window.scrollTo({
              top: targetEl.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  });
  