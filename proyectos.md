---
layout: default
title: Proyectos
permalink: /proyectos/
---

<main class="page-wrap" style="max-width:700px">

<div class="section-label">// proyectos</div>
<h1 class="page-title">Proyectos</h1>

<div class="terminal" style="margin-bottom:2.5rem">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — julio@server:~/proyectos</span>
  </div>
  <div class="terminal-body" id="typed-terminal-proyectos">
    <!-- Contenido inyectado por JS -->
  </div>
</div>

<p style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--text2);margin-bottom:2rem">
  > Estoy documentando mis proyectos de clase y laboratorios personales.<br>
  > Mientras tanto, puedes ver mis repositorios en GitHub o leer el blog.
</p>

<div class="hero-btns">
  <a href="https://github.com/Juli0r23" target="_blank" class="btn btn-primary">ver GitHub →</a>
  <a href="{{ '/blog/' | relative_url }}" class="btn btn-ghost">ir al blog →</a>
</div>

</main>

<script>
(function() {
  const lines = [
    { type: 'cmd',    text: 'ls -la ./proyectos' },
    { type: 'out',    text: 'total 0' },
    { type: 'warn',   text: 'drwxr-xr-x  construyendo...' },
    { type: 'cmd',    text: 'git log --oneline' },
    { type: 'ok',     text: 'próximamente · trabajando en ello' },
    { type: 'cmd',    text: 'eta --release' },
    { type: 'warn',   text: 'pronto™' },
    { type: 'cursor', text: '' }
  ];

  const container = document.getElementById('typed-terminal-proyectos');
  if (!container) return;

  function makeLine(type, text) {
    const div = document.createElement('div');
    if      (type === 'cmd')    { div.className = 't-cmd';  div.textContent = text; }
    else if (type === 'ok')     { div.className = 't-ok';   div.textContent = text; }
    else if (type === 'out')    { div.className = 't-out';  div.textContent = text; }
    else if (type === 'warn')   { div.className = 't-warn'; div.textContent = text; }
    else if (type === 'cursor') {
      div.className = 't-cmd';
      div.innerHTML = '<span style="color:var(--muted)">█</span>';
    }
    return div;
  }

  function typeText(el, text, cb) {
    let i = 0;
    el.textContent = '';
    function tick() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i++;
        setTimeout(tick, 45 + Math.random() * 30);
      } else {
        if (cb) setTimeout(cb, 180);
      }
    }
    tick();
  }

  function renderLines(index) {
    if (index >= lines.length) return;
    const line = lines[index];

    if (line.type === 'cmd' && index > 0) {
      const spacer = document.createElement('div');
      spacer.style.height = '.4rem';
      container.appendChild(spacer);
    }

    const el = makeLine(line.type, '');
    container.appendChild(el);

    if (line.type === 'cmd') {
      typeText(el, line.text, () => renderLines(index + 1));
    } else if (line.type === 'cursor') {
      renderLines(index + 1);
    } else {
      setTimeout(() => {
        el.textContent = line.text;
        renderLines(index + 1);
      }, 120);
    }
  }

  setTimeout(() => renderLines(0), 600);
})();
</script>
