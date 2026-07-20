// Archivo: main.js

// Botones de WhatsApp con enlace codificado en base64 (data-wa)
// Usado en landings de servicios. NO eliminar.
document.querySelectorAll('button[data-wa]').forEach(btn => {
  btn.addEventListener('click', function() {
    const linkReal = atob(this.getAttribute('data-wa'));
    window.open(linkReal, '_blank', 'noopener,noreferrer');
  });
});

// Animaciones de aparición al hacer scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Tabs del catálogo (Servicios / Vehículos)
function switchTab(tab) {
  document.querySelectorAll('.catalog-panel').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.catalog-tab').forEach(t => t.classList.remove('active-tab'));
  const panel = document.getElementById('panel-' + tab);
  const button = document.getElementById('tab-' + tab);
  if (panel) panel.classList.remove('hidden');
  if (button) button.classList.add('active-tab');
}
window.switchTab = switchTab;
