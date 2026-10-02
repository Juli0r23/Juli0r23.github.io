---
layout: post
title: "Servidor Debian 13: instalación desde cero paso a paso"
categories: [linux]
tag_color: blue
date: 2026-09-22
reading_time: 3
description: "Guía de instalación y configuración básica de Debian 13 como servidor: IP estática, gateway, DNS y verificación de conectividad."
excerpt: "Guía de instalación y configuración básica de Debian 13 como servidor, con IP estática y servicios esenciales."
---

## Descarga e instalación

Descarga la ISO de Debian desde [debian.org](https://debian.org) y crea un USB booteable con Rufus o Balena Etcher.

Durante la instalación, selecciona solo **SSH server** y **System utilities** — sin entorno gráfico para un servidor.

## Configurar IP estática

Edita el archivo de interfaces de red:

```bash
nano /etc/network/interfaces
```

Añade tu configuración:

```
auto eth0
iface eth0 inet static
    address 192.168.1.100
    netmask 255.255.255.0
    gateway 192.168.1.1
    dns-nameservers 8.8.8.8 1.1.1.1
```

Reinicia el servicio de red:

```bash
systemctl restart networking
```

## Verificar conectividad

```bash
ip addr show
ping -c 4 8.8.8.8
```

## Actualizar el sistema

```bash
apt update && apt upgrade -y
```

Con esto tienes un servidor Debian 13 listo para instalar cualquier servicio encima.
