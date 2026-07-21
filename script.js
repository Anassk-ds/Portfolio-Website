/* ============================================================
   SHAIK ANAS — PORTFOLIO SCRIPT
   Organized by feature. Search the section headers to find
   the part you want to edit.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- DATA: PROJECTS ----------
     Edit this array to add / remove / update project cards.
     category: "web" | "data"
     links: { demo?: url, repo?: url }
  ------------------------------------------------------------ */
  const PROJECTS = [
    {
      id: "ipl-eda",
      title: "IPL 2025 Exploratory Data Analysis",
      icon: "🏏",
      category: "data",
      categoryLabel: "Data & ML",
      summary: "Analyzed IPL 2025 batting and bowling data to surface team performance, player form, and match trends.",
      problem: "Raw IPL 2025 batting and bowling data doesn't tell a story on its own — spotting team and player trends means digging through a lot of numbers by hand.",
      solution: "Cleaned and explored the dataset with Pandas and NumPy, then built a set of visualizations in Matplotlib and Seaborn covering team performance, individual player statistics, and match-level trends.",
      stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      learnings: "Sharpened my EDA workflow end-to-end — cleaning messy real-world sports data, choosing the right chart for the right question, and turning a dataset into a readable narrative.",
      links: { repo: "https://github.com/Anassk-ds/IPL-2025-EDA" }
    },
    {
      id: "ipl-predictor",
      title: "IPL Match Outcome Predictor",
      icon: "🏆",
      category: "data",
      categoryLabel: "Data & ML",
      summary: "A Random Forest classifier that predicts real-time winning probabilities for IPL matches based on the live game state.",
      problem: "Predicting a cricket match's outcome mid-game is hard — the win probability shifts constantly with overs, wickets, and required run rate.",
      solution: "Built a classification pipeline in Scikit-learn using a Random Forest model, trained on historical match situations, to estimate live winning probability from the current game state.",
      stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest"],
      learnings: "First real end-to-end ML project — feature engineering from raw match data, model selection, and thinking about what actually makes a prediction useful in the moment.",
      links: { repo: "https://github.com/Anassk-ds/IPL-Match-Predictor" }
    },
    {
      id: "grade-calculator",
      title: "Student Grade Calculator",
      icon: "🎓",
      category: "web",
      categoryLabel: "Web Dev",
      summary: "A responsive grade calculator with percentage, remarks, dark mode, print support, and local storage.",
      problem: "Students needed a fast, no-login way to calculate grades and percentages without reaching for a spreadsheet.",
      solution: "Built a fully client-side calculator in vanilla HTML, CSS, and JavaScript — grade and percentage logic, automatic remarks, a print-friendly view, dark mode, and local storage so results persist on reload.",
      stack: ["HTML", "CSS", "JavaScript", "Local Storage"],
      learnings: "Practiced structuring vanilla JS state without a framework, and designing small UI details (dark mode, print styles) that make a simple tool feel complete.",
      links: {
        demo: "https://anassk-ds.github.io/Student-Grade-Calculator/",
        repo: "https://github.com/Anassk-ds/Student-Grade-Calculator"
      }
    },
    {
      id: "hospital-booking",
      title: "Hospital Appointment Booking System",
      icon: "🏥",
      category: "web",
      categoryLabel: "Web Dev",
      summary: "A booking front end with doctor listings, an appointment flow, emergency contacts, and an embedded map.",
      problem: "Small clinics often don't have an easy front end for patients to see doctor availability and request an appointment.",
      solution: "Built a static front end in HTML and CSS covering doctor information, an appointment booking form, an emergency contacts panel, multimedia integration, and a Google Maps location embed.",
      stack: ["HTML", "CSS"],
      learnings: "Focused on layout and information hierarchy for a form-heavy, real-world use case rather than a purely visual demo.",
      links: { repo: "https://github.com/Anassk-ds/Hospital-Appointment-Booking-System" }
    },
    {
      id: "portfolio-site",
      title: "This Portfolio",
      icon: "🧩",
      category: "web",
      categoryLabel: "Web Dev",
      summary: "The site you're looking at — a from-scratch, framework-free portfolio built to get better at vanilla JS interaction patterns.",
      problem: "A generic template portfolio doesn't show recruiters how I actually think about UI, state, or interaction — I wanted something built, not assembled.",
      solution: "Hand-built the layout, design system, and every interaction (tabs, filtering, modals, theming, validation) in plain HTML, CSS, and JavaScript — no framework, no UI library.",
      stack: ["HTML", "CSS", "JavaScript"],
      learnings: "Practiced structuring a larger vanilla JS codebase into readable, single-purpose functions instead of one long script.",
      links: { repo: "https://github.com/Anassk-ds/Portfolio-Website" }
    },
    {
      id: "summer-training-1",
      title: "Summer Training — Practice Repo",
      icon: "🧪",
      category: "web",
      categoryLabel: "Web Dev",
      summary: "Practice code and exercises completed during a summer training program.",
      problem: "Needed a place to consolidate exercises and small scripts while working through a structured summer training curriculum.",
      solution: "Organized practice code by topic as I worked through the program, committing regularly to build a git habit alongside the actual coursework.",
      stack: ["Python"],
      learnings: "Less about a single outcome and more about building a consistent commit habit and revisiting fundamentals.",
      links: { repo: "https://github.com/Anassk-ds/Summer-Training" }
    },
    {
      id: "summer-training-2",
      title: "Summer Training II — Practice Repo",
      icon: "🧪",
      category: "web",
      categoryLabel: "Web Dev",
      summary: "A second round of practice code from a follow-on summer training program.",
      problem: "Continuing to build reps on core programming exercises after the first training program.",
      solution: "Kept the same organize-by-topic, commit-regularly approach as the first repo, applied to a new set of exercises.",
      stack: ["Python"],
      learnings: "Reinforced fundamentals and made version control a habit rather than an afterthought.",
      links: { repo: "https://github.com/Anassk-ds/Summer-Training---2" }
    }
  ];

  /* ---------- DATA: TIMELINE / ACHIEVEMENTS ----------
     Edit this array to add / remove certifications & milestones.
  ------------------------------------------------------------ */
  const TIMELINE = [
    { icon: "☁️", title: "Cloud Virtual Internship", meta: "AWS Academy & EduSkills", detail: "Hands-on virtual internship covering core AWS cloud computing concepts and services." },
    { icon: "✨", title: "Generative AI Virtual Internship", meta: "Google Cloud & EduSkills", detail: "Virtual internship focused on generative AI fundamentals and Google Cloud's AI tooling." },
    { icon: "🗂️", title: "Data Engineering Virtual Internship", meta: "EduSkills Academy", detail: "Program covering data engineering fundamentals — pipelines, storage, and processing basics." },
    { icon: "🌐", title: "Internet of Things (IoT)", meta: "NPTEL", detail: "Completed NPTEL coursework covering IoT architecture, protocols, and applications." },
    { icon: "☁️", title: "Cloud Computing (CC)", meta: "NPTEL", detail: "Completed NPTEL coursework covering cloud computing models, services, and deployment." },
    { icon: "🗄️", title: "Database Management System", meta: "CodeChef", detail: "Certification covering relational database fundamentals and query design." }
  ];

  /* ---------- ROLE ROTATION (typewriter) ---------- */
  const ROLES = [
    "Full-Stack Developer",
    "Data Science Student",
    "Machine Learning Explorer",
    "MERN Stack Builder",
    "Internship-Ready"
  ];

  /* ============================================================
     THEME TOGGLE
     ============================================================ */
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      themeIcon.textContent = "☀️";
      themeToggle.setAttribute("aria-pressed", "true");
    } else {
      root.removeAttribute("data-theme");
      themeIcon.textContent = "🌙";
      themeToggle.setAttribute("aria-pressed", "false");
    }
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let savedTheme = null;
  try { savedTheme = localStorage.getItem("anas-theme"); } catch (e) { /* storage unavailable */ }
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

  themeToggle.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("anas-theme", next); } catch (e) { /* ignore */ }
  });

  /* ============================================================
     MOBILE MENU
     ============================================================ */
  const menuToggle = document.getElementById("menuToggle");
  const navTabs = document.getElementById("navTabs");

  menuToggle.addEventListener("click", () => {
    const isOpen = navTabs.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navTabs.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navTabs.classList.remove("is-open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ============================================================
     STICKY HEADER SHADOW + ACTIVE NAV HIGHLIGHTING + BACK TO TOP
     ============================================================ */
  const header = document.getElementById("siteHeader");
  const topBtn = document.getElementById("topBtn");
  const navLinks = Array.from(document.querySelectorAll(".nav-tabs a"));
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
    topBtn.classList.toggle("is-visible", window.scrollY > 400);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  sections.forEach(section => navObserver.observe(section));

  /* ============================================================
     SCROLL REVEAL
     ============================================================ */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  /* ============================================================
     HERO TYPEWRITER / ROLE ROTATION
     ============================================================ */
  const roleTextEl = document.getElementById("roleText");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    roleTextEl.textContent = ROLES[0];
  } else {
    let roleIndex = 0, charIndex = 0, deleting = false;

    function typeLoop() {
      const current = ROLES[roleIndex];

      if (!deleting) {
        charIndex++;
        roleTextEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(typeLoop, 1400);
          return;
        }
      } else {
        charIndex--;
        roleTextEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
        }
      }
      setTimeout(typeLoop, deleting ? 35 : 65);
    }
    typeLoop();
  }

  /* ============================================================
     ANIMATED STAT COUNTERS (hero cell)
     ============================================================ */
  const statEls = document.querySelectorAll(".stat-num[data-count]");
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      if (reducedMotion) { el.textContent = target; statObserver.unobserve(el); return; }
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 30));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current;
      }, 35);
      statObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  statEls.forEach(el => statObserver.observe(el));

  /* ============================================================
     SKILLS TABS
     ============================================================ */
  const skillTabs = document.querySelectorAll(".skill-tab");
  const skillPanels = document.querySelectorAll(".skill-panel");

  function activateSkillPanel(panelName) {
    skillTabs.forEach(tab => {
      const active = tab.dataset.panel === panelName;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    skillPanels.forEach(panel => {
      const active = panel.id === `panel-${panelName}`;
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
      if (active) animateSkillBars(panel);
    });
  }

  function animateSkillBars(panel) {
    panel.querySelectorAll(".skill-bar-fill").forEach(bar => {
      const fill = bar.dataset.fill;
      requestAnimationFrame(() => { bar.style.width = fill + "%"; });
    });
  }

  skillTabs.forEach(tab => {
    tab.addEventListener("click", () => activateSkillPanel(tab.dataset.panel));
  });
  animateSkillBars(document.querySelector(".skill-panel.is-active"));

  /* ============================================================
     PROJECTS: RENDER, FILTER, MODAL
     ============================================================ */
  const projectGrid = document.getElementById("projectGrid");

  function accentForCategory(cat) {
    return cat === "data"
      ? { bg: "var(--sky-tint)", fg: "var(--sky)" }
      : { bg: "var(--coral-tint)", fg: "var(--coral)" };
  }

  function renderProjects() {
    projectGrid.innerHTML = PROJECTS.map(p => {
      const accent = accentForCategory(p.category);
      return `
        <article class="project-card" data-category="${p.category}" data-id="${p.id}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="Open case study for ${p.title}">
          <div class="project-icon" style="background:${accent.bg};color:${accent.fg};" aria-hidden="true">${p.icon}</div>
          <h3>${p.title}</h3>
          <p class="summary">${p.summary}</p>
          <div class="stack-row">${p.stack.slice(0, 4).map(s => `<span class="stack-chip">${s}</span>`).join("")}</div>
          <div class="card-foot"><span>${p.categoryLabel}</span><span aria-hidden="true">View case study →</span></div>
        </article>
      `;
    }).join("");

    projectGrid.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => openProjectModal(card.dataset.id));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openProjectModal(card.dataset.id); }
      });
    });
  }
  renderProjects();

  const filterRow = document.getElementById("filterRow");
  filterRow.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterRow.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const filter = btn.dataset.filter;
    projectGrid.querySelectorAll(".project-card").forEach(card => {
      const match = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !match);
    });
  });

  const modalOverlay = document.getElementById("modalOverlay");
  const modalClose = document.getElementById("modalClose");
  let lastFocusedEl = null;

  function openProjectModal(id) {
    const p = PROJECTS.find(proj => proj.id === id);
    if (!p) return;
    document.getElementById("modalTag").textContent = p.categoryLabel;
    document.getElementById("modalTitle").textContent = p.title;
    document.getElementById("modalProblem").textContent = p.problem;
    document.getElementById("modalSolution").textContent = p.solution;
    document.getElementById("modalLearnings").textContent = p.learnings;
    document.getElementById("modalStack").innerHTML = p.stack.map(s => `<span class="stack-chip">${s}</span>`).join("");

    const linksEl = document.getElementById("modalLinks");
    let linksHtml = "";
    if (p.links.demo) linksHtml += `<a class="btn btn-primary btn-sm" href="${p.links.demo}" target="_blank" rel="noopener">Live demo ↗</a>`;
    if (p.links.repo) linksHtml += `<a class="btn btn-ghost btn-sm" href="${p.links.repo}" target="_blank" rel="noopener">GitHub repo ↗</a>`;
    linksEl.innerHTML = linksHtml;

    lastFocusedEl = document.activeElement;
    modalOverlay.classList.add("is-open");
    modalClose.focus();
    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    modalOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  modalClose.addEventListener("click", closeProjectModal);
  modalOverlay.addEventListener("click", (e) => { if (e.target === modalOverlay) closeProjectModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("is-open")) closeProjectModal();
  });

  /* ============================================================
     ACHIEVEMENTS TIMELINE — RENDER
     ============================================================ */
  const timelineEl = document.getElementById("timeline");
  timelineEl.innerHTML = TIMELINE.map((item, i) => `
    <div class="timeline-item">
      <div class="timeline-marker" aria-hidden="true">${item.icon}</div>
      <details class="timeline-card">
        <summary>
          <span>
            ${item.title}
            <span class="meta">${item.meta}</span>
          </span>
          <span class="chev" aria-hidden="true">›</span>
        </summary>
        <p class="detail">${item.detail}</p>
      </details>
    </div>
  `).join("");

  /* ============================================================
     TESTIMONIAL TRACK CONTROLS
     ============================================================ */
  const track = document.getElementById("testimonialTrack");
  document.getElementById("trackPrev").addEventListener("click", () => {
    track.scrollBy({ left: -360, behavior: "smooth" });
  });
  document.getElementById("trackNext").addEventListener("click", () => {
    track.scrollBy({ left: 360, behavior: "smooth" });
  });

  /* ============================================================
     CONTACT FORM VALIDATION
     ============================================================ */
  const form = document.getElementById("contactForm");
  const messageInput = document.getElementById("contactMessage");
  const charCount = document.getElementById("charCount");
  const formStatus = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");

  messageInput.addEventListener("input", () => {
    charCount.textContent = messageInput.value.length;
  });

  function setFieldError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(errorId);
    input.closest(".form-row").classList.toggle("has-error", Boolean(message));
    errorEl.textContent = message || "";
  }

  function validateForm() {
    let valid = true;
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = messageInput.value.trim();

    if (name.length < 2) { setFieldError("contactName", "nameError", "Enter your name."); valid = false; }
    else setFieldError("contactName", "nameError", "");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) { setFieldError("contactEmail", "emailError", "Enter a valid email address."); valid = false; }
    else setFieldError("contactEmail", "emailError", "");

    if (subject.length < 3) { setFieldError("contactSubject", "subjectError", "Give it a short subject."); valid = false; }
    else setFieldError("contactSubject", "subjectError", "");

    if (message.length < 20) { setFieldError("contactMessage", "messageError", "Message must be at least 20 characters."); valid = false; }
    else setFieldError("contactMessage", "messageError", "");

    return valid;
  }

  function showFormStatus(type, text) {
    formStatus.className = `form-status is-visible ${type}`;
    formStatus.textContent = text;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formStatus.classList.remove("is-visible");

    if (!validateForm()) {
      showFormStatus("error", "Please fix the highlighted fields before sending.");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    // Simulated send — swap this for a real endpoint (Formspree, EmailJS, your own API, etc.)
    setTimeout(() => {
      showFormStatus("success", "Message received — I'll get back to you soon!");
      form.reset();
      charCount.textContent = "0";
      submitBtn.disabled = false;
      submitBtn.textContent = "Send message";
    }, 900);
  });

  /* ============================================================
     WELCOME TOAST
     ============================================================ */
  const toast = document.getElementById("welcomeToast");
  setTimeout(() => {
    toast.classList.add("is-visible");
    setTimeout(() => toast.classList.remove("is-visible"), 3500);
  }, 1200);

  /* ============================================================
     FOOTER YEAR
     ============================================================ */
  document.getElementById("year").textContent = new Date().getFullYear();

});
