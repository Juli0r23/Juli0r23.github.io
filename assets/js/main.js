/* =============================================================
   main.js — Juli0r23.github.io
   JS compartido de todo el sitio.
   ============================================================= */

/* ── 1. ZOOM ADAPTATIVO (debe ejecutarse lo antes posible) ── */
(function () {
  var REFERENCE = 1440;
  var MOBILE    = 768;
  var _timer    = null;

  function applyZoom() {
    var w = window.innerWidth;
    if (w <= MOBILE) {
      document.documentElement.style.zoom = '';
      return;
    }
    document.documentElement.style.zoom = w > REFERENCE
      ? (w / REFERENCE) * 0.9
      : '';
  }

  applyZoom();

  // Debounce: solo recalcula 100ms después de que el usuario
  // para de redimensionar, no en cada pixel de movimiento
  window.addEventListener('resize', function () {
    clearTimeout(_timer);
    _timer = setTimeout(applyZoom, 100);
  });
})();


/* ── 2. TRANSICIÓN ENTRE PÁGINAS ── */
(function () {
  var overlay = document.getElementById('page-transition');
  if (!overlay) return;

  window.addEventListener('DOMContentLoaded', function () {
    overlay.classList.add('pt-hide');
  });

  document.querySelectorAll('a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto') ||
        href.startsWith('http') || a.target === '_blank') return;
    a.addEventListener('click', function (e) {
      e.preventDefault();
      overlay.classList.remove('pt-hide');
      setTimeout(function () { window.location.href = href; }, 220);
    });
  });
})();


/* ── 3. BOTÓN VOLVER ARRIBA ── */
(function () {
  var btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    btn.classList.toggle('btt-visible', window.scrollY > 300);
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* ── 4. EASTER EGG DEL FOOTER ── */
(function () {
  var egg = document.getElementById('footer-egg');
  if (!egg) return;

  var clicks = 0;
  var original = egg.textContent;
  var jokes = [
    '> chmod 700 arena.sh',
    '> sudo make me a sandwich',
    '> rm -rf node_modules && pray',
    '> git commit -m "arreglado (de verdad esta vez)"',
    '> ping -c 1 vida-social  →  100% packet loss',
    '> sudo chupapi  →  Permission granted \u2764',
  ];

  egg.style.cursor = 'pointer';
  egg.addEventListener('click', function () {
    egg.textContent = jokes[clicks % jokes.length];
    egg.style.color = 'var(--green)';
    clicks++;
    clearTimeout(egg._t);
    egg._t = setTimeout(function () {
      egg.textContent = original;
      egg.style.color = '';
    }, 2800);
  });
})();


/* ── 5. ANIMACIÓN SCROLL (IntersectionObserver) ── */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

  // Índice (secciones y cards con delay escalonado)
  document.querySelectorAll('.home-section').forEach(function (el) {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });
  document.querySelectorAll('.glass-card, .skill-item, .post-item, .now-item').forEach(function (el, i) {
    el.classList.add('fade-in-up');
    el.style.transitionDelay = (Math.min(i % 4, 3) * 0.08) + 's';
    observer.observe(el);
  });

  // Posts (cabecera, ToC, contenido, nav)
  var postObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        postObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.post-header, .toc-mobile, .post-content, .post-nav').forEach(function (el) {
    el.classList.add('fade-in-up');
    postObserver.observe(el);
  });
})();


/* ── 6. TOGGLE MODO CLARO / OSCURO + HAMBURGUESA ── */
(function () {
  var root    = document.documentElement;
  var icons   = [document.getElementById('theme-icon'), document.getElementById('mobile-theme-icon')];
  var labels  = [document.getElementById('mobile-theme-label')];
  var toggles = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
  var thumbs  = document.querySelectorAll('.theme-toggle-thumb');

  function getTheme() {
    var saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    var isLight = theme === 'light';
    icons.forEach(function (el) { if (el) el.textContent = isLight ? '☀️' : '🌙'; });
    labels.forEach(function (el) { if (el) el.textContent = isLight ? 'modo claro' : 'modo oscuro'; });
    thumbs.forEach(function (t) {
      t.style.transform = isLight ? 'translateX(20px)' : 'translateX(0)';
    });
  }

  applyTheme(getTheme());

  toggles.forEach(function (btn) {
    if (!btn) return;
    btn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') || 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  });

  /* ── Menú hamburguesa ── */
  var hamburger = document.getElementById('nav-hamburger');
  var menu      = document.getElementById('nav-mobile');
  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);
  });

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      hamburger.classList.remove('open');
      menu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      menu.setAttribute('aria-hidden', true);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      hamburger.classList.remove('open');
      menu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      menu.setAttribute('aria-hidden', true);
      hamburger.focus();
    }
  });
})();


