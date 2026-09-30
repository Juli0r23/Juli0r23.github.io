# julior23.github.io

Portfolio personal + blog de ASIR con tema terminal dark + liquid glass.

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

## Personalización

Edita `_config.yml` para cambiar tu nombre, email, usuario de GitHub, etc.

## Añadir un post

Crea un archivo en `_posts/` con el formato `AAAA-MM-DD-titulo.md`:

```yaml
---
layout: post
title: "Título del post"
categories: [redes]   # redes | linux | sysadmin | php | seguridad
tag_color: red        # red | blue | cyan | green | yellow
date: 2026-10-01
excerpt: "Descripción breve que aparece en el listado."
---

Contenido en Markdown...
```

## Colores de tags disponibles

| tag_color | Color    | Uso sugerido       |
|-----------|----------|--------------------|
| red       | Naranja  | Redes, Cisco       |
| blue      | Azul     | Linux, sistemas    |
| cyan      | Cyan     | Sysadmin, configs  |
| green     | Verde    | PHP, scripting     |
| yellow    | Amarillo | Seguridad, alertas |
