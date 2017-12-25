---
layout: page
title: Tutorials
keywords: tribesrevengeance, tribes, vengeance, revengeance, customized, fx, hudscript, hud, quickchat, reticle, crosshair
description: Tutorials page
permalink: /tutorials/
---

To seperate the large volume of tutorials, we have decided to make 6 subsections:



## Getting Started
Here you will find all guides that will help you get the game up and running.

{% for post in site.categories.getting_started %}
  - [{{ post.title }}]({{ post.url | relative_url }})
    - {{ post.description }}
{% endfor %}


## Performance Tweaks
Here you will find all tutorials on how to improve your fps, ping, etc.

{% for post in site.categories.performance %}
  - [{{ post.title }}]({{ post.url | relative_url }})
    - {{ post.description }}
{% endfor %}


## Server Hosting
Here you will find out how to host your own server.

{% for post in site.categories.hosting %}
  - [{{ post.title }}]({{ post.url | relative_url }})
    - {{ post.description }}
{% endfor %}

## Singleplayer
Here you will find all walkthroughs concerning the singleplayer.

{% for post in site.categories.singleplayer %}
  - [{{ post.title }}]({{ post.url | relative_url }})
    - {{ post.description }}
{% endfor %}


## Gameplay
Here you will find all tutorials and tips and tricks on how to improve your gameplay.

{% for post in site.categories.gameplay %}
  - [{{ post.title }}]({{ post.url | relative_url }})
    - {{ post.description }}
{% endfor %}


## Miscellaneous
Here you will find all guides that do not fit in any other the above sections.

{% for post in site.categories.miscellaneous %}
  - [{{ post.title }}]({{ post.url | relative_url }})
    - {{ post.description }}
{% endfor %}

* * *

Should you notice there are topics that aren't planned to be covered, then feel free to contact us by using the contact page. These topics are on the menu as of now (not ordered!):

- Tribes AI
- Console Commands
- Server configuration
- How to install mods
- How to install fx, ...
- How to configurate your quickchat
- Overview of all short words + meaning (HO, LT, ...)
- TVBP (Team rabbit, ...)
- No cd key bug fix
- World Machine
- Creating map image
- Mapping
- Skinning
- Modding
- Adding speedbar
- Installing no cd exe
- Keychanger
- Files for playbacking any demo
- Tribes Vengeance Launcher
- Game modes (CTF, Rabbit, ...)
- Rypelcam
- Mojo
- Creating HD T:V vids
- Single player walktroughs + demo walktroughs
- known bugs + fixes
- Manually finding cache file for demo playback
- Fargoing explanation of mods and what they do
- Gaining and maintaining momentum, energy management; from basic to advanced
- Different roles in the game + explanation
- How to identify potentional flag routes + many examples
- Overview + explanation of all weapons, packs, armour types, deployables, verhicles, ...
