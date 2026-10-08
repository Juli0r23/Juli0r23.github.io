---
layout: default
title: Contacto
permalink: /contacto/
---

<main class="page-wrap" style="max-width:640px">

<div class="section-label">// contacto</div>
<h1 class="page-title">¿Hablamos?</h1>
<p style="color:var(--text2);font-size:14px;margin-bottom:2.5rem;font-family:'JetBrains Mono',monospace">
  > disponible para prácticas a partir de 2027 · presencial en Extremadura o remoto · interesado en redes, sistemas Linux y ciberseguridad.
</p>

<!-- FORMULARIO -->
<div class="glass-card" style="margin-bottom:2rem">
  <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--green);text-transform:uppercase;letter-spacing:.1em;margin-bottom:1.25rem">$ send_message</div>
  <form action="https://formspree.io/f/xoevoajz" method="POST" class="contact-form" id="contact-form" novalidate>
    <div class="form-group">
      <label class="form-label">nombre</label>
      <input type="text" name="nombre" placeholder="Tu nombre" required class="form-input">
    </div>
    <div class="form-group">
      <label class="form-label">email</label>
      <div style="position:relative">
        <input type="email" name="email" id="form-email" placeholder="tu@email.com" required class="form-input" style="padding-right:2.2rem">
        <span id="email-icon" style="position:absolute;right:.75rem;top:50%;transform:translateY(-50%);font-size:14px;font-family:'JetBrains Mono',monospace;pointer-events:none"></span>
      </div>
      <span class="form-error" id="email-error"></span>
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

<script>
(function () {
  // ── Dominios desechables bloqueados ──────────────────────────
  var BLOCKED = [
    "mailinator.com","guerrillamail.com","guerrillamail.net","guerrillamail.org",
    "guerrillamail.biz","guerrillamail.de","guerrillamail.info","spam4.me",
    "tempmail.com","temp-mail.org","temp-mail.io","throwam.com","throwam.net",
    "trashmail.com","trashmail.at","trashmail.io","trashmail.me","trashmail.net",
    "yopmail.com","yopmail.fr","cool.fr.nf","jetable.fr.nf","nospam.ze.tc",
    "nomail.xl.cx","mega.zik.dj","speed.1s.fr","courriel.fr.nf","moncourrier.fr.nf",
    "monemail.fr.nf","monmail.fr.nf","sharklasers.com","guerrillamailblock.com",
    "grr.la","guerrillamail.info","spam.la","spamgourmet.com","spamgourmet.net",
    "spamgourmet.org","spamgourmet.com","dispostable.com","fakeinbox.com",
    "mailnull.com","maildrop.cc","discard.email","discardmail.com","discardmail.de",
    "spamspot.com","spamspot.com","0-mail.com","0815.ru","0clickemail.com",
    "10minutemail.com","10minutemail.net","10minutemail.org","20minutemail.com",
    "mintemail.com","mytrashmail.com","mt2014.com","mt2015.com","spamfree24.org",
    "spamfree24.de","spamfree24.net","spamfree24.info","spamfree24.biz","spamfree.eu",
    "spamfree24.com","throwam.com","mailnesia.com","mailnull.com","spamgob.com",
    "tempr.email","discard.email","spamoverdose.com","spamspot.com","spam.la",
    "tempinbox.com","tempomail.fr","temporaryemail.net","temporaryinbox.com",
    "thanksnospam.info","throwam.com","throwam.net","throwam.us","trashdevil.com",
    "trashdevil.de","wegwerfmail.de","wegwerfmail.net","wegwerfmail.org",
    "mailexpire.com","mailzilla.com","mailzilla.org","spamgob.com"
  ];

  var form       = document.getElementById('contact-form');
  var emailInput = document.getElementById('form-email');
  var emailError = document.getElementById('email-error');
  var emailIcon  = document.getElementById('email-icon');

  function getDomain(email) {
    var parts = email.split('@');
    return parts.length === 2 ? parts[1].toLowerCase().trim() : '';
  }

  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!re.test(email)) return 'Introduce un email válido.';
    var domain = getDomain(email);
    if (BLOCKED.indexOf(domain) !== -1)
      return 'No se admiten correos temporales o desechables.';
    if (domain.indexOf('.') === -1)
      return 'El dominio del email no parece válido.';
    return null;
  }

  function showFeedback(msg) {
    if (msg) {
      // Error
      emailError.textContent = msg;
      emailIcon.textContent  = '✖';
      emailIcon.style.color  = 'var(--red)';
      emailInput.classList.add('form-input--error');
      emailInput.classList.remove('form-input--ok');
    } else if (emailInput.value.trim()) {
      // Válido
      emailError.textContent = '';
      emailIcon.textContent  = '✔';
      emailIcon.style.color  = 'var(--green)';
      emailInput.classList.remove('form-input--error');
      emailInput.classList.add('form-input--ok');
    } else {
      // Vacío
      emailError.textContent = '';
      emailIcon.textContent  = '';
      emailInput.classList.remove('form-input--error', 'form-input--ok');
    }
  }

  // Validar al perder el foco
  emailInput.addEventListener('blur', function () {
    if (!emailInput.value.trim()) { showFeedback(null); return; }
    showFeedback(validateEmail(emailInput.value.trim()));
  });

  // Actualizar icono al escribir en tiempo real (solo si ya se validó antes)
  emailInput.addEventListener('input', function () {
    if (!emailInput.classList.contains('form-input--error') &&
        !emailInput.classList.contains('form-input--ok')) return;
    if (!emailInput.value.trim()) { showFeedback(null); return; }
    showFeedback(validateEmail(emailInput.value.trim()));
  });

  // Validar al enviar
  form.addEventListener('submit', function (e) {
    var err = validateEmail(emailInput.value.trim());
    if (err) {
      e.preventDefault();
      showFeedback(err);
      emailInput.focus();
    }
  });
})();
</script>

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
.form-input--error {
  border-color: rgba(247,129,102,0.5) !important;
  box-shadow: 0 0 0 3px rgba(247,129,102,0.06) !important;
}
.form-input--ok {
  border-color: rgba(0,255,136,0.35) !important;
  box-shadow: 0 0 0 3px rgba(0,255,136,0.06) !important;
}
.form-textarea { resize: vertical; min-height: 100px; }
.form-error {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--red);
  min-height: 1rem;
}
</style>
