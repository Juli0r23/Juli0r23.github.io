---
layout: default
title: CV
permalink: /cv/
---

<main class="page-wrap">

<div class="section-label">// curriculum vitae</div>

<div class="cv-header glass-card" style="margin-bottom:1.5rem">
  <h1 style="font-size:1.8rem;font-weight:600;color:#e6edf3;margin-bottom:.3rem">Julio Romero</h1>
  <p style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--green);margin-bottom:.75rem">Estudiante ASIR · Extremadura, España</p>
  <div style="display:flex;gap:1.5rem;flex-wrap:wrap;font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text2)">
    <span>📧 contacto@julior23.com</span>
    <span>🐙 github.com/julior23</span>
    <span>📍 Extremadura, ES</span>
  </div>
</div>

<div class="cv-grid">

  <div class="cv-col">

  <div class="cv-section">
  <div class="section-label">// formación</div>

  <div class="cv-item glass-card">
    <div class="cv-item-header">
      <span class="cv-title">Técnico Superior en ASIR</span>
      <span class="cv-date">2025 – actualidad</span>
    </div>
    <div class="cv-subtitle">Administración de Sistemas Informáticos en Red</div>
    <div class="cv-desc">2º año · Módulos: Redes Locales, SRI, Seguridad, Administración de Sistemas Operativos</div>
  </div>

  <div class="cv-item glass-card">
    <div class="cv-item-header">
      <span class="cv-title">Bachillerato Tecnológico</span>
      <span class="cv-date">2023 – 2025</span>
    </div>
    <div class="cv-subtitle">IES — Extremadura</div>
  </div>
  </div>

  <div class="cv-section">
  <div class="section-label">// proyectos</div>

  <div class="cv-item glass-card">
    <div class="cv-item-header">
      <span class="cv-title">Configuración red Debian 13</span>
      <span class="tag tag-cyan">SRI</span>
    </div>
    <div class="cv-desc">Instalación y configuración de servidor Debian 13 con IP estática, gateway y DNS. Puesto 14.</div>
  </div>

  <div class="cv-item glass-card">
    <div class="cv-item-header">
      <span class="cv-title">Prácticas PHP — Variables y Operadores</span>
      <span class="tag tag-blue">PHP</span>
    </div>
    <div class="cv-desc">36 ejercicios sobre variables, tipos de datos y operadores en PHP. Entrega por repositorio Git.</div>
  </div>

  </div>
  </div>

  <div class="cv-col">

  <div class="cv-section">
  <div class="section-label">// habilidades</div>
  <div class="glass-card">
    <div class="skill-group">
      <div class="skill-group-label">Redes</div>
      <div class="cv-tags">
        <span class="tag tag-red">Cisco IOS</span>
        <span class="tag tag-green">TCP/IP</span>
        <span class="tag tag-cyan">VLANs</span>
        <span class="tag tag-blue">OSPF</span>
        <span class="tag tag-green">DNS/DHCP</span>
      </div>
    </div>
    <div class="skill-group">
      <div class="skill-group-label">Sistemas</div>
      <div class="cv-tags">
        <span class="tag tag-cyan">Linux</span>
        <span class="tag tag-blue">Windows Server</span>
        <span class="tag tag-yellow">Bash</span>
        <span class="tag tag-green">SSH</span>
        <span class="tag tag-red">Apache/Nginx</span>
      </div>
    </div>
    <div class="skill-group">
      <div class="skill-group-label">Desarrollo</div>
      <div class="cv-tags">
        <span class="tag tag-blue">PHP</span>
        <span class="tag tag-green">HTML/CSS</span>
        <span class="tag tag-yellow">Git</span>
      </div>
    </div>
    <div class="skill-group" style="border:none;margin:0;padding-bottom:0">
      <div class="skill-group-label">Idiomas</div>
      <div class="cv-tags">
        <span class="tag tag-green">Español (nativo)</span>
        <span class="tag tag-blue">Inglés (B1)</span>
      </div>
    </div>
  </div>
  </div>

  <div class="cv-section">
  <div class="section-label">// certificaciones</div>
  <div class="cv-item glass-card">
    <div class="cv-item-header">
      <span class="cv-title">En progreso...</span>
      <span class="tag tag-yellow">2026</span>
    </div>
    <div class="cv-desc">CCNA, CompTIA Network+ · Objetivo para 2027</div>
  </div>
  </div>

  </div>

</div>

<div style="margin-top:2rem;text-align:center">
  <a href="/assets/cv-julio-romero.pdf" class="btn btn-primary" download>descargar PDF</a>
</div>

</main>

<style>
.cv-grid { display:grid;grid-template-columns:1fr 1fr;gap:1.5rem; }
.cv-section { margin-bottom:1.5rem; }
.cv-item { margin-bottom:0.75rem; }
.cv-item-header { display:flex;justify-content:space-between;align-items:flex-start;gap:.5rem;margin-bottom:.3rem; }
.cv-title { font-size:13.5px;font-weight:500;color:#e6edf3; }
.cv-date { font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);white-space:nowrap; }
.cv-subtitle { font-size:12.5px;color:var(--green);margin-bottom:.3rem;font-family:'JetBrains Mono',monospace; }
.cv-desc { font-size:12.5px;color:var(--text2);line-height:1.6; }
.skill-group { padding:.75rem 0;border-bottom:1px solid var(--glass-border); }
.skill-group-label { font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem; }
.cv-tags { display:flex;flex-wrap:wrap;gap:.4rem; }
.cv-header { display:flex;flex-direction:column; }
@media (max-width:640px) { .cv-grid { grid-template-columns:1fr; } }
</style>
