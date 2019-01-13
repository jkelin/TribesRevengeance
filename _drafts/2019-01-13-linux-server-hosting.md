---
layout: post
title: Hosting Tribes Vengeance on Linux
description: How to setup and optimize Tribes server on Linux
date: Mon, 13 Jan 2019 21:28:43 GMT
permalink: /tutorials/serverhosting/linux/
author: Fireant
categories: serverhosting
---

This guide is a high level overview on hosting tribes on Linux. I will not cover again what is said in [Server Setup Guide](/tutorials/serverhosting/serversetup/). I assume that you are sufficiently familiar with Linux and terminal. This guide is written for Ubuntu server 18.04, however all commands can easily be translated for other distros.

**TLDR**: The server is run via Wine. Tribes needs GUI output, for which we use [Xvfb](https://en.wikipedia.org/wiki/Xvfb).

## Setup

1. Install prerequisites: `wine`, `p7zip-full`, `xvfb`
  - `sudo apt install -y wine p7zip-full xvfb`
2. Create Tribes installation folder, I will use `/Tribes`
3. Either
  - Install Tribes via Wine GUI
  - Download [ReadyToRunServer.7z]({{ site.downloads_url | append: "/all/ReadyToRunServer.7z" }}) and extract it to `/Tribes`
4. Configure (xvfb systemd service)[#Xvfb].
5. Experimentally start game server on xvfb display `DISPLAY=:1 wine /Tribes/Program/Bin/Beta_Dedicated_Server.exe`. Make sure that it works properly.

### Systemd services

Systemd is a Linux equivalent to Windows services. Systemd service can be started/stopped/enabled/disabled and set to autostart and autorestart. For example to configure xvfb:

1. `sudo nano /etc/systemd/system/xvfb.service` Service are placed into this directory
2. Paste/edit (service config)[#Xvfb]
3. `sudo systemctl daemon-reload` This makes systemd load updated config
4. `sudo systemctl start xvfb` This starts a service
5. `sudo systemctl status xvfb` Print status (running/dead) and last logs
6. `sudo systemctl enable xvfb` Enables xvfb service to autostart

#### Xvfb
```
[Unit]
Description=X Virtual Frame Buffer Service
After=network.target

[Service]
ExecStart=/usr/bin/Xvfb :1 -screen 0 1024x768x24 -ac

[Install]
WantedBy=multi-user.target
```

#### Game server
```
[Unit]
Description=Tribes Vengeance Main server
After=network.target
After=xvfb.service

[Service]
ExecStart=/Tribes/Program/Scripts/main.sh
Nice=-20
User=tribes
Group=tribes
Environment=DISPLAY=:1
WorkingDirectory=/Tribes/Program/Scripts

[Install]
WantedBy=multi-user.target
```
