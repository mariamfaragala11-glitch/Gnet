import {
  TRANSLATIONS,
  PARTNERS,
  COMPANIES,
  EXPLORE_SERVICES,
  TALENTS,
  JOBS,
} from './data.js';

const state = {
  lang: 'en',
  activeSearchTab: 'all',
};

/* ===================================================
   Reusable Logo & Icon Builders (Exact Figma Assets)
   =================================================== */
function renderCompanyLogo(logoType, isJobCard = false) {
  const boxClass = isJobCard ? 'company-logo-box company-logo-box--job' : 'company-logo-box';

  if (logoType === 'equate') {
    return `
      <div class="${boxClass}">
        <div class="logo-crop-equate">
          <img src="assets/logo-equate.png" alt="Equate logo" />
        </div>
      </div>`;
  }
  if (logoType === 'kipco') {
    return `
      <div class="${boxClass}">
        <div class="logo-crop-kipco">
          <img src="assets/logo-kipco.png" alt="KIPCO logo" />
        </div>
      </div>`;
  }
  if (logoType === 'zain') {
    return `
      <div class="${boxClass}">
        <div class="logo-crop-zain">
          <div class="logo-crop-zain__top">
            <img src="assets/logo-zain.png" alt="Zain logo symbol" />
          </div>
          <div class="logo-crop-zain__bottom">
            <img src="assets/logo-zain.png" alt="Zain wordmark" />
          </div>
        </div>
      </div>`;
  }
  return `
    <div class="${boxClass}">
      <div class="logo-crop-alzamil">
        <img src="assets/logo-alzamil.png" alt="Al Zamil Group logo" />
      </div>
    </div>`;
}

