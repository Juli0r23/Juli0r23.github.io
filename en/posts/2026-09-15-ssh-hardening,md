---
layout: post
title: "SSH hardening: how to secure your server in 10 minutes"
categories: [sysadmin]
tag_color: cyan
date: 2026-09-15
reading_time: 4
lang: en
lang_es_url: /2026/09/15/ssh-hardening/
description: "Basic configuration to harden SSH and prevent unauthorised access to your Linux server: port change, ed25519 keys and Fail2ban."
excerpt: "Basic configuration to harden SSH and prevent unauthorised access to your Linux server."
---

## Why harden SSH?

If your server has a public IP exposed, you will receive brute-force attempts constantly. A few changes to the configuration drastically reduce the attack surface.

## Edit sshd_config

```bash
nano /etc/ssh/sshd_config
```

Recommended changes:

```bash
# Change the default port
Port 2222

# Disable root login
PermitRootLogin no

# Disable password authentication (use keys instead)
PasswordAuthentication no

# Maximum login attempts
MaxAuthTries 3

# Maximum authentication time
LoginGraceTime 30
```

## Generate an SSH key

On your local machine:

```bash
ssh-keygen -t ed25519 -C "you@email.com"
ssh-copy-id -p 2222 user@server-ip
```

## Restart SSH

```bash
systemctl restart sshd
```

> ⚠️ Before closing your session, open a new terminal and verify you can connect with the key. If something goes wrong and you close the session, you will lose access.

## Extra: Fail2ban

Install Fail2ban to ban IPs that make too many failed attempts:

```bash
apt install fail2ban -y
systemctl enable fail2ban
```

With this, your server is significantly more protected.
