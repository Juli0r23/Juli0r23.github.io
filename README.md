# juli0r23.github.io

Portfolio personal y blog técnico de Julio A. Romero Ramírez, estudiante de ASIR (Administración de Sistemas Informáticos en Red).

🌐 **[juli0r23.github.io](https://juli0r23.github.io)**

![Jekyll](https://img.shields.io/badge/Jekyll-4.3-CC0000?style=flat-square&logo=jekyll&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-22863a?style=flat-square&logo=github)
![License](https://img.shields.io/badge/license-MIT-58a6ff?style=flat-square)

---

## Sobre el sitio

Portafolio con tema terminal dark construido con Jekyll y desplegado en GitHub Pages. Incluye blog técnico con apuntes de redes, Linux y administración de sistemas.

## Secciones

| Página | Descripción |
|---|---|
| `/` | Inicio con presentación y últimas entradas |
| `/blog/` | Apuntes técnicos de clase y laboratorios |
| `/proyectos/` | Proyectos personales y de clase *(en construcción)* |
| `/cv/` | Curriculum vitae |
| `/contacto/` | Formulario de contacto y redes sociales |

## Stack

- **Jekyll 4.3** — generador de sitios estáticos
- **GitHub Pages** — hosting gratuito
- **JetBrains Mono + Inter** — tipografía
- **Formspree** — formulario de contacto sin backend

## Estructura

```
├── _layouts/
│   ├── default.html     ← Layout base (nav + footer)
│   └── post.html        ← Layout de posts del blog
├── _includes/
│   ├── nav.html         ← Navegación
│   └── footer.html      ← Pie de página
├── _posts/              ← Entradas del blog (Markdown)
├── assets/css/
│   └── style.scss       ← Todos los estilos
├── _config.yml          ← Configuración general ★
├── index.html           ← Página de inicio
├── blog.html            ← Listado de posts
├── proyectos.md         ← Proyectos
├── cv.md                ← Curriculum vitae
└── contacto.md          ← Página de contacto
```

## Instalación local

```bash
gem install jekyll bundler
bundle install
bundle exec jekyll serve
# Abre http://localhost:4000
```

## Añadir un post

Crea un archivo en `_posts/` con el formato `AAAA-MM-DD-titulo.md`:

```yaml
---
layout: post
title: "Título del post"
categories: [redes]   # redes | linux | sysadmin | seguridad
tag_color: red        # red | blue | cyan | green | yellow
date: 2026-10-01
reading_time: 5
description: "Meta description para SEO (160 caracteres máx)."
excerpt: "Descripción breve que aparece en el listado."
---

Contenido en Markdown...
```

## Colores de tags

| tag_color | Color  | Uso sugerido        |
|-----------|--------|---------------------|
| red       | Rojo   | Redes, Cisco        |
| blue      | Azul   | Linux, sistemas     |
| cyan      | Cyan   | Sysadmin, configs   |
| green     | Verde  | Scripting, PHP      |
| yellow    | Amarillo | Seguridad, alertas |

---
