---
layout: post
title: "SSH hardening: cómo securizar tu servidor en 10 minutos"
categories: [sysadmin]
tag_color: cyan
date: 2026-09-15
excerpt: "Configuración básica para endurecer SSH y evitar accesos no autorizados a tu servidor Linux."
---

## ¿Por qué hacer hardening de SSH?

Si tu servidor tiene la IP pública expuesta, recibirás intentos de fuerza bruta constantemente. Con unos pocos cambios en la configuración reduces drásticamente la superficie de ataque.

## Editar sshd_config

```bash
nano /etc/ssh/sshd_config
```

Cambios recomendados:

```bash
# Cambiar el puerto por defecto
Port 2222

# Deshabilitar login de root
PermitRootLogin no

# Deshabilitar autenticación por contraseña (usa claves)
PasswordAuthentication no

# Máximo de intentos de login
MaxAuthTries 3

# Tiempo máximo de autenticación
LoginGraceTime 30
```

## Generar clave SSH

En tu máquina local:

```bash
ssh-keygen -t ed25519 -C "tu@email.com"
ssh-copy-id -p 2222 usuario@ip-servidor
```

## Reiniciar SSH

```bash
systemctl restart sshd
```

> ⚠️ Antes de cerrar la sesión, abre una nueva terminal y comprueba que puedes conectarte con la clave. Si algo falla y cierras la sesión, te quedas sin acceso.

## Extra: Fail2ban

Instala Fail2ban para banear IPs que hagan demasiados intentos fallidos:

```bash
apt install fail2ban -y
systemctl enable fail2ban
```

Con esto tu servidor ya está bastante más protegido.
