const PAGE_JSON_MAP = {
  'index': 'index',
  'about': 'about',
  'travel-tips': 'travel-tips',
  'contact': 'contact',
  'fleet': 'fleet',
  'service': 'service'
};

const LANG_FOLDER = { pt: 'ptbr', es: 'es' };

function getCurrentPage() {
  const segment = window.location.pathname.split('/').pop() || 'index';
  return segment.replace(/\.html$/, '');
}

async function fetchJson(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return {};
    return await res.json();
  } catch {
    return {};
  }
}

async function loadTranslations(lang) {
  const folder = LANG_FOLDER[lang] ?? lang;
  const pageKey = PAGE_JSON_MAP[getCurrentPage()] ?? null;

  const [globalRaw, pageRaw] = await Promise.all([
    fetchJson(`/json/i18n/${folder}/global.json`),
    pageKey ? fetchJson(`/json/i18n/${folder}/${pageKey}.json`) : Promise.resolve({}),
  ]);

  const globalNamespaced = {};
  for (const [k, v] of Object.entries(globalRaw)) {
    globalNamespaced[`global.${k}`] = v;
  }

  return Object.assign({}, globalNamespaced, pageRaw);
}

function applyTranslations(translations) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!(key in translations)) return;
    const text = translations[key];

    if (el.tagName === 'TITLE') {
      document.title = text;
      return;
    }

    if (el.tagName === 'IMG') {
      el.setAttribute('alt', text);
      return;
    }

    if (el.children.length === 0) {
      el.textContent = text;
    } else {
      for (const node of el.childNodes) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
          node.textContent = text;
          return;
        }
      }
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (key in translations) el.setAttribute('alt', translations[key]);
  });
}

function syncSwitcherUI(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
  });
}

async function applyLang(lang) {
  const translations = await loadTranslations(lang);
  applyTranslations(translations);
  syncSwitcherUI(lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'es';
}

export async function initI18n() {
  const lang = localStorage.getItem('marazul-lang') || 'pt';
  await applyLang(lang);
}

export function initLangSwitcher() {
  document.addEventListener('click', async e => {
    const btn = e.target.closest('.lang-btn[data-lang]');
    if (!btn) return;
    const lang = btn.dataset.lang;
    localStorage.setItem('marazul-lang', lang);
    await applyLang(lang);
  });
}
