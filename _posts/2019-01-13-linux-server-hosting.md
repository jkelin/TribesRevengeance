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
4. Configure [xvfb systemd service](#xvfb).
5. Experimentally start game server on xvfb display `DISPLAY=:1 wine /Tribes/Program/Bin/Beta_Dedicated_Server.exe`. Make sure that it works properly.
5. Configure [game server systemd service](#game-server).

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

## Tips

* You can use low-latency kernel
* Set Wine process to be high priority. You can also use path your kernel with a deadline scheduler and use deadline priority
* You can set `WINEDEBUG=-all` environment variable which disables Wine debug information. This could help with performance.
* Make sure that you optimize settings for your system like buffer sizes and so on
* Network connection or network card seems to be more important than CPU
* You can configure a VNC server to show your xvfb display, you can then see game log via VNC. This does not work very well hovever.

## Useful scripts

### main.sh
```
#!/bin/bash

name=main
map=MP-REV-CanyonCrusade
mode=GameClasses.ModeCTF
mutator=antics_v5.antics,promod_v1rc7_b3.promod

CONFIG_PATH=/Tribes/Program/Config/$name.ini node /Tribes/Program/Scripts/shuffleMaps.js

cd ../Bin
WINEDEBUG=-all wine Beta_Dedicated_Server.exe "${map}?game=${mode}?maxplayers=32?mutator=$mutator" -server "ini=../Config/${name}.ini" "log=../Logs/${name}_$(date +%Y-%m-%d_%H:%M:%S).log"
```

### shuffleMaps.js
NodeJs utility that shuffles maps in TV config.ini. On our server it runs every midnight via CRON.

```
var fs = require('fs')
var filePath = process.env.CONFIG_PATH;

console.info('CONFIG_PATH =', filePath);
if(!filePath || !fs.existsSync(filePath)) {
        console.error('CONFIG_PATH not set or pointing to nonexistent file');
        process.exit(1);
}

// load all the lines from CONFIG_PATH
var lines = fs.readFileSync(filePath, 'utf-8')
    .split('\r\n')
    .filter(Boolean);

console.info('Maps in:', lines.filter(function(line){ return /^Maps=/i.test(line) }).map(function(line){ return line.replace(/^Maps=/i, '') }));

// find all lines matching ^Maps= regex
var shuffleAbleLines = lines
        .map(function(line, i){ return { text: line, lineN: i } })
        .filter(function(line){ return /^Maps=/i.test(line.text) })
        .map(function(line){ return line.lineN });

// randomly select two lines and switch them in lines array
for(var i = 0; i < 100; i += 1) {
        var sourceLine = shuffleAbleLines[Math.floor(Math.random() * shuffleAbleLines.length)];
        var targetLine = shuffleAbleLines[Math.floor(Math.random() * shuffleAbleLines.length)];

        var acc = lines[sourceLine];
        lines[sourceLine] = lines[targetLine];
        lines[targetLine] = acc;
}

console.info('Maps out:', lines.filter(function(line){ return /^Maps=/i.test(line) }).map(function(line){ return line.replace(/^Maps=/i, '') }));

// save lines back to the CONFIG_PATH
fs.writeFileSync(filePath, lines.join('\r\n'));
```

### updatePriorities.sh
This sets proper priorities to the server process. We run it every second via CRON. You need to have `schedtool` utility that can set deadline schedule to a process.

```
#!/bin/bash

id=$(pgrep -f 'Beta_Dedicated_Server')

#taskset -cp 3 $id
renice -20 -p $id
chrt -f -p 99 $id
/Tribes/Program/Scripts/schedtool -E -t 100000000:1000000 $id
```
