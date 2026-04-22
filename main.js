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

function switchTab(tab) {
  document.querySelectorAll('.catalog-panel').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.catalog-tab').forEach(t => t.classList.remove('active-tab'));
  document.getElementById('panel-' + tab).classList.remove('hidden');
  document.getElementById('tab-' + tab).classList.add('active-tab');
}
window.switchTab = switchTab;
