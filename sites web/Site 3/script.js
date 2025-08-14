// Particules
particlesJS('particles-js', {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 1000 } },
    color: { value: ['#00f5ff', '#00ff73'] },
    shape: { type: 'circle' },
    opacity: { value: 0.8, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.2, width: 1 },
    move: { enable: true, speed: 1.5, random: true }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' } },
    modes: { grab: { distance: 150, line_linked: { opacity: 0.5 } }, push: { particles_nb: 4 } }
  },
  retina_detect: true
});


const menuBtn = document.getElementById('menu-btn');
const menuOverlay = document.getElementById('menu-overlay');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menuOverlay.classList.toggle('active');
});

// Fermer le menu au clic sur un lien
document.querySelectorAll('.menu-overlay a').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    menuOverlay.classList.remove('active');
  });
});


// Effet machine à écrire
const text = "Bienvenue dans notre store de tech 🚀";
let index = 0;
function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 80);
    }
}
typeWriter();


// Halo lumineux souris
document.addEventListener('mousemove', e => {
  const light = document.getElementById('mouse-light');
  light.style.left = e.clientX + 'px';
  light.style.top = e.clientY + 'px';
});

// Animations au scroll
const elements = document.querySelectorAll('[data-animate]');
function animateOnScroll() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

// Produits auto-générés
const smartphones = [
  { nom: "Samsung A16 5G", prix: "1.799 DH", image: "assets/Smartphones/samsung_a16.webp" },
  { nom: "Redmi Note 14", prix: "1.949 DH", image: "assets/Smartphones/redmi_note_14.jpg" },
  { nom: "Redmi 14c", prix: "1.459 DH", image: "assets/Smartphones/redmi_14c.jpg" },
  { nom: "Redmi Note 14 Pro 5G", prix: "3.199 DH", image: "assets/Smartphones/redmi_note_14_pro_5g.jfif" },
  { nom: "Samsung A06", prix: "1.199 DH", image: "assets/Smartphones/samsung_a06.jfif" },
  { nom: "Samsung A26 5G", prix: "2.899 DH", image: "assets/Smartphones/samsung_a26_5G.jpg" },
  { nom: "Samsung A56 5G", prix: "4.199 DH", image: "assets/Smartphones/samsung_a56_5G.jfif" }
];
const containerS = document.getElementById('smartphones-container');
smartphones.forEach(p => {
  const card = document.createElement('div');
  card.className = 'produit-card';
  card.innerHTML = `
    <img src="${p.image}" alt="${p.nom}">
    <h3>${p.nom}</h3>
    <p>${p.prix}</p>
    <a id="commander" href="#contact" class="btn">Commander</a>
  `;
  containerS.appendChild(card);
});

const pc = [
  { nom: "HP EliteBook 840 G5 Core i5 8th I 8Go I 256 Go SSD", prix: "3.199 DH", image: "assets/PC/HP-Elitebook-840-G5.jpg" },
  { nom: "Dell Latitude 5400 Core i5 8th I 8Go I 256 Go SSD ", prix: "2.999 DH", image: "assets/PC/dell-latitude-5400-i5-de-8eme-512-go-ssd-dell-5400-1.jpg" },
  { nom: "Lenovo ThinkPad T480s Intel Core i5 8ème Gen ", prix: "2.899 DH", image: "assets/PC/3_79782527-4a0e-4a0a-806d-5fe7cbaa7589.webp" }
];
const containerP = document.getElementById('pc-container');
pc.forEach(p => {
  const card = document.createElement('div');
  card.className = 'produit-card';
  card.innerHTML = `
    <img src="${p.image}" alt="${p.nom}">
    <h3>${p.nom}</h3>
    <p>${p.prix}</p>
    <a href="#contact" class="btn">Commander</a>
  `;
  containerP.appendChild(card);
});


const accessoires = [
  { nom: "MSI SOURIS GAMING FORGE GM100 NOIR MSI", prix: "129 DH", image: "assets/Accessoires/Souris_gaming.png" },
  { nom: "JBL CASQUE T520BT BLUE JBL", prix: "549 DH", image: "assets/Accessoires/casque_jbl.jpg" },
  { nom: "ORAIMO TWS RIFFOEB-E02D BK ORAIMO", prix: "299 DH", image: "assets/Accessoires/ecouteurs_oraimo.png" },
  { nom: "ENERGY SISTEM ECOUTEURS EASYPODS TYPE C SPACE", prix: "99 DH", image: "assets/Accessoires/ecouteurs_cable.png" }
];
const containerA = document.getElementById('accessoires-container');
accessoires.forEach(p => {
  const card = document.createElement('div');
  card.className = 'produit-card';
  card.innerHTML = `
    <img src="${p.image}" alt="${p.nom}">
    <h3>${p.nom}</h3>
    <p>${p.prix}</p>
    <a href="#contact" class="btn">Commander</a>
  `;
  containerA.appendChild(card);
});


const services = [
  { nom: "Formattage"},
  { nom: "Réparation et Maintenance" }
];
const containerSe = document.getElementById('services-container');
services.forEach(p => {
  const card = document.createElement('div');
  card.className = 'produit-card';
  card.innerHTML = `
    <h3>${p.nom}</h3>
    <a href="#contact" class="btn">Commander</a>
  `;
  containerSe.appendChild(card);
});