function renderExploreIcon(iconType) {
  if (iconType === 'companies') {
    return `
      <div class="service-icon-tile">
        <div class="service-icon-inner">
          <img src="assets/icon-explore-companies.svg" alt="" style="inset: 0.75% 0 0 0; width: 100%; height: 99.25%;" />
        </div>
      </div>`;
  }
  if (iconType === 'jobs') {
    return `
      <div class="service-icon-tile">
        <div class="service-icon-inner">
          <img src="assets/icon-explore-jobs.svg" alt="" style="inset: 6.6% 0; width: 100%; height: 86.8%;" />
        </div>
      </div>`;
  }
  if (iconType === 'opportunities') {
    return `
      <div class="service-icon-tile">
        <div class="service-icon-inner">
          <img class="opps-layer-1" src="assets/icon-explore-opps-1.svg" alt="" />
          <img class="opps-layer-2" src="assets/icon-explore-opps-2.svg" alt="" />
          <img class="opps-layer-3" src="assets/icon-explore-opps-3.svg" alt="" />
          <img class="opps-layer-4" src="assets/icon-explore-opps-4.svg" alt="" />
        </div>
      </div>`;
  }
  return `
    <div class="service-icon-tile">
      <div class="service-icon-inner">
        <div class="services-icon-group">
          <div class="services-part" style="inset: 8.21% 11.34% 79.29% 76.16%;">
            <div class="services-part-rot">
              <div class="services-part-mask" style="mask-position: -22.849px -2.464px; -webkit-mask-position: -22.849px -2.464px;">
                <img src="assets/icon-explore-services-1.svg" alt="" style="inset: -20%; width: 140%; height: 140%;" />
              </div>
            </div>
          </div>
          <div class="services-part" style="inset: 79.29% 76.16% 8.21% 11.34%;">
            <div class="services-part-rot">
              <div class="services-part-mask" style="mask-position: -3.401px -23.786px; -webkit-mask-position: -3.401px -23.786px;">
                <img src="assets/icon-explore-services-1.svg" alt="" style="inset: -20%; width: 140%; height: 140%;" />
              </div>
            </div>
          </div>
          <div class="services-part" style="inset: 19.49% 1.95% 1.95% 40.52%;">
            <div class="services-part-rot">
              <div class="services-part-mask" style="mask-position: -12.157px -5.848px; -webkit-mask-position: -12.157px -5.848px;">
                <img src="assets/icon-explore-services-2.svg" alt="" style="inset: -3.18% -4.35%; width: 108.7%; height: 106.36%;" />
              </div>
            </div>
          </div>
          <div class="services-part" style="inset: 1.95% 40.43% 19.49% 1.95%;">
            <div class="services-part-rot">
              <div class="services-part-mask" style="mask-position: -0.586px -0.586px; -webkit-mask-position: -0.586px -0.586px;">
                <img src="assets/icon-explore-services-3.svg" alt="" style="inset: -3.18% -4.34%; width: 108.68%; height: 106.36%;" />
              </div>
            </div>
          </div>
          <div class="services-part" style="inset: 16.41% 16.4%;">
            <div class="services-part-rot">
              <div class="services-part-mask" style="mask-position: -4.921px -4.922px; -webkit-mask-position: -4.921px -4.922px;">
                <img src="assets/icon-explore-services-4.svg" alt="" style="inset: -3.72%; width: 107.44%; height: 107.44%;" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

/* ===================================================
   Section Renderers
   =================================================== */
function renderPartners() {
  const track = document.getElementById('partnersTrack');
  const doubled = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];
  track.innerHTML = doubled
    .map(
      (p) => `
      <div class="partner-item" title="${p.name}">
        <img src="${p.src}" alt="${p.name}" loading="lazy" />
      </div>`
    )
    .join('');
}

function renderSearchTabs() {
  const t = TRANSLATIONS[state.lang];
  const tabsEl = document.getElementById('searchTabs');
  tabsEl.innerHTML = t.hero.tabs
    .map(
      (tab) => `
      <button
        type="button"
        role="tab"
        aria-selected="${state.activeSearchTab === tab.id}"
        class="search-tab ${state.activeSearchTab === tab.id ? 'is-active' : ''}"
        data-tab="${tab.id}"
      >
        ${tab.label}
      </button>`
    )
    .join('');
}

function renderCompanies() {
  const t = TRANSLATIONS[state.lang];
  const track = document.getElementById('companiesTrack');
  const alreadyVisible = track.dataset.revealed === 'true';
  const revealReady = document.documentElement.classList.contains('js-reveal-ready');
  const revealClass = alreadyVisible
    ? ' reveal-item is-visible is-revealed'
    : revealReady
      ? ' reveal-item'
      : '';
  track.innerHTML = COMPANIES.map(
    (c, idx) => `
    <div class="company-card-slot${revealClass}" style="--stagger-i: ${Math.min(idx, 5)};">
      <article class="company-card" data-company-id="${c.id}">
        ${
          c.featured
            ? `<div class="featured-badge">
                <img src="assets/icon-star.svg" alt="" />
                <span>${t.companies.badge}</span>
              </div>`
            : ''
        }
        <div class="company-card__cover ${c.coverClass}">
          <img src="${c.cover}" alt="${c.name} headquarters" loading="lazy" />
        </div>
        <div class="company-card__meta">
          ${renderCompanyLogo(c.logoType, false)}
          <div class="company-card__info">
            <div class="company-name-row">
              <h3 class="company-card__name">${c.name}</h3>
              ${c.verified ? `<img class="verified-icon" src="assets/icon-shield-tick.svg" alt="Verified" />` : ''}
            </div>
            <p class="company-card__sub">${c.sector}</p>
          </div>
        </div>
        <div class="company-card__expand">
          <div class="company-card__expand-inner">
            <p class="company-card__desc">${c.desc}</p>
            <div class="company-card__tags">
              ${c.tags.map((tag) => `<span class="company-tag">${tag}</span>`).join('')}
            </div>
            <button type="button" class="company-card__cta">
              <span>${t.companies.viewCompany}</span>
              <img src="assets/icon-arrow-right.svg" alt="" />
            </button>
          </div>
        </div>
      </article>
    </div>`
  ).join('');
}

function renderExploreServices() {
  const grid = document.getElementById('exploreGrid');
  grid.innerHTML = EXPLORE_SERVICES.map(
    (s) => `
    <button type="button" class="service-card" data-target="${s.targetSection}">
      <div class="service-card__top">
        <div class="service-card__left">
          ${renderExploreIcon(s.iconType)}
          <h3 class="service-card__title">${s.titleLine1}<br />${s.titleLine2}</h3>
        </div>
        <span class="service-card__arrow" aria-hidden="true">
          <img src="assets/icon-arrow-up-right.svg" alt="" />
        </span>
      </div>
      <p class="service-card__desc">${s.desc}</p>
    </button>`
  ).join('');
}

function renderTalents() {
  const track = document.getElementById('talentTrack');
  track.innerHTML = TALENTS.map(
    (p) => `
    <article class="talent-card">
      <div class="talent-card__photo">
        <img src="${p.photo}" alt="${p.name}" style="${p.imgStyle}" loading="lazy" />
      </div>
      <div class="talent-card__body">
        <h3 class="talent-card__name">${p.name}</h3>
        <p class="talent-card__role">${p.role}</p>
        <p class="talent-card__meta">${p.meta}</p>
      </div>
    </article>`
  ).join('');
}

function renderJobs() {
  const t = TRANSLATIONS[state.lang];
  const track = document.getElementById('jobsTrack');
  const alreadyVisible = track.dataset.revealed === 'true';
  const revealReady = document.documentElement.classList.contains('js-reveal-ready');
  const revealClass = alreadyVisible
    ? ' reveal-item is-visible is-revealed'
    : revealReady
      ? ' reveal-item'
      : '';
  track.innerHTML = JOBS.map(
    (j, idx) => `
    <article class="job-card${revealClass}" style="--stagger-i: ${Math.min(idx, 5)};">
      ${
        j.featured
          ? `<div class="featured-badge">
              <img src="assets/icon-star.svg" alt="" />
              <span>${t.jobs.badge}</span>
            </div>`
          : ''
      }
      <div class="job-card__media">
        <img src="${j.cover}" alt="${j.title}" loading="lazy" />
        ${renderCompanyLogo(j.logoType, true)}
      </div>
      <div class="job-card__content">
        <div class="job-card__details">
          <div>
            <h3 class="job-card__title">${j.title}</h3>
            <div class="company-name-row" style="margin-top: 10px;">
              <span class="job-card__company-name">${j.company}</span>
              ${j.verified ? `<img class="verified-icon" src="assets/icon-shield-tick.svg" alt="Verified" />` : ''}
            </div>
          </div>

          <div class="job-card__tags">
            <span class="job-tag">
              <img src="assets/icon-location.svg" alt="" />
              <span>${j.location}</span>
            </span>
            <span class="job-tag-divider" aria-hidden="true"></span>
            <span class="job-tag">
              <img src="assets/icon-briefcase.svg" alt="" />
              <span>${j.type}</span>
            </span>
          </div>

          <p class="job-card__summary">${j.summary}</p>
        </div>

        <button type="button" class="job-card__cta">
          <span>${t.jobs.viewJob}</span>
          <img src="assets/icon-arrow-right.svg" alt="" />
        </button>
      </div>
    </article>`
  ).join('');
}

function renderFooterLinks() {
  const t = TRANSLATIONS[state.lang];
  const list = document.getElementById('footerLinks');
  list.innerHTML = t.footer.links
    .map((l) => `<li><a href="${l.href}">${l.label}</a></li>`)
    .join('');
}

/* ===================================================
   Language & i18n Synchronization
   =================================================== */
function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

function applyLanguage() {
  const t = TRANSLATIONS[state.lang];
  document.documentElement.lang = state.lang;
  document.documentElement.dir = t.dir;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const val = getNestedValue(t, el.dataset.i18n);
    if (typeof val === 'string') {
      el.textContent = val;
    }
  });

  document.querySelectorAll('[data-nav]').forEach((a) => {
    const key = a.dataset.nav;
    if (t.nav[key]) a.textContent = t.nav[key];
  });

  document.getElementById('langToggleBtn').textContent = t.langSwitch;
  document.getElementById('mobileLangBtn').textContent = t.langSwitch;
  document.getElementById('searchInput').placeholder = t.hero.searchPlaceholder;

  renderSearchTabs();
  renderCompanies();
  renderJobs();
  renderFooterLinks();
  updateAllCarouselButtons();
}

/* ===================================================
   Carousel Controller
   =================================================== */
const CAROUSELS = {
  companies: { viewportId: 'companiesViewport', step: 423 },
  talent: { viewportId: 'talentViewport', step: 457 },
  jobs: { viewportId: 'jobsViewport', step: 423 },
};

function updateCarouselButtons(name) {
  const cfg = CAROUSELS[name];
  const vp = document.getElementById(cfg.viewportId);
  if (!vp) return;

  const prevBtn = document.querySelector(`[data-carousel="${name}"][data-dir="prev"]`);
  const nextBtn = document.querySelector(`[data-carousel="${name}"][data-dir="next"]`);
  if (!prevBtn || !nextBtn) return;

  const maxScroll = Math.max(0, vp.scrollWidth - vp.clientWidth);
  const current = Math.abs(vp.scrollLeft);
  prevBtn.disabled = current <= 6;
  nextBtn.disabled = current >= maxScroll - 6 || maxScroll <= 6;
}

function updateAllCarouselButtons() {
  Object.keys(CAROUSELS).forEach(updateCarouselButtons);
}

function bindCarousels() {
  Object.entries(CAROUSELS).forEach(([name, cfg]) => {
    const vp = document.getElementById(cfg.viewportId);
    if (!vp) return;
    vp.addEventListener('scroll', () => updateCarouselButtons(name), { passive: true });
  });

  document.querySelectorAll('[data-carousel]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.carousel;
      const dir = btn.dataset.dir;
      const cfg = CAROUSELS[name];
      const vp = document.getElementById(cfg.viewportId);
      if (!vp) return;
      const isRtl = document.documentElement.dir === 'rtl';
      const sign = (dir === 'next' ? 1 : -1) * (isRtl ? -1 : 1);
      vp.scrollBy({ left: sign * cfg.step, behavior: 'smooth' });
    });
  });

  window.addEventListener('resize', updateAllCarouselButtons);
}

/* ===================================================
   Event Wiring & Initialization
   =================================================== */
function bindEvents() {
  // Language toggles
  const toggleLang = () => {
    state.lang = state.lang === 'en' ? 'ar' : 'en';
    applyLanguage();
  };
  document.getElementById('langToggleBtn').addEventListener('click', toggleLang);
  document.getElementById('mobileLangBtn').addEventListener('click', toggleLang);

  // Mobile menu
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  menuBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Active nav highlight
  document.querySelectorAll('#desktopNavLinks a').forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelectorAll('#desktopNavLinks a').forEach((a) => a.classList.remove('is-active'));
      link.classList.add('is-active');
    });
  });

  // Search tab selection (keeps search bar interactive without navigating to a Search Results view)
  document.getElementById('searchTabs').addEventListener('click', (e) => {
    const tabBtn = e.target.closest('[data-tab]');
    if (!tabBtn) return;
    state.activeSearchTab = tabBtn.dataset.tab;
    renderSearchTabs();
  });

  document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
  });

  // In-page section scrolling for Explore cards & Discover More
  document.getElementById('discoverMoreBtn').addEventListener('click', () => {
    document.getElementById('talent').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('exploreGrid').addEventListener('click', (e) => {
    const card = e.target.closest('[data-target]');
    if (!card) return;
    const target = document.querySelector(card.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });

  // Touch-friendly expand/zoom behavior on touch devices
  const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

  document.getElementById('companiesTrack').addEventListener('click', (e) => {
    if (!isTouchDevice()) return;
    if (e.target.closest('.company-card__cta')) return;
    const card = e.target.closest('.company-card');
    if (!card) return;
    const wasExpanded = card.classList.contains('is-expanded');
    document.querySelectorAll('#companiesTrack .company-card.is-expanded').forEach((c) => {
      c.classList.remove('is-expanded');
    });
    if (!wasExpanded) card.classList.add('is-expanded');
  });

  document.getElementById('talentTrack').addEventListener('click', (e) => {
    if (!isTouchDevice()) return;
    const card = e.target.closest('.talent-card');
    if (!card) return;
    const wasZoomed = card.classList.contains('is-zoomed');
    document.querySelectorAll('#talentTrack .talent-card.is-zoomed').forEach((c) => {
      c.classList.remove('is-zoomed');
    });
    if (!wasZoomed) card.classList.add('is-zoomed');
  });

  document.addEventListener('click', (e) => {
    if (!isTouchDevice()) return;
    if (!e.target.closest('.company-card')) {
      document.querySelectorAll('#companiesTrack .company-card.is-expanded').forEach((c) => {
        c.classList.remove('is-expanded');
      });
    }
    if (!e.target.closest('.talent-card')) {
      document.querySelectorAll('#talentTrack .talent-card.is-zoomed').forEach((c) => {
        c.classList.remove('is-zoomed');
      });
    }
  });
}

/* ===================================================
   Section Scroll Entrance Animations (IntersectionObserver)
   =================================================== */
function initScrollReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || typeof IntersectionObserver === 'undefined') return;

  document.documentElement.classList.add('js-reveal-ready');

  const sections = document.querySelectorAll(
    '.content-section .section-header, .content-section .carousel-controls, .cta-banner, .footer-inner'
  );
  sections.forEach((el) => el.classList.add('reveal-section'));

  const cardGroups = [
    { container: document.getElementById('companiesTrack'), selector: '.company-card-slot' },
    { container: document.getElementById('exploreGrid'), selector: '.service-card' },
    { container: document.getElementById('talentTrack'), selector: '.talent-card' },
    { container: document.getElementById('jobsTrack'), selector: '.job-card' },
  ];

  cardGroups.forEach(({ container, selector }) => {
    if (!container) return;
    container.querySelectorAll(selector).forEach((card, idx) => {
      card.classList.add('reveal-item');
      card.style.setProperty('--stagger-i', String(Math.min(idx, 5)));
    });
  });

  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        if (target.classList.contains('reveal-section')) {
          target.classList.add('is-visible');
        } else {
          target.dataset.revealed = 'true';
          const items = target.querySelectorAll('.reveal-item');
          items.forEach((item) => {
            item.classList.add('is-visible');
            const delayMs = (Number(item.style.getPropertyValue('--stagger-i')) || 0) * 75 + 600;
            window.setTimeout(() => item.classList.add('is-revealed'), delayMs);
          });
        }
        obs.unobserve(target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  sections.forEach((el) => revealObserver.observe(el));
  cardGroups.forEach(({ container }) => {
    if (container) revealObserver.observe(container);
  });
}

function init() {
  renderPartners();
  renderSearchTabs();
  renderCompanies();
  renderExploreServices();
  renderTalents();
  renderJobs();
  renderFooterLinks();
  bindCarousels();
  bindEvents();
  initScrollReveal();
  requestAnimationFrame(updateAllCarouselButtons);
}

init();
