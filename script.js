// Tambahkan animasi saat scroll menggunakan IntersectionObserver (opsional)
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
  });
});
