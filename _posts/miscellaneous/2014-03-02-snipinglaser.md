---
layout: post
title: Fix Sniper Laser Tutorial
keywords: tribesrevengeance, tribes, vengeance, revengeance, tutorial, guide, fix, sniper, lazer, reticle
description: Sniper Laser Turorial page. Here you learn how to fix the sniper laser.
date: 02/03/2014
permalink: /tutorials/miscellaneous/snipinglaser/
author: Originally written by MalOx. Updated by Cobra and HighDive
categories: miscellaneous
---

On this page you will find out how to fix the sniping laser.

If you have tried sniping before, you might know that the laser does not hit the target dead on. Follow these steps to resolve this issue:

1. **Go** to the **`.../VUGames/Tribes Vengeance/Content/System`** folder
2. **Open** the **`TribesHUD.ini`** file
3. **Search** the following line, by using CTRL + F: `[default_weaponReticule]`

4. **Look** for the following lines:
    ```
    scale=1.0 
    zoomReticuleWidth=256 
    zoomReticuleHeight=256 
    zoomReticuleCenterX=128 
    zoomReticuleCenterY=120
    ```
  
5. The line you want to tweak is the **last** one. It is this value that causes some problems.

**NOTE** : These lines may not exist in your TribesHUD.ini. This is usually the case with some custom HUDs. However, you can simply copy paste the code lines above tomake the fix work.

**NOTE** : The above tweak is optimized for a resolution of 1200x1024. 120 seems about right for a resolution of 1200x1024. A value between 124 and126 should be about right for people running 1024x768. It is necessary you tweak the value a bit by yourself, to get the best result. There are no "holy numbers" which work for everyone.

  