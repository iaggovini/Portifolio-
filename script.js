// Saudação dinâmica no console ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  console.log('Bem-vindo ao meu portfólio!');

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

  
  });
;

document.addEventListener('DOMContentLoaded', () => {
  // Saudação
  console.log('Bem-vindo ao meu portfólio!');

  // Scroll suave
  const linksInternos = document.querySelectorAll('a[href^="#"]');
  linksInternos.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Botões de contato no rodapé
  const botoesContainer = document.getElementById('botoes-contato');

  const instagramBtn = document.createElement('button');
  instagramBtn.textContent = '📸 Instagram';
  instagramBtn.style.margin = '10px';
  instagramBtn.style.padding = '10px';
  instagramBtn.style.cursor = 'pointer';

  const instaImg = document.createElement('img');
  instaImg.src = 'https://cdn-icons-png.flaticon.com/512/174/174855.png'; // logo Instagram
  instaImg.alt = 'Instagram';
  instaImg.style.width = '24px';
  instaImg.style.height = '24px';
  instaImg.style.verticalAlign = 'middle';
  instaImg.style.marginRight = '8px';

  instagramBtn.addEventListener('click', () => {
    window.open('https://www.instagram.com/iaggovso', '_blank');
  });

  const whatsappBtn = document.createElement('button');
  whatsappBtn.textContent = '💬 WhatsApp';
  whatsappBtn.style.margin = '10px';
  whatsappBtn.style.padding = '10px';
  whatsappBtn.style.cursor = 'pointer';

  const whatsImg = document.createElement('img');
  whatsImg.src = 'https://cdn-icons-png.flaticon.com/512/733/733585.png'; // logo WhatsApp
  whatsImg.alt = 'WhatsApp';
  whatsImg.style.width = '24px';
  whatsImg.style.height = '24px';
  whatsImg.style.verticalAlign = 'middle';
  whatsImg.style.marginRight = '8px';


  whatsappBtn.addEventListener('click', () => {
    window.open('https://wa.me/86994271260', '_blank');
  });

  botoesContainer.appendChild(instagramBtn);
  botoesContainer.appendChild(whatsappBtn);

  
  
  });
;
