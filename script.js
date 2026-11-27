
/* =========================================
   1. PROFILE CONFIGURATION
========================================= */

const profile = {
  name: "Rizki Ananda Pratama",
  role: "Web Developer & Creative Enthusiast",
  tagline: "Saya senang membangun pengalaman digital yang kreatif, fungsional, dan menarik.",
  image: "assets/profile.jpg",

  about: "Halo! Saya Rizki Ananda Pratama. Saya memiliki ketertarikan pada teknologi informasi, pengembangan website, desain digital, dan berbagai hal yang berkaitan dengan dunia teknologi. Saya senang mempelajari hal baru, mengeksplorasi ide kreatif, serta mengembangkan kemampuan melalui berbagai proyek."
};


/* =========================================
   2. SKILLS CONFIGURATION
========================================= */

const skills = [
  { name: "HTML", description: "Web Structure", icon: "html" },
  { name: "CSS", description: "Web Styling", icon: "css" },
  { name: "JavaScript", description: "Web Interaction", icon: "javascript" },
  { name: "Google Apps Script", description: "Web Automation", icon: "google" },
  { name: "UI Design", description: "Interface Design", icon: "figma" },
  { name: "Microsoft Office", description: "Productivity Tools", icon: "microsoft" },
  { name: "Networking", description: "Computer Network", icon: "network" },
  { name: "Problem Solving", description: "Analytical Thinking", icon: "code" }
];


/* =========================================
   3. PROJECTS CONFIGURATION
========================================= */

