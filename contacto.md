---
layout: default
title: Contacto
permalink: /contacto/
---

<main class="page-wrap" style="max-width:640px">

<div class="section-label">// contacto</div>
<h1 style="font-size:1.8rem;font-weight:600;color:#e6edf3;margin-bottom:.5rem">¿Hablamos?</h1>
<p style="color:var(--text2);font-size:14px;margin-bottom:2.5rem;font-family:'JetBrains Mono',monospace">
  > disponible para prácticas a partir de 2027 · presencial en Extremadura o remoto · interesado en redes, sistemas Linux y ciberseguridad.
</p>

<!-- FORMULARIO -->
<div class="glass-card" style="margin-bottom:2rem">
  <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--green);text-transform:uppercase;letter-spacing:.1em;margin-bottom:1.25rem">$ send_message</div>
  <form action="https://formspree.io/f/TU_ID_FORMSPREE" method="POST" class="contact-form">
    <div class="form-group">
      <label class="form-label">nombre</label>
      <input type="text" name="nombre" placeholder="Tu nombre" required class="form-input">
    </div>
    <div class="form-group">
      <label class="form-label">email</label>
      <input type="email" name="email" placeholder="tu@email.com" required class="form-input">
    </div>
    <div class="form-group">
      <label class="form-label">mensaje</label>
      <textarea name="mensaje" rows="4" placeholder="Cuéntame..." required class="form-input form-textarea"></textarea>
    </div>
    <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center">enviar mensaje →</button>
  </form>
</div>

<!-- ENLACES -->
<div class="contact-links">
  <a href="mailto:contacto@julior23.es" class="contact-link glass-card">
    <span class="contact-icon">📧</span>
    <div>
      <div class="contact-label">email</div>
      <div class="contact-value">contacto@julior23.es</div>
    </div>
    <span class="contact-arrow">→</span>
  </a>
  <a href="https://github.com/Juli0r23" target="_blank" class="contact-link glass-card">
    <span class="contact-icon">🐙</span>
    <div>
      <div class="contact-label">github</div>
      <div class="contact-value">github.com/Juli0r23</div>
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

/* Formulario */
.contact-form { display:flex;flex-direction:column;gap:1rem; }
.form-group { display:flex;flex-direction:column;gap:.4rem; }
.form-label {
  font-family:'JetBrains Mono',monospace;
  font-size:11px;
  color:var(--muted);
  text-transform:uppercase;
  letter-spacing:.08em;
}
.form-label::before { content:'> ';color:var(--green); }
.form-input {
  background: rgba(13,24,36,0.6);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  padding: .65rem 1rem;
  color: var(--text);
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  outline: none;
  transition: border-color .2s, box-shadow .2s;
  width: 100%;
}
.form-input::placeholder { color: var(--muted); }
.form-input:focus {
  border-color: rgba(0,255,136,0.35);
  box-shadow: 0 0 0 3px rgba(0,255,136,0.06);
}
.form-textarea { resize: vertical; min-height: 100px; }
</style>
