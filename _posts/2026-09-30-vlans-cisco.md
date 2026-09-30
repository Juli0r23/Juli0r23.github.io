---
layout: post
title: "Configurando VLANs en Cisco: apuntes de clase"
categories: [redes]
tag_color: red
date: 2026-09-30
excerpt: "Cómo crear y asignar VLANs en un switch Cisco paso a paso, con los comandos que más uso en clase."
---

## ¿Qué es una VLAN?

Una VLAN (Virtual LAN) permite segmentar una red física en varias redes lógicas independientes dentro del mismo switch. Es como tener varios switches en uno solo.

## Comandos básicos

Entrar en modo de configuración global:

```bash
Switch> enable
Switch# configure terminal
```

Crear una VLAN:

```bash
Switch(config)# vlan 10
Switch(config-vlan)# name ADMINISTRACION
Switch(config-vlan)# exit
```

Asignar un puerto a la VLAN:

```bash
Switch(config)# interface FastEthernet 0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
```

Configurar un puerto trunk (para conectar switches):

```bash
Switch(config)# interface GigabitEthernet 0/1
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20,30
```

## Verificar la configuración

```bash
Switch# show vlan brief
Switch# show interfaces trunk
```

## Conclusión

Las VLANs son fundamentales en cualquier red empresarial. Con estos comandos ya puedes crear una segmentación básica en cualquier switch Cisco.
