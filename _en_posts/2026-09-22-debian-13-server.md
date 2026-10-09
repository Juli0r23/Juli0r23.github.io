---
layout: post
title: "Debian 13 server: step-by-step installation from scratch"
categories: [linux]
tag_color: blue
date: 2026-09-22
reading_time: 3
lang: en
lang_es_url: /2026/09/22/servidor-debian-13/
description: "Installation and basic configuration guide for Debian 13 as a server: static IP, gateway, DNS and connectivity verification."
excerpt: "Installation and basic configuration guide for Debian 13 as a server, with static IP and essential services."
---

## Download and installation

Download the Debian ISO from [debian.org](https://debian.org) and create a bootable USB with Rufus or Balena Etcher.

During installation, select only **SSH server** and **System utilities** — no graphical environment for a server.

## Configure a static IP

Edit the network interfaces file:

```bash
nano /etc/network/interfaces
```

Add your configuration:

```
auto eth0
iface eth0 inet static
    address 192.168.1.100
    netmask 255.255.255.0
    gateway 192.168.1.1
    dns-nameservers 8.8.8.8 1.1.1.1
```

Restart the networking service:

```bash
systemctl restart networking
```

## Verify connectivity

```bash
ip addr show
ping -c 4 8.8.8.8
```

## Update the system

```bash
apt update && apt upgrade -y
```

With this you have a Debian 13 server ready to install any service on top of it.
