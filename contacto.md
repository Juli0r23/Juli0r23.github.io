---
layout: default
title: Contacto
permalink: /contacto/
---

<main class="page-wrap" style="max-width:600px">

<div class="section-label">// contacto</div>
<h1 style="font-size:1.8rem;font-weight:600;color:#e6edf3;margin-bottom:.5rem">¿Hablamos?</h1>
<p style="color:var(--text2);font-size:14px;margin-bottom:2.5rem;font-family:'JetBrains Mono',monospace">
  > disponible para prácticas, colaboraciones o simplemente charlar sobre redes.
</p>

<div class="contact-links">
  <a href="mailto:contacto@julior23.com" class="contact-link glass-card">
    <span class="contact-icon">📧</span>
    <div>
      <div class="contact-label">email</div>
      <div class="contact-value">contacto@julior23.com</div>
    </div>
    <span class="contact-arrow">→</span>
  </a>
  <a href="https://github.com/julior23" target="_blank" class="contact-link glass-card">
    <span class="contact-icon">🐙</span>
    <div>
      <div class="contact-label">github</div>
      <div class="contact-value">github.com/julior23</div>
    </div>
    <span class="contact-arrow">→</span>
  </a>
  <a href="https://linkedin.com/in/julior23" target="_blank" class="contact-link glass-card">
    <span class="contact-icon">💼</span>
    <div>
      <div class="contact-label">linkedin</div>
      <div class="contact-value">linkedin.com/in/julior23</div>
    </div>
    <span class="contact-arrow">→</span>
  </a>
</div>

</main>

<style>
.contact-links { display:flex;flex-direction:column;gap:.75rem; }
.contact-link {
  display:flex;align-items:center;gap:1rem;
  color:var(--text);transition:border-color .2s,transform .15s;
}
.contact-link:hover { border-color:var(--glass-border-h);transform:translateX(4px);color:var(--text); }
.contact-icon { font-size:22px;flex-shrink:0; }
.contact-label { font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em; }
.contact-value { font-size:14px;color:var(--green); }
.contact-arrow { margin-left:auto;color:var(--muted);transition:color .2s; }
.contact-link:hover .contact-arrow { color:var(--green); }
</style>
