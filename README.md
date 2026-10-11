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

[![Deploy](https://img.shields.io/badge/▶_deploy-online-00ff88?style=flat-square&labelColor=0d1824)](https://julior23.es)
[![Jekyll](https://img.shields.io/badge/Jekyll-4.3-CC0000?style=flat-square&logo=jekyll&logoColor=white&labelColor=0d1824)](https://jekyllrb.com)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deployed-58a6ff?style=flat-square&logo=github&labelColor=0d1824)](https://pages.github.com)
[![Posts](https://img.shields.io/badge/posts_ES-3-39d0d8?style=flat-square&labelColor=0d1824)](#-ls-_posts---sorttime)
[![Posts EN](https://img.shields.io/badge/posts_EN-3-39d0d8?style=flat-square&labelColor=0d1824)](#-versión-en-inglés-en)
[![i18n](https://img.shields.io/badge/i18n-ES_%2F_EN-e3b341?style=flat-square&labelColor=0d1824)](#-versión-en-inglés-en)
[![License](https://img.shields.io/badge/license-MIT-e3b341?style=flat-square&labelColor=0d1824)](LICENSE)

**`$ ls -1 secciones/`**
[Secciones](#-secciones-del-sitio) · [Estructura](#-ls--la-) · [Stack](#-cat-stacktxt) · [Rendimiento](#-cat-performancetxt) · [Writeups](#-ls-writeups--r) · [Instalación](#-jekyll-serve-instalación-local) · [EN](#-versión-en-inglés-en)

</div>

---

```bash
julio@server:~$ whoami
> Portfolio personal + blog técnico + writeups de pentesting · tema terminal dark
> Jekyll 4.3 · GitHub Pages · sin backend · sin frameworks CSS · ES/EN
julio@server:~$ █
```

---

## `$ cat tabla-contenidos.md`

1. [Secciones del sitio](#-secciones-del-sitio)
2. [Estructura del repositorio](#-ls--la-)
3. [Stack técnico](#-cat-stacktxt)
4. [Rendimiento y optimización](#-cat-performancetxt)
5. [Instalación local](#-jekyll-serve-instalación-local)
6. [Añadir una entrada al blog](#-nano-_postsaaaa-mm-dd-mi-postmd-añadir-entrada-al-blog)
7. [Añadir un writeup](#-nano-_writeupsmaquinamd-añadir-un-writeup)
8. [Variables globales (`_config.yml`)](#-cat-_configyml-variables-globales)
9. [Funcionalidades](#-cat-featurestxt)
10. [Changelog](#-cat-changelogmd)
11. [Contacto](#-ping-contactojulior23es)

---

## 🗺️ Secciones del sitio

| Sección | Ruta | Descripción |
|---|---|---|
| 🏠 **Inicio** | `/` · [`/en/`](#-versión-en-inglés-en) | Hero con terminal animado (typing effect), stack técnico, últimas entradas del blog |
| 📝 **Blog** | `/blog/` · `/en/blog/` | Apuntes técnicos con filtros por categoría (sin recarga de página) |
| 🏴 **Writeups** | `/writeups/` | Resolución de máquinas de **DockerLabs** y **TryHackMe**, agrupadas por plataforma y dificultad |
| 💼 **Proyectos** | `/proyectos/` · `/en/projects/` | Proyectos personales (en construcción) |
| 📄 **CV** | `/cv/` · `/en/cv/` | Currículum con descarga en PDF y estilos de impresión propios |
| ✉️ **Contacto** | `/contacto/` · `/en/contact/` | Formulario (Formspree, sin backend) + enlaces a GitHub/LinkedIn |
| ⚖️ **Legal** | `/aviso-legal/` · `/privacidad/` | Aviso legal y política de privacidad (ES/EN) |
| 🚫 **404** | `404.html` | Página de error con terminal animado propio |

Todo el sitio está disponible en **español** (idioma por defecto) e **inglés**, con `hreflang` cruzado entre ambas versiones y un selector de idioma (🇪🇸/🇬🇧) en la barra de navegación.

---

## `$ ls -la /`

```
drwxr-xr-x   /                      ← raíz del proyecto
│
├── drwxr-xr-x  _layouts/           ← plantillas base
│   ├── default.html                  → <head>, nav, footer, botón volver arriba
│   ├── post.html                     → entradas de blog (ToC, progreso de lectura)
│   └── writeups.html                 → ficha de máquina resuelta
│
├── drwxr-xr-x  _includes/          ← componentes reutilizables
│   ├── nav.html                      → menú (desktop + móvil + selector ES/EN)
│   └── footer.html                   → pie con easter egg
│
├── drwxr-xr-x  _posts/             ← entradas del blog en ESPAÑOL (3)
├── drwxr-xr-x  _en_posts/          ← entradas del blog en INGLÉS (3)
├── drwxr-xr-x  _writeups/          ← máquinas resueltas (DockerLabs / TryHackMe)
│
├── drwxr-xr-x  assets/
│   ├── css/style.scss                → TODOS los estilos, sin excepción
│   │                                    (cero <style> inline en el HTML:
│   │                                     se descarga y cachea UNA sola vez)
│   ├── js/main.js                    → TODO el JavaScript (un solo archivo, defer)
│   ├── cv-julio-romero.pdf           → CV descargable
│   └── img/                          → favicons + og-preview.png
│
├── drwxr-xr-x  en/                 ← versión en inglés del sitio
│   ├── index.html · blog.html
│   ├── cv.md · projects.md · contact.md
│   └── legal-notice.md · privacy.md
│
├── drwxr-xr-x  writeups/           ← índices estáticos de /writeups/
│   ├── index.html                    → portada (tarjetas DockerLabs / TryHackMe)
│   ├── dockerlabs/index.html         → listado agrupado por dificultad
│   └── thm/index.html                → listado agrupado por dificultad
│
├── drwxr-xr-x  .github/workflows/
│   └── deploy.yml                  ← build + deploy automático en cada push a main
│
├── -rw-r--r--  _config.yml         ← ⭐ configuración global del sitio
├── -rw-r--r--  Gemfile             ← dependencias Ruby (Jekyll + plugins)
├── -rw-r--r--  CNAME               ← dominio personalizado (julior23.es)
├── -rw-r--r--  robots.txt          ← permite indexación + referencia al sitemap
├── -rw-r--r--  404.html            ← página de error personalizada
│
├── -rw-r--r--  index.html          ← inicio (ES)
├── -rw-r--r--  blog.html           ← listado con filtros por categoría (ES)
├── -rw-r--r--  cv.md               ← CV con modo impresión (ES)
├── -rw-r--r--  proyectos.md        ← proyectos (ES, en construcción)
├── -rw-r--r--  contacto.md         ← formulario Formspree + redes (ES)
├── -rw-r--r--  aviso-legal.md      ← aviso legal (ES)
└── -rw-r--r--  privacidad.md       ← política de privacidad (ES)
```

> 💡 Cada página en español tiene su equivalente exacto dentro de `/en/`, con el mismo diseño y la misma funcionalidad.

---

## `$ cat stack.txt`

| Capa | Tecnología | Notas |
|---|---|---|
| **Generador** | Jekyll 4.3 | build estático, sin servidor, sin base de datos |
| **Hosting** | GitHub Pages | deploy automático en cada push a `main` vía GitHub Actions |
| **Estilos** | SCSS vanilla | cero frameworks (ni Bootstrap ni Tailwind), todo custom, comprimido en build |
| **JavaScript** | Vanilla JS (`main.js`) | un solo archivo con `defer`, **cero dependencias ni frameworks** |
| **Tipografía** | JetBrains Mono + Inter | mono para código/terminal, sans para texto, carga no bloqueante |
| **Formulario** | Formspree | sin backend propio, sin JS extra |
| **Highlight** | Rouge + Kramdown | bloques de código con resaltado de sintaxis + botón copiar |
| **i18n** | Collections de Jekyll | `_posts`/`_en_posts` separados, `hreflang` cruzado ES/EN |
| **Writeups** | Collection `writeups` | agrupación automática por plataforma y nivel de dificultad |
| **Plugins** | `jekyll-feed` · `jekyll-seo-tag` · `jekyll-sitemap` | RSS, SEO (OpenGraph/Twitter Cards) y sitemap.xml listos de fábrica |

---

## ⚡ `$ cat performance.txt`

El sitio está construido para cargar **lo más rápido posible**, con especial cuidado en que nada bloquee el primer pintado de la página ni se repita innecesariamente entre navegaciones:

```
[✓] CSS 100% centralizado en un único archivo cacheable
    → cero <style> inline en ningún HTML del sitio: se descarga
      y cachea UNA sola vez para todas las páginas, en vez de
      repetirse en cada visita (antes se duplicaba en 8 páginas)

[✓] Google Fonts con carga no bloqueante
    → <link rel="preconnect"> + media="print" + onload (con
      <noscript> de respaldo) en vez de @import dentro del CSS
    → la tipografía ya no retrasa el primer pintado de la página

[✓] JavaScript sin duplicaciones
    → el script de zoom adaptativo solo se ejecuta UNA vez por
      carga (antes corría dos veces: inline en <head> y de nuevo
      dentro de main.js)

[✓] CSS comprimido en build (sass: style: compressed)
[✓] JS único con defer (no bloquea el parseo del HTML)
[✓] Sin imágenes pesadas: solo favicons + 1 og-preview (~85 KB)
[✓] Sin frameworks CSS/JS de terceros que descargar
[✓] Animaciones con IntersectionObserver (no con scroll listeners pesados)
[✓] Respeta prefers-reduced-motion en todas las animaciones
```

> 📎 Detalle completo de estos cambios en el [`changelog`](#-cat-changelogmd) — entrada `[2026-10-11]`.

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

## 🏴 `$ ls writeups/ -R`

Sección dedicada a la resolución de máquinas de plataformas de pentesting, con ficha propia por máquina (IP, SO, herramientas usadas, enlace a la máquina original) y agrupación automática por nivel de dificultad.

```
writeups/
├── dockerlabs/      ← niveles: muy-fácil · fácil · medio · difícil · experto
└── thm/             ← niveles: easy · medium · hard · insane  (TryHackMe)
```

Cada tarjeta de plataforma en `/writeups/` muestra el número de máquinas resueltas en tiempo real (calculado por Liquid a partir de la collection `writeups`), y cada nivel de dificultad tiene su propio color de tag reutilizando el sistema `.tag-*` del CSS.

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

## `$ nano _posts/AAAA-MM-DD-mi-post.md` — añadir entrada al blog

Crea el archivo con este frontmatter y escribe el contenido en Markdown. Para el blog en **inglés**, el mismo frontmatter va en `_en_posts/`:

```yaml
---
layout: post
title: "Título del post"
categories: [redes]          # redes | linux | sysadmin | seguridad
tag_color: red                # red | blue | cyan | green | yellow
date: 2026-10-05
reading_time: 5                # minutos de lectura (aparece en la cabecera)
description: "Meta description para SEO (máx. 160 caracteres)."
excerpt: "Texto breve que aparece en el listado del blog."
---

## Primer apartado

Contenido en Markdown...
```

> Los `##` del contenido se convierten automáticamente en la **tabla de contenidos** (ToC) flotante del post, con barra de progreso de lectura incluida.

---

## `$ nano _writeups/maquina.md` — añadir un writeup

Crea el archivo dentro de `_writeups/` con este frontmatter (puedes partir de `_writeups/ejemplo.md`):

```yaml
---
layout: writeup
title: "Nombre de la máquina"
platform: dockerlabs           # dockerlabs | thm
difficulty: facil              # dockerlabs: muy-facil|facil|medio|dificil|experto
                                # thm: easy|medium|hard|insane
date: 2026-10-10
permalink: /writeups/dockerlabs/nombre-de-la-maquina/
ip: 172.17.0.2                 # opcional
os: Linux                      # opcional
tools: [nmap, gobuster, linpeas]    # opcional
source_url: https://dockerlabs.es/...   # opcional, enlace a la máquina original
description: "Breve resumen de la máquina para el meta description"
---
```

Y después, debajo del frontmatter, el contenido en Markdown de siempre:

```markdown
## Enumeración

Descripción del escaneo inicial...

\`\`\`bash
nmap -sC -sV -p- 172.17.0.2
\`\`\`

## Explotación
...
```

> La máquina aparece automáticamente en `/writeups/<platform>/` agrupada por dificultad, y el contador de la tarjeta de plataforma en `/writeups/` se actualiza solo. No hace falta tocar ningún HTML.

---

## `$ cat _config.yml` — variables globales

```yaml
title:              "Julior23"
author:             "Julio A. Romero Ramírez"
email:              "contacto@julior23.es"
url:                "https://julior23.es"
github_username:    Juli0r23
linkedin_username:  julior23

cv:
  disponible: true
  ubicacion:  "Extremadura, España"
  curso:      "ASIR · 2º Año"

writeups_difficulty_order:
  dockerlabs: ["muy-facil", "facil", "medio", "dificil", "experto"]
  thm:        ["easy", "medium", "hard", "insane"]
```

Edita este archivo para actualizar nombre, email, redes o el orden/etiquetas de dificultad de los writeups en **todo el sitio** de una vez.

---

## `$ cat features.txt`

```
[✓] Typing effect en terminal del hero y en la página 404 (JS vanilla)
[✓] Toggle modo claro / oscuro  →  persiste en localStorage
[✓] Barra de progreso de lectura en posts
[✓] Tabla de contenidos flotante (escritorio) y colapsable (móvil)
[✓] Filtros de categoría en el blog (sin recarga de página)
[✓] Sección de writeups agrupada por plataforma y dificultad
[✓] Transiciones suaves entre páginas (fade-out/in)
[✓] Responsive completo · menú hamburguesa en móvil
[✓] Botón "volver arriba" con aparición suave
[✓] Modo impresión en el CV (estilos adaptados para PDF)
[✓] CV descargable en PDF
[✓] Sitio bilingüe ES/EN con hreflang cruzado y selector de idioma
[✓] Página 404 personalizada con terminal animado
[✓] SEO automático con jekyll-seo-tag (OpenGraph + Twitter Cards)
[✓] Datos estructurados Schema.org (Person, BlogPosting, Article)
[✓] RSS feed con jekyll-feed
[✓] Sitemap con jekyll-sitemap
[✓] Botón "copiar" en bloques de código con números de línea
[✓] Typing effect diferido (solo cuando el elemento es visible)
[✓] Google Fonts con carga no bloqueante (preconnect + media swap)
[✓] CSS 100% centralizado y cacheable (cero <style> inline en HTML)
[✓] Deploy automático a GitHub Pages con dominio propio (julior23.es)
```

---

## `$ cat changelog.md`

```
[2026-10-11] Optimización de rendimiento (carga y caché)
  · Google Fonts: el @import bloqueante dentro de style.scss se
    sustituye por <link rel="preconnect"> + carga no bloqueante
    (media="print" + onload) en el <head>, con <noscript> de respaldo
    → la fuente deja de retrasar el primer pintado de la página
  · Eliminada la duplicación del script de zoom adaptativo: antes se
    ejecutaba completo dos veces (inline en <head> y de nuevo dentro
    de main.js) en cada carga de página; ahora solo corre una vez
  · Todos los <style> que quedaban inline en el HTML (default.html,
    index.html, en/index.html, post.html, writeups.html y los 3
    índices de /writeups/) se mueven a assets/css/style.scss
    → ese CSS ahora se descarga y cachea UNA sola vez para todo el
      sitio, en vez de repetirse en cada página visitada
  · Reglas CSS duplicadas entre la home en español e inglés
    (idénticas en ambos idiomas) deduplicadas en style.scss

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

## 🌍 Versión en inglés (`/en/`)

El sitio completo tiene una versión en inglés que vive bajo `/en/`, con su propia collection de posts (`_en_posts/`), sus propias páginas de CV/proyectos/contacto/legal, y enlace cruzado `hreflang` con la versión en español para SEO. El selector de idioma (🇪🇸 / 🇬🇧) está disponible en la barra de navegación de cualquier página.

```
/en/              → inicio
/en/blog/         → blog (posts de _en_posts/)
/en/cv/           → CV
/en/projects/     → proyectos
/en/contact/      → contacto
/en/legal-notice/ → aviso legal
/en/privacy/      → privacidad
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

[⬆ volver arriba](#)

</div>
