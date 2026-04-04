// Archivo: main.js
document.querySelectorAll('button[data-wa]').forEach(btn => {
  btn.addEventListener('click', function() {
    const linkReal = atob(this.getAttribute('data-wa'));
    window.open(linkReal, '_blank', 'noopener,noreferrer');
  });
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));
