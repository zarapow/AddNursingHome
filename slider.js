document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.hero-slider img');
  const dots = document.querySelectorAll('.hero-dots .dot');
  let current = 0;
  let timer;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
    current = index;
  }

  function nextSlide() {
    let next = (current + 1) % images.length;
    showSlide(next);
  }

  timer = setInterval(nextSlide, 5000);

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      clearInterval(timer);
      timer = setInterval(nextSlide, 5000);
    });
  });

});