const projects = [
  {
    title: "RANKING SORDER",
    category: "Web Development",
    description: "Website penghitung ranking berbasis browser yang mengolah input data dan skor secara real-time untuk menghasilkan urutan peringkat secara otomatis.",
    image: "assets/project-1.png",
    url: "https://rankingsorder.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "VISION+ CLONE",
    category: "Application",
    description: "Aplikasi web streaming bergaya platform OTT yang mereplikasi pengalaman menonton siaran langsung TV, serial on-demand, film, dan tayangan olahraga dalam satu antarmuka responsif.",
    image: "assets/project-2.png",
    url: "https://akunsekolah2025-art.github.io/visionplus-clone/",
    technologies: ["Apps", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "VIBIFY",
    category: "Web Development",
    description: "Vibify — Platform streaming musik berbasis web bergaya Spotify untuk menjelajahi katalog lagu, memutar playlist favorit, dan menikmati audio dengan antarmuka modern yang ringan.",
    image: "assets/project-3.png",
    url: "https://example.com",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "SISTEM MANAJEMEN DATA",
    category: "Web Development",
    description: "Platform administrasi sekolah berbasis web untuk mencatat, memantau, dan mengekspor data akademik maupun kepegawaian secara rapi, aman, dan terpusat.",
    image: "assets/project-4.png",
    url: "https://example.com",
    technologies: ["GoogleSheet", "GoogleAppscript", "JavaScript"]
  }
];


/* =========================================
   4. CONTACT CONFIGURATION
========================================= */

const contact = [
  {
    name: "Email",
    value: "rizkianandapratamaa@gmail.com",
    url: "mailto:rizkianandapratamaa@gmail.com",
    icon: "mail"
  },
  {
    name: "LinkedIn",
    value: "LinkedIn Profile",
    url: "https://www.linkedin.com/",
    icon: "linkedin"
  },
  {
    name: "GitHub",
    value: "Rizki Ananda",
    url: "https://github.com/akunsekolah2025-art",
    icon: "github"
  },
  {
    name: "Instagram",
    value: "@username",
    url: "https://www.instagram.com/",
    icon: "instagram"
  },
  {
    name: "Facebook",
    value: "Rizki Ananda",
    url: "https://www.facebook.com/share/14yhYdb2cfi/",
    icon: "facebook"
  },
  {
    name: "WhatsApp",
    value: "0822-8797-1720",
    url: "https://wa.me/6282287971720",
    icon: "whatsapp"
  }
];


/* =========================================
   5. WEBSITE SETTINGS
========================================= */

const settings = {
  defaultTheme: "light",
  enableScrollAnimation: true
};


/* =========================================
   6. HELPER FUNCTIONS
========================================= */

function getElement(id) {
  return document.getElementById(id);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function safeURL(value) {
  try {
    const parsed = new URL(value, window.location.href);
    const allowed = ["http:", "https:", "mailto:", "tel:"];
    return allowed.includes(parsed.protocol) ? parsed.href : "#";
  } catch {
    return "#";
  }
}


/* =========================================
   7. SVG ICON LIBRARY
========================================= */

const iconLibrary = {
  html: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#E44D26" d="M3 2h18l-1.64 18.5L12 22l-7.36-1.5L3 2z"/>
      <path fill="#F16529" d="M12 20.4l5.95-1.22L19.3 4H12v16.4z"/>
      <path fill="#fff" d="M12 6H7l.3 2.2H12V6zm0 4.4H7.7l.3 2.2H12v-2.2zm0 4.4h-2l-.2-1.4H7.5l.5 3.5 4 1v-3.1z"/>
      <path fill="#fff" d="M12 6v2.2h4.5l-.2 2.2H12v2.2h4.1l-.3 3-3.8 1v2.3l6-1.5L19.3 6H12z"/>
    </svg>
  `,

  css: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1572B6" d="M3 2h18l-1.64 18.5L12 22l-7.36-1.5L3 2z"/>
      <path fill="#33A9DC" d="M12 20.4l5.95-1.22L19.3 4H12v16.4z"/>
      <path fill="#fff" d="M7 6h12l-.3 2.2H9.5l.2 2.2h8.8l-.7 7-5.8 1.3-5.8-1.3-.3-3.5h2.3l.2 1.7 3.6.7 3.5-.7.3-3H8.5L7 6z"/>
    </svg>
  `,

  javascript: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
      <path fill="#111" d="M13.5 18.2c.5.8 1.1 1.3 2.2 1.3.9 0 1.5-.4 1.5-1 0-.7-.6-1-1.7-1.5l-.6-.3c-1.7-.7-2.8-1.6-2.8-3.4 0-1.7 1.3-3 3.4-3 1.5 0 2.6.5 3.4 1.9l-1.8 1.2c-.4-.7-.8-1-1.6-1-.7 0-1.1.4-1.1.9 0 .6.4.9 1.4 1.3l.6.3c2 .9 3.1 1.7 3.1 3.5 0 2-1.6 3.1-3.8 3.1-2.1 0-3.4-1-4.1-2.3l1.9-1.1zM5.5 18.4c.4.7.8 1.2 1.6 1.2.7 0 1.1-.3 1.1-1.5v-7.7h2.4v7.7c0 2.5-1.4 3.6-3.4 3.6-1.8 0-2.9-.9-3.5-2.1l1.8-1.2z"/>
    </svg>
  `,

  google: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.8 3-4.3 3-7.3z"/>
      <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.5l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.2H3.1v2.6A10 10 0 0 0 12 22z"/>
      <path fill="#FBBC05" d="M6.4 13.8a6 6 0 0 1 0-3.6V7.6H3.1a10 10 0 0 0 0 8.8l3.3-2.6z"/>
      <path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9A9.7 9.7 0 0 0 12 2a10 10 0 0 0-8.9 5.6l3.3 2.6c.8-2.5 3-4.3 5.6-4.3z"/>
    </svg>
  `,

  figma: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#F24E1E" d="M12 12H7a3 3 0 1 1 0-6h5v6z"/>
      <path fill="#FF7262" d="M12 18a3 3 0 0 1-3-3V9h3v9z"/>
      <path fill="#A259FF" d="M12 6h5a3 3 0 1 1 0 6h-5V6z"/>
      <path fill="#1ABCFE" d="M12 12h5a3 3 0 1 1-3 3v-3h-2z"/>
      <path fill="#0ACF83" d="M7 12h5v3a3 3 0 1 1-5-3z"/>
    </svg>
  `,

  microsoft: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#F35325" d="M2 2h9v9H2z"/>
      <path fill="#81BC06" d="M13 2h9v9h-9z"/>
      <path fill="#05A6F0" d="M2 13h9v9H2z"/>
      <path fill="#FFBA08" d="M13 13h9v9h-9z"/>
    </svg>
  `,

  network: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M12 7v5M6 17l6-5 6 5"/>
        <rect x="8.5" y="2.5" width="7" height="5" rx="1.5"/>
        <rect x="2.5" y="16" width="7" height="5" rx="1.5"/>
        <rect x="14.5" y="16" width="7" height="5" rx="1.5"/>
      </g>
    </svg>
  `,

  code: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m8 17-5-5 5-5M16 7l5 5-5 5M14 4l-4 16"/>
      </g>
    </svg>
  `,

  mail: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/>
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#0A66C2" d="M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2zM8 18H5V9h3v9zM6.5 7.8a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM19 18h-3v-4.4c0-2.6-3-2.4-3 0V18h-3V9h3v1.4c1.4-2.5 6-2.7 6 2.4V18z"/>
    </svg>
  `,

  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.2 3.7 1.5.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9z"/>
    </svg>
  `,

  instagram: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="instagramGradient" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stop-color="#FEDA75"/>
          <stop offset="50%" stop-color="#DD2A7B"/>
          <stop offset="100%" stop-color="#8134AF"/>
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="url(#instagramGradient)" stroke-width="2"/>
      <circle cx="12" cy="12" r="4" fill="none" stroke="#DD2A7B" stroke-width="2"/>
      <circle cx="17.5" cy="6.8" r="1.2" fill="#8134AF"/>
    </svg>
  `,

  facebook: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1877F2" d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.3c0-3 1.8-4.7 4.5-4.7 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-2 .9-2 1.9V12H17l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z"/>
    </svg>
  `,

  whatsapp: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#25D366" d="M12 2a9.9 9.9 0 0 0-8.5 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2z"/>
      <path fill="#fff" d="M17.5 14.5c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.5-.7-2.5-1.3-3.5-3-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5s-.6-1.5-.8-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.3s1 2.6 1.1 2.8c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.5z"/>
    </svg>
  `
};

function getIcon(name) {
  return iconLibrary[name] || iconLibrary.code;
}


/* =========================================
   8. RENDER PROFILE
========================================= */

function renderProfile() {
  const heroName = getElement("heroName");
  const heroRole = getElement("heroRole");
  const heroTagline = getElement("heroTagline");
  const aboutName = getElement("aboutName");
  const aboutDescription = getElement("aboutDescription");
  const profileImage = getElement("profileImage");
  const footerName = getElement("footerName");

  if (heroName) {
    heroName.innerHTML = `${escapeHTML(profile.name)}<span>.</span>`;
  }

  if (heroRole) heroRole.textContent = profile.role;
  if (heroTagline) heroTagline.textContent = profile.tagline;
  if (aboutName) aboutName.textContent = profile.name;
  if (aboutDescription) aboutDescription.textContent = profile.about;
  if (footerName) footerName.textContent = profile.name;

  if (profileImage) {
    profileImage.src = profile.image;

    profileImage.addEventListener("error", function () {
      this.style.display = "none";

      const frame = this.parentElement;

      if (!frame.querySelector(".image-fallback")) {
        const fallback = document.createElement("div");
        fallback.className = "image-fallback";
        fallback.textContent = "Foto Profil";

        fallback.style.cssText = `
          height: 100%;
          display: grid;
          place-items: center;
          font-weight: 800;
          color: var(--text);
          background: var(--surface-soft);
          border-radius: 12px;
        `;

        frame.appendChild(fallback);
      }
    }, { once: true });
  }
}


/* =========================================
   9. RENDER SOCIAL LINKS
========================================= */

function renderSocial() {
  const container = getElement("heroSocial");
  if (!container) return;

  const socialContacts = contact.filter(item =>
    ["LinkedIn", "GitHub", "Instagram", "Facebook"].includes(item.name)
  );

  container.innerHTML = socialContacts.map(item => `
    <a
      class="social-link"
      href="${escapeHTML(safeURL(item.url))}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="${escapeHTML(item.name)}"
      title="${escapeHTML(item.name)}"
    >
      ${getIcon(item.icon)}
    </a>
  `).join("");
}


/* =========================================
   10. RENDER SKILLS
========================================= */

function renderSkills() {
  const container = getElement("skillsContainer");
  if (!container) return;

  container.innerHTML = skills.map(skill => `
    <article class="skill-card reveal">
      <div class="skill-icon">
        ${getIcon(skill.icon)}
      </div>

      <h3>${escapeHTML(skill.name)}</h3>
      <p>${escapeHTML(skill.description)}</p>
    </article>
  `).join("");
}


/* =========================================
   11. RENDER PROJECTS
========================================= */

function renderProjects() {
  const container = getElement("projectsContainer");
  if (!container) return;

  container.innerHTML = projects.map(project => {
    const projectURL = safeURL(project.url);

    return `
      <article class="project-card reveal">
        <a
          class="project-image-link"
          href="${escapeHTML(projectURL)}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buka proyek ${escapeHTML(project.title)}"
        >
          <img
            class="project-image"
            src="${escapeHTML(project.image)}"
            alt="${escapeHTML(project.title)}"
            loading="lazy"
          >
        </a>

        <div class="project-info">
          <span class="project-category">
            ${escapeHTML(project.category)}
          </span>

          <h3>${escapeHTML(project.title)}</h3>

          <p>${escapeHTML(project.description)}</p>

          <div class="project-footer">
            <span class="project-category">
              ${project.technologies.map(escapeHTML).join(" · ")}
            </span>

            <a
              href="${escapeHTML(projectURL)}"
              class="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lihat Proyek ↗
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}


/* =========================================
   12. RENDER CONTACT
========================================= */

function renderContact() {
  const container = getElement("contactContainer");
  const emailButton = getElement("emailButton");

  if (!container) return;

  container.innerHTML = contact.map(item => `
    <a
      class="contact-item reveal"
      href="${escapeHTML(safeURL(item.url))}"
      target="${item.url.startsWith("mailto:") || item.url.startsWith("tel:") ? "_self" : "_blank"}"
      rel="noopener noreferrer"
    >
      <span class="contact-icon">
        ${getIcon(item.icon)}
      </span>

      <span>
        <strong>${escapeHTML(item.name)}</strong>
        <small>${escapeHTML(item.value)}</small>
      </span>

      <span class="contact-arrow">↗</span>
    </a>
  `).join("");

  const email = contact.find(item => item.name === "Email");

  if (emailButton && email) {
    emailButton.href = safeURL(email.url);
  }
}


/* =========================================
   13. DARK / LIGHT MODE
========================================= */

function initTheme() {
  const toggle = getElement("themeToggle");
  const icon = getElement("themeIcon");

  if (!toggle) return;

  const savedTheme = localStorage.getItem("portfolio-theme");
  const initialTheme = savedTheme || settings.defaultTheme;

  document.documentElement.setAttribute("data-theme", initialTheme);

  function updateIcon(theme) {
    if (icon) {
      icon.textContent = theme === "dark" ? "☀" : "☾";
    }
  }

  updateIcon(initialTheme);

  toggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);

    updateIcon(nextTheme);
  });
}


/* =========================================
   14. MOBILE NAVIGATION
========================================= */

function initNavigation() {
  const menuToggle = getElement("menuToggle");
  const navMenu = getElement("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", event => {
    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}


/* =========================================
   15. ACTIVE NAVIGATION
========================================= */

function initActiveNavigation() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      navLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  }, {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}


/* =========================================
   16. SCROLL REVEAL ANIMATION
========================================= */

function initScrollAnimation() {
  const revealElements = document.querySelectorAll(".reveal");

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!settings.enableScrollAnimation || reducedMotion) {
    revealElements.forEach(element => element.classList.add("active"));
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach(element => element.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        currentObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(element => observer.observe(element));
}


/* =========================================
   17. FOOTER YEAR
========================================= */

function updateFooterYear() {
  const year = getElement("currentYear");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}


/* =========================================
   18. INITIALIZE WEBSITE
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderSocial();
  renderSkills();
  renderProjects();
  renderContact();

  initTheme();
  initNavigation();
  initActiveNavigation();
  initScrollAnimation();

  updateFooterYear();
});
