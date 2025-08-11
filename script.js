// Wait DOM ready
document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    body.classList.toggle("light", savedTheme === "light");
    updateToggleIcon();
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light");
    localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
    updateToggleIcon();
  });

  function updateToggleIcon() {
    themeToggle.textContent = body.classList.contains("light") ? "🌙" : "☀️";
  }

  // Animated text effect on name
  const nameEl = document.getElementById("nameAnimated");
  const text = nameEl.textContent.trim();
  nameEl.textContent = "";
  for (let char of text) {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.opacity = "0";
    span.style.transition = "opacity 0.6s ease";
    nameEl.appendChild(span);
  }
  let i = 0;
  function fadeInLetters() {
    const spans = nameEl.querySelectorAll("span");
    if (i < spans.length) {
      spans[i].style.opacity = "1";
      i++;
      setTimeout(fadeInLetters, 80);
    }
  }
  fadeInLetters();

  // Reveal on scroll
  const reveals = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  reveals.forEach(el => observer.observe(el));

  // Tilt effect on project cards
  const cards = document.querySelectorAll("[data-tilt]");
  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;

      card.style.transform = `rotateX(${-dy * 8}deg) rotateY(${dx * 8}deg) scale(1.05)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
    card.addEventListener("focus", () => {
      card.style.transform = "rotateX(0) rotateY(0) scale(1.05)";
    });
    card.addEventListener("blur", () => {
      card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
  });

  // Contact form simulation
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", e => {
    e.preventDefault();

    if (!form.checkValidity()) {
      formMessage.textContent = "Merci de remplir correctement tous les champs.";
      formMessage.style.color = "crimson";
      return;
    }

    formMessage.textContent = "Envoi en cours...";
    formMessage.style.color = varGet("--accent1") || "#00f0ff";

    setTimeout(() => {
      formMessage.textContent = "Merci pour votre message, je vous répondrai bientôt !";
      formMessage.style.color = "limegreen";
      form.reset();
    }, 1800);
  });

  // Helper to get CSS var in JS
  function varGet(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // tsParticles init (background particles)
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: {
      color: "transparent",
    },
    particles: {
      number: {
        value: 45,
        density: { enable: true, area: 900 },
      },
      color: { value: "#8a6bff" },
      shape: { type: "circle" },
      opacity: { value: 0.25, random: false },
      size: { value: 4, random: true },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        outModes: { default: "bounce" },
      },
      links: {
        enable: true,
        distance: 180,
        color: "#6e4bff",
        opacity: 0.15,
        width: 1,
      },
    },
    detectRetina: true,
  });

  // Three.js mesh background
  initThreeMesh();

  function initThreeMesh() {
    const canvas = document.getElementById("meshCanvas");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 3;

    // Create geometry
    const geometry = new THREE.PlaneGeometry(6, 4, 20, 15);
    const material = new THREE.MeshBasicMaterial({
      color: 0x8a6bff,
      wireframe: true,
      opacity: 0.1,
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      let time = clock.getElapsedTime();
      for (let i = 0; i < geometry.attributes.position.count; i++) {
        let y = geometry.attributes.position.getY(i);
        geometry.attributes.position.setZ(i, Math.sin(i + time * 2) * 0.15);
      }
      geometry.attributes.position.needsUpdate = true;

      mesh.rotation.x = time * 0.12;
      mesh.rotation.y = time * 0.15;

      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
});

// Petite animation clic sur icônes socials
document.querySelectorAll('.socials a').forEach(el => {
  el.addEventListener('click', e => {
    e.currentTarget.style.transform = 'scale(0.85)';
    setTimeout(() => {
      e.currentTarget.style.transform = '';
    }, 150);
  });
});


window.addEventListener('load', () => {
  if (window.tsParticles) {
    tsParticles.load('tsparticles', {
      fpsLimit: 60,
      particles: {
        number: { value: 90, density: { enable: true, area: 1200 } },
        color: { value: ["#ffffff", "#ffeedd", "#aabbee"] },
        shape: { type: "circle" },
        opacity: { 
          value: 0.9, 
          random: { enable: true, minimumValue: 0.2 }, 
          animation: { enable: true, speed: 0.6, minimumValue: 0.2 } 
        },
        size: { value: { min: 0.6, max: 3.5 } },
        links: { enable: true, distance: 180, color: "#ffffff11", opacity: 0.18, width: 1 },
        move: { enable: true, speed: 0.4, random: true, straight: false, outModes: "out" }
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "repulse" },
          resize: true
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.35 } },
          repulse: { distance: 180, duration: 0.6 }
        }
      },
      detectRetina: true
    });
  }
});
