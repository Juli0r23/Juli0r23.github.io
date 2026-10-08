---
layout: post
title: "Configuring VLANs on Cisco: class notes"
categories: [networking]
tag_color: red
date: 2026-09-30
reading_time: 3
lang: en
lang_es_url: /2026/09/30/vlans-cisco/
description: "How to create and assign VLANs on a Cisco switch step by step: access ports, trunk ports and verification with show vlan brief."
excerpt: "How to create and assign VLANs on a Cisco switch step by step, with the commands I use most in class."
---

## What is a VLAN?

A VLAN (Virtual LAN) lets you segment a physical network into several independent logical networks within the same switch — like having multiple switches in one.

## Basic commands

Enter global configuration mode:

```bash
Switch> enable
Switch# configure terminal
```

Create a VLAN:

```bash
Switch(config)# vlan 10
Switch(config-vlan)# name ADMINISTRATION
Switch(config-vlan)# exit
```

Assign a port to the VLAN:

```bash
Switch(config)# interface FastEthernet 0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
```

Configure a trunk port (to connect switches):

```bash
Switch(config)# interface GigabitEthernet 0/1
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20,30
```

## Verify the configuration

```bash
Switch# show vlan brief
Switch# show interfaces trunk
```

## Conclusion

VLANs are fundamental in any enterprise network. With these commands you can already create a basic segmentation on any Cisco switch.
