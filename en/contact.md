---
layout: default
title: Contact
permalink: /en/contact/
lang: en
lang_es_url: /contacto/
---

<main class="page-wrap" style="max-width:640px">

<div class="section-label">// contact</div>
<h1 class="page-title">Let's talk?</h1>
<p style="color:var(--text2);font-size:14px;margin-bottom:2.5rem;font-family:'JetBrains Mono',monospace">
  > available for internships from 2027 · on-site in Extremadura or remote · interested in networking, Linux systems and cybersecurity.
</p>

<!-- FORM -->
<div class="glass-card" style="margin-bottom:2rem">
  <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--green);text-transform:uppercase;letter-spacing:.1em;margin-bottom:1.25rem">$ send_message</div>
  <form action="https://formspree.io/f/xoevoajz" method="POST" class="contact-form" id="contact-form" novalidate>
    <div class="form-group">
      <label class="form-label">name</label>
      <input type="text" name="nombre" placeholder="Your name" required class="form-input">
    </div>
    <div class="form-group">
      <label class="form-label">email</label>
      <div style="position:relative">
        <input type="email" name="email" id="form-email" placeholder="you@email.com" required class="form-input" style="padding-right:2.2rem">
        <span id="email-icon" style="position:absolute;right:.75rem;top:50%;transform:translateY(-50%);font-size:14px;font-family:'JetBrains Mono',monospace;pointer-events:none"></span>
      </div>
      <span class="form-error" id="email-error"></span>
    </div>
    <div class="form-group">
      <label class="form-label">message</label>
      <textarea name="mensaje" rows="4" placeholder="Tell me about it..." required class="form-input form-textarea"></textarea>
    </div>
    <div class="form-consent">
      <input type="checkbox" id="form-consent" name="consentimiento" required class="form-checkbox">
      <label for="form-consent">I have read and accept the <a href="{{ '/en/privacy/' | relative_url }}" target="_blank">privacy policy</a>.</label>
    </div>
    <span class="form-error" id="consent-error"></span>
    <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center">send message →</button>
  </form>
</div>

<!-- LINKS -->
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
  var BLOCKED = [
    "mailinator.com","guerrillamail.com","spam4.me","tempmail.com","temp-mail.org",
    "temp-mail.io","throwam.com","trashmail.com","trashmail.me","yopmail.com",
    "sharklasers.com","grr.la","maildrop.cc","discard.email","discardmail.com",
    "10minutemail.com","20minutemail.com","mintemail.com","mytrashmail.com",
    "mailnesia.com","tempr.email","tempinbox.com","tempomail.fr","mailzilla.com"
  ];
  var form         = document.getElementById('contact-form');
  var emailInput   = document.getElementById('form-email');
  var emailError   = document.getElementById('email-error');
  var emailIcon    = document.getElementById('email-icon');
  var consentInput = document.getElementById('form-consent');
  var consentError = document.getElementById('consent-error');
  function getDomain(email) { var p=email.split('@'); return p.length===2?p[1].toLowerCase().trim():''; }
  function validateEmail(email) {
    var re=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if(!re.test(email)) return 'Please enter a valid email.';
    var domain=getDomain(email);
    if(BLOCKED.indexOf(domain)!==-1) return 'Disposable email addresses are not accepted.';
    if(domain.indexOf('.')===-1) return 'The email domain does not look valid.';
    return null;
  }
  function showFeedback(msg) {
    if(msg){emailError.textContent=msg;emailIcon.textContent='✖';emailIcon.style.color='var(--red)';emailInput.classList.add('form-input--error');emailInput.classList.remove('form-input--ok');}
    else if(emailInput.value.trim()){emailError.textContent='';emailIcon.textContent='✔';emailIcon.style.color='var(--green)';emailInput.classList.remove('form-input--error');emailInput.classList.add('form-input--ok');}
    else{emailError.textContent='';emailIcon.textContent='';emailInput.classList.remove('form-input--error','form-input--ok');}
  }
  emailInput.addEventListener('blur',function(){if(!emailInput.value.trim()){showFeedback(null);return;}showFeedback(validateEmail(emailInput.value.trim()));});
  emailInput.addEventListener('input',function(){if(!emailInput.classList.contains('form-input--error')&&!emailInput.classList.contains('form-input--ok'))return;if(!emailInput.value.trim()){showFeedback(null);return;}showFeedback(validateEmail(emailInput.value.trim()));});
  consentInput.addEventListener('change',function(){if(consentInput.checked)consentError.textContent='';});
  form.addEventListener('submit',function(e){var err=validateEmail(emailInput.value.trim());if(err){e.preventDefault();showFeedback(err);emailInput.focus();return;}if(!consentInput.checked){e.preventDefault();consentError.textContent='You must accept the privacy policy to continue.';consentInput.focus();}});
})();
</script>
