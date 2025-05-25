// script.js

// Saudação dinâmica no console ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  console.log('Bem-vindo ao meu portfólio!');
});

// Scroll suave ao clicar em links internos
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
// script.js

// Saudação dinâmica no console ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  console.log('Bem-vindo ao meu portfólio!');
});

// Scroll suave ao clicar em links internos
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Alternar modo escuro/claro
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = '🌙 Modo Escuro';
  toggleBtn.style.position = 'fixed';
  toggleBtn.style.top = '10px';
  toggleBtn.style.right = '10px';
  toggleBtn.style.padding = '0.5rem 1rem';
  toggleBtn.style.zIndex = '1000';
  toggleBtn.style.cursor = 'pointer';

  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
    toggleBtn.textContent = document.body.classList.contains('modo-escuro') ? '☀️ Modo Claro' : '🌙 Modo Escuro';
  });
});


});