/* ── 7. TYPING TERMINAL (solo si existe #typed-terminal) ── */
(function () {
  var container = document.getElementById('typed-terminal');
  if (!container) return;

  var lines = [
    { type: 'cmd',    text: 'whoami' },
    { type: 'ok',     text: 'Juli0r23' },
    { type: 'cmd',    text: 'cat about.txt' },
    { type: 'out',    text: 'ASIR \u00b7 2\u00ba A\u00f1o' },
    { type: 'out',    text: 'Redes, Docker & Sistemas Linux' },
    { type: 'out',    text: 'Extremadura, Espa\u00f1a' },
    { type: 'cmd',    text: 'ping 8.8.8.8 -c 1' },
    { type: 'ok',     text: '64 bytes: time=12.4ms' },
    { type: 'cmd',    text: 'uptime' },
    { type: 'warn',   text: '' },
    { type: 'cursor', text: '' }
  ];

  var startTime = Date.now();
  var uptimeEl  = null;

  function updateUptime() {
    if (!uptimeEl) return;
    var elapsed = Math.floor((Date.now() - startTime) / 1000);
    var h = String(Math.floor(elapsed / 3600)).padStart(2, '0');
    var m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
    var s = String(elapsed % 60).padStart(2, '0');
    uptimeEl.textContent = 'aprendiendo... ' + h + ':' + m + ':' + s;
  }

  function makeLine(type, text) {
    var div = document.createElement('div');
    if (type === 'cmd')    { div.className = 't-cmd';  div.textContent = text; }
    else if (type === 'ok')   { div.className = 't-ok';   div.textContent = text; }
    else if (type === 'out')  { div.className = 't-out';  div.textContent = text; }
    else if (type === 'warn') {
      div.className = 't-warn';
      uptimeEl = div;
      updateUptime();
      setInterval(updateUptime, 1000);
    } else if (type === 'cursor') {
      div.className = 't-cmd';
      div.innerHTML = '<span style="color:var(--muted)">\u2588</span>';
    }
    return div;
  }

  function typeText(el, text, cb) {
    var i = 0;
    el.textContent = '';
    function tick() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i++);
        setTimeout(tick, 45 + Math.random() * 30);
      } else if (cb) {
        setTimeout(cb, 180);
      }
    }
    tick();
  }

  function renderLines(index) {
    if (index >= lines.length) return;
    var line = lines[index];

    if (line.type === 'cmd' && index > 0) {
      var spacer = document.createElement('div');
      spacer.style.height = '.4rem';
      container.appendChild(spacer);
    }

    var el = makeLine(line.type, '');
    container.appendChild(el);

    if (line.type === 'cmd') {
      typeText(el, line.text, function () { renderLines(index + 1); });
    } else if (line.type === 'warn' || line.type === 'cursor') {
      renderLines(index + 1);
    } else {
      setTimeout(function () {
        el.textContent = line.text;
        renderLines(index + 1);
      }, 120);
    }
  }

  setTimeout(function () { renderLines(0); }, 600);
})();


/* ── 8. TYPING TERMINAL PROYECTOS (solo si existe #typed-terminal-proyectos) ── */
(function () {
  var container = document.getElementById('typed-terminal-proyectos');
  if (!container) return;

  var lines = [
    { type: 'cmd',    text: 'ls -la ./proyectos' },
    { type: 'out',    text: 'total 0' },
    { type: 'warn',   text: 'drwxr-xr-x  construyendo...' },
    { type: 'cmd',    text: 'git log --oneline' },
    { type: 'ok',     text: 'pr\u00f3ximamente \u00b7 trabajando en ello' },
    { type: 'cmd',    text: 'eta --release' },
    { type: 'warn',   text: 'pronto\u2122' },
    { type: 'cursor', text: '' }
  ];

  function makeLine(type, text) {
    var div = document.createElement('div');
    if (type === 'cmd')    { div.className = 't-cmd';  div.textContent = text; }
    else if (type === 'ok')   { div.className = 't-ok';   div.textContent = text; }
    else if (type === 'out')  { div.className = 't-out';  div.textContent = text; }
    else if (type === 'warn') { div.className = 't-warn'; div.textContent = text; }
    else if (type === 'cursor') {
      div.className = 't-cmd';
      div.innerHTML = '<span style="color:var(--muted)">\u2588</span>';
    }
    return div;
  }

  function typeText(el, text, cb) {
    var i = 0;
    el.textContent = '';
    function tick() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i++);
        setTimeout(tick, 45 + Math.random() * 30);
      } else if (cb) {
        setTimeout(cb, 180);
      }
    }
    tick();
  }

  function renderLines(index) {
    if (index >= lines.length) return;
    var line = lines[index];
    if (line.type === 'cmd' && index > 0) {
      var spacer = document.createElement('div');
      spacer.style.height = '.4rem';
      container.appendChild(spacer);
    }
    var el = makeLine(line.type, '');
    container.appendChild(el);
    if (line.type === 'cmd') {
      typeText(el, line.text, function () { renderLines(index + 1); });
    } else if (line.type === 'cursor') {
      renderLines(index + 1);
    } else {
      setTimeout(function () {
        el.textContent = line.text;
        renderLines(index + 1);
      }, 120);
    }
  }

  setTimeout(function () { renderLines(0); }, 600);
})();


