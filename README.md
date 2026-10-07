```
╔══════════════════════════════════════════════════════════════════╗
║  julio@server:~$ cat README.md                                   ║
╚══════════════════════════════════════════════════════════════════╝
```

<div align="center">

```
     ██╗██╗   ██╗██╗     ██╗ ██████╗ ██████╗    ██████╗ ██████╗
     ██║██║   ██║██║     ██║██╔═══██╗██╔══██╗  ╚════██╗╚════██╗
     ██║██║   ██║██║     ██║██║   ██║██████╔╝   █████╔╝ █████╔╝
██   ██║██║   ██║██║     ██║██║   ██║██╔══██╗  ██╔═══╝  ╚═══██╗
╚█████╔╝╚██████╔╝███████╗██║╚██████╔╝██║  ██║  ███████╗██████╔╝
 ╚════╝  ╚═════╝ ╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═╝  ╚══════╝╚═════╝
```

**`Julio A. Romero Ramírez`** · Estudiante ASIR · Extremadura, España

[![Deploy](https://img.shields.io/badge/▶_deploy-online-00ff88?style=flat-square&labelColor=0d1824)](https://juli0r23.github.io)
[![Jekyll](https://img.shields.io/badge/Jekyll-4.3-CC0000?style=flat-square&logo=jekyll&logoColor=white&labelColor=0d1824)](https://jekyllrb.com)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deployed-58a6ff?style=flat-square&logo=github&labelColor=0d1824)](https://pages.github.com)
[![Posts](https://img.shields.io/badge/posts-3-39d0d8?style=flat-square&labelColor=0d1824)](#-blog)
[![License](https://img.shields.io/badge/license-MIT-e3b341?style=flat-square&labelColor=0d1824)](LICENSE)

</div>

---

```bash
julio@server:~$ whoami
> Portfolio personal + blog técnico · tema terminal dark
> Jekyll 4.3 · GitHub Pages · sin backend · sin frameworks CSS
julio@server:~$ █
```

---

## `$ ls -la /`

```
drwxr-xr-x   /                ← raíz del proyecto
├── drwxr-xr-x  _layouts/     ← plantillas base (default + post)
├── drwxr-xr-x  _includes/    ← componentes (nav + footer)
├── drwxr-xr-x  _posts/       ← entradas del blog en Markdown
├── drwxr-xr-x  assets/
│   ├── css/style.scss         ← TODOS los estilos (un solo archivo)
│   ├── js/main.js             ← TODO el JavaScript (un solo archivo, defer)
│   └── img/favicon.svg
├── -rw-r--r--  _config.yml   ← ⭐ configuración global
├── -rw-r--r--  index.html    ← página de inicio (con typing effect)
├── -rw-r--r--  blog.html     ← listado con filtros por categoría
├── -rw-r--r--  cv.md         ← CV (con modo impresión)
├── -rw-r--r--  proyectos.md  ← proyectos (en construcción)
└── -rw-r--r--  contacto.md   ← formulario Formspree + redes
```

---

## `$ cat stack.txt`

| Capa | Tecnología | Notas |
|------|-----------|-------|
| **Generador** | Jekyll 4.3 | build estático, sin servidor |
| **Hosting** | GitHub Pages | deploy automático en cada push |
| **Estilos** | SCSS vanilla | cero frameworks, todo custom |
| **JavaScript** | Vanilla JS (`main.js`) | un solo archivo con `defer`, sin dependencias |
| **Tipografía** | JetBrains Mono + Inter | mono para código, sans para texto |
| **Formulario** | Formspree | sin backend, sin JS extra |
| **Highlight** | Rouge + Kramdown | bloques de código con sintaxis |
| **Plugins** | jekyll-feed · jekyll-seo-tag · jekyll-sitemap | SEO y RSS listos |

---

## `$ ls _posts/ --sort=time`

```
2026-09-30   [redes]     VLANs en Cisco: access, trunk, show vlan brief
2026-09-22   [linux]     Servidor Debian 13: IP estática desde cero
2026-09-15   [sysadmin]  SSH hardening: sshd_config, ed25519, Fail2ban
```

### Categorías y colores de tags

```
tag_color: red     →  🔴  redes, Cisco IOS
tag_color: blue    →  🔵  linux, sistemas
tag_color: cyan    →  🩵  sysadmin, configs
tag_color: green   →  🟢  scripting, PHP
tag_color: yellow  →  🟡  seguridad, alertas
```

---

## `$ jekyll serve` — instalación local

```bash
# 1 · Clonar el repo
git clone https://github.com/Juli0r23/Juli0r23.github.io.git
cd Juli0r23.github.io

# 2 · Instalar dependencias Ruby
gem install jekyll bundler
bundle install

# 3 · Levantar servidor de desarrollo
bundle exec jekyll serve

# → Abre http://localhost:4000
```

> **Requisitos:** Ruby ≥ 3.0 · Bundler · Git

---

## `$ nano _posts/AAAA-MM-DD-mi-post.md` — añadir entrada

Crea el archivo con este frontmatter y escribe el contenido en Markdown:

```yaml
---
layout: post
title: "Título del post"
categories: [redes]          # redes | linux | sysadmin | seguridad
tag_color: red               # red | blue | cyan | green | yellow
date: 2026-10-05
reading_time: 5              # minutos de lectura (aparece en la cabecera)
description: "Meta description para SEO (máx. 160 caracteres)."
excerpt: "Texto breve que aparece en el listado del blog."
---

## Primer apartado

Contenido en Markdown...
```

> Los `##` del contenido se convierten automáticamente en la **tabla de contenidos** (ToC) flotante del post.

---

## `$ cat _config.yml` — variables globales

```yaml
title:              "Julior23"
author:             "Julio A. Romero Ramírez"
email:              "contacto@julior23.es"
url:                "https://juli0r23.github.io"
github_username:    Juli0r23
linkedin_username:  julior23

cv:
  disponible: true
  ubicacion:  "Extremadura, España"
  curso:      "ASIR · 2º Año"
```

Edita este archivo para actualizar nombre, email o redes en **todo el sitio** de una vez.

---

## `$ cat features.txt`

```
[✓] Typing effect en terminal del hero (JavaScript vanilla)
[✓] Toggle modo claro / oscuro  →  persiste en localStorage
[✓] Barra de progreso de lectura en posts
[✓] Tabla de contenidos flotante (escritorio) y colapsable (móvil)
[✓] Filtros de categoría en el blog (sin recarga de página)
[✓] Transiciones suaves entre páginas (fade-out/in)
[✓] Responsive completo · menú hamburguesa en móvil
[✓] Botón "volver arriba" con aparición suave
[✓] Modo impresión en el CV (estilos adaptados para PDF)
[✓] SEO automático con jekyll-seo-tag
[✓] RSS feed con jekyll-feed
[✓] Sitemap con jekyll-sitemap
[✓] Botón "copiar" en bloques de código con números de línea
[✓] Typing effect diferido (solo cuando el elemento es visible)
```

---

## `$ cat changelog.md`

```
[2026-10-07] Refactorización y optimización general
  · Todo el JavaScript consolidado en assets/js/main.js (defer)
    → eliminados todos los <script> inline de layouts y páginas
  · nav.html limpio de JS: toggle de tema gestionado por main.js
  · CSS inline de cv.md, blog.html y proyectos.md movido a style.scss
  · Colores hardcodeados (#e6edf3, etc.) reemplazados por variables CSS
    → .cv-title, .pif-title, .post-title usan var(--text)
  · Prefijos ./ en el nav generados por CSS (::before), no por el HTML
    → corregido el bug de doble barra (.//inicio → ./inicio)
  · Corregido bug de HTML roto en blog.html (comillas sin escapar
    en bloque terminal causaban volcado de CSS visible en página)
  · Función buildToc() restaurada en main.js
    → el índice lateral de posts volvía a aparecer vacío
  · Debounce añadido al listener de resize en el layout
```

---

## `$ ping contacto@julior23.es`

```
PING contacto@julior23.es · github.com/Juli0r23 · linkedin.com/in/julior23
disponible para prácticas · presencial en Extremadura o remoto · 2027
```

---

<div align="center">

`MIT License · © 2026 Julio A. Romero Ramírez`

</div>
