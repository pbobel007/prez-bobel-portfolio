(() => {
  const STORAGE_KEY = "prez-lang";
  const SUPPORTED = ["en", "pl", "es"];

  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const header = document.querySelector("[data-header]");
  const progress = document.querySelector("[data-progress]");
  const onScroll = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 16);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      progress.style.width = `${pct}%`;
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = document.querySelector("[data-nav-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const closeNav = () => document.body.classList.remove("nav-open");

  toggle?.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  const revealEls = () => document.querySelectorAll("[data-reveal]");
  let revealObserver = null;

  const setupReveals = () => {
    if (!("IntersectionObserver" in window)) {
      revealEls().forEach((el) => el.classList.add("is-visible"));
      return;
    }
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    revealEls().forEach((el) => {
      if (!el.classList.contains("is-visible")) revealObserver.observe(el);
    });
  };

  setupReveals();

  const getInitialLang = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (SUPPORTED.includes(browser)) return browser;
    return "en";
  };

  let currentLang = getInitialLang();

  const applyUi = (ui) => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && ui[key] != null) el.textContent = ui[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key && ui[key] != null) el.setAttribute("aria-label", ui[key]);
    });
    document.title = ui.metaTitle;
    const meta = document.querySelector("[data-meta-description]");
    if (meta) meta.setAttribute("content", ui.metaDescription);
    document.documentElement.lang = currentLang;
  };

  const renderAbout = (profile) => {
    const copy = document.querySelector("[data-about-copy]");
    if (copy) {
      copy.innerHTML = (profile.about || [])
        .map((p) => `<p>${escapeHtml(p)}</p>`)
        .join("");
    }

    const creds = document.querySelector("[data-credentials]");
    if (creds) {
      creds.innerHTML = (profile.credentials || [])
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");
    }

    const langs = document.querySelector("[data-languages]");
    if (langs) {
      langs.innerHTML = (profile.languages || [])
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");
    }

    const focus = document.querySelector("[data-focus]");
    if (focus) {
      focus.innerHTML = (profile.focus || [])
        .map((item) => `<span>${escapeHtml(item)}</span>`)
        .join("");
    }

    const loc = document.querySelector("[data-location]");
    if (loc) loc.textContent = profile.location;
  };

  const renderJourney = (items) => {
    const timeline = document.querySelector("[data-timeline]");
    if (!timeline || !Array.isArray(items)) return;
    timeline.innerHTML = items
      .map(
        (item) => `
      <li class="timeline-item" data-reveal>
        <div class="timeline-marker" aria-hidden="true"></div>
        <div class="timeline-body">
          <div class="timeline-meta">
            <span class="period">${escapeHtml(item.period)}</span>
            <span class="org">${escapeHtml(item.org)}</span>
          </div>
          <h3>${escapeHtml(item.role)}</h3>
          <p>${escapeHtml(item.summary)}</p>
        </div>
      </li>`,
      )
      .join("");
  };

  const renderPortfolio = (items) => {
    const list = document.getElementById("portfolio-list");
    if (!list || !Array.isArray(items)) return;
    list.innerHTML = items
      .map(
        (item) => `
      <a class="portfolio-item" href="${escapeAttr(item.href)}" target="_blank" rel="noopener noreferrer">
        <div>
          <span class="tag">${escapeHtml(item.tag)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p class="client">${escapeHtml(item.client)}</p>
          <p class="summary">${escapeHtml(item.summary)}</p>
          <ul class="outcomes">
            ${(item.outcomes || [])
              .map((o) => `<li>${escapeHtml(o)}</li>`)
              .join("")}
          </ul>
        </div>
        <span class="portfolio-arrow" aria-hidden="true">↗</span>
      </a>`,
      )
      .join("");
  };

  const syncLangButtons = () => {
    document
      .querySelectorAll("[data-lang-switch] button, [data-lang-switch-mobile] button")
      .forEach((btn) => {
        const active = btn.getAttribute("data-lang") === currentLang;
        btn.setAttribute("aria-pressed", active ? "true" : "false");
        btn.classList.toggle("is-active", active);
      });
  };

  const loadPage = async (lang) => {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    syncLangButtons();

    try {
      const res = await fetch(`/api/profile?lang=${encodeURIComponent(lang)}`);
      if (!res.ok) throw new Error("profile fetch failed");
      const data = await res.json();
      applyUi(data.ui);
      renderAbout(data.profile);
      renderJourney(data.profile.journey);
      renderPortfolio(data.profile.portfolio);
      setupReveals();
    } catch {
      // Keep existing markup if API is unavailable.
    }
  };

  document
    .querySelectorAll("[data-lang-switch] button, [data-lang-switch-mobile] button")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (!lang || lang === currentLang) return;
        loadPage(lang);
        closeNav();
      });
    });

  loadPage(currentLang);

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/'/g, "&#39;");
  }
})();