/* ── 9. CÓDIGO EN POSTS: NÚMEROS DE LÍNEA + BOTÓN COPIAR ── */
(function () {
  document.querySelectorAll('.post-content pre').forEach(function (pre) {
    var wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrap';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    var code = pre.querySelector('code');
    var lang = code ? (code.className.match(/language-(\w+)/) || [])[1] : null;

    if (lang) {
      var label = document.createElement('span');
      label.className = 'code-lang';
      label.textContent = lang;
      wrapper.insertBefore(label, pre);
    }

    if (code) {
      var raw   = code.innerHTML;
      var lines = raw.split('\n');
      if (lines[lines.length - 1] === '') lines.pop();
      code.innerHTML = lines
        .map(function (line) { return '<span class="line">' + (line || ' ') + '</span>'; })
        .join('\n');
    }

    var btn = document.createElement('button');
    btn.className  = 'copy-btn';
    btn.textContent = 'copiar';
    wrapper.appendChild(btn);

    btn.addEventListener('click', function () {
      var text = code ? code.innerText : pre.innerText;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = '\u2713 copiado';
        btn.classList.add('copied');
        setTimeout(function () { btn.textContent = 'copiar'; btn.classList.remove('copied'); }, 2000);
      }).catch(function () {
        btn.textContent = 'error';
        setTimeout(function () { btn.textContent = 'copiar'; }, 2000);
      });
    });
  });
})();


/* ── 10. BARRA DE PROGRESO DE LECTURA ── */
(function () {
  var bar = document.getElementById('reading-progress');
  if (!bar) return;

  function updateProgress() {
    var scrollTop  = window.scrollY;
    var docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    var percent    = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
    bar.style.width      = percent + '%';
    bar.style.background = percent >= 99 ? 'var(--cyan)' : 'var(--green)';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();


/* ── 11. TOC (CONSTRUIR + ACTIVO) EN POSTS ── */
(function () {
  var content = document.getElementById('post-content');
  if (!content) return;

  var headings = content.querySelectorAll('h2, h3');
  if (headings.length < 2) return; // Solo mostrar si hay al menos 2 headings

  // Añadir IDs a los headings si no los tienen
  headings.forEach(function (h, i) {
    if (!h.id) {
      h.id = 'heading-' + i + '-' + h.textContent.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }
  });

  // Generar lista de enlaces en un contenedor dado
  function buildToc(container) {
    headings.forEach(function (h) {
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      a.className = 'toc-link toc-' + h.tagName.toLowerCase();
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(h.id);
        if (target) {
          window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
        }
      });
      container.appendChild(a);
    });
  }

  // Escritorio
  var desktopToc  = document.getElementById('toc-desktop');
  var desktopList = document.getElementById('toc-list-desktop');
  if (desktopToc && desktopList) {
    buildToc(desktopList);
    desktopToc.style.display = 'block';
  }

  // Móvil
  var mobileToc  = document.getElementById('toc-mobile');
  var mobileList = document.getElementById('toc-list-mobile');
  var toggle     = document.getElementById('toc-toggle');
  var arrow      = document.querySelector('.toc-arrow');
  if (mobileToc && mobileList && toggle) {
    buildToc(mobileList);
    mobileToc.style.display = 'block';
    toggle.addEventListener('click', function () {
      var open = mobileList.style.display === 'none';
      mobileList.style.display = open ? 'block' : 'none';
      arrow.textContent = open ? '▴' : '▾';
    });
  }

  // Marcar el heading activo al hacer scroll
  var allLinks = document.querySelectorAll('.toc-link');
  function updateActive() {
    var scrollY  = window.scrollY;
    var offset   = 120;
    var current  = headings[0].id;

    headings.forEach(function (h) {
      if (h.getBoundingClientRect().top + scrollY - offset <= scrollY) {
        current = h.id;
      }
    });

    // Si estamos al final, marcar el último
    var distFromBottom = document.documentElement.scrollHeight - scrollY - window.innerHeight;
    if (distFromBottom < 10) current = headings[headings.length - 1].id;

    allLinks.forEach(function (a) {
      a.classList.toggle('toc-active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
})();
