---
layout: post
title: Improve Smoothness
keywords: tribesrevengeance, tribes, vengeance, revengeance, tutorial, guide, improve, smoothness, memory, cache
description: Improve Smoothness Tutorial page. Here, you find out how to improve the smoothness of the game!
date: 02/03/2014
permalink: /tutorials/performancetweaks/increasesmoothness/
author: Originally written by MalOx. Updated by Cobra and HighDive.
categories: performance
---

On this page you will find out how you can let your game run smoother.

1. **Browse** to your `../VUGames/Tribes Vengeance/Program/Bin` folder and **find** your `TV_CD_DVD.ini` file.
2. **Open** the file by using a text editing program, like notepad. 
3. **Find** the following, by using CTRL + F: `[Engine.GameEngine]`
4. **Set** `CacheSizeMegs=56` to `CacheSizeMegs=[GRAPHICAL PROCESSING UNIT RAM / 2]`
 ![](cachesize.jpg)  

With "Graphical processing unit ram" we mean the amount of memory your graphics cards have. Does your GPU have 1GB memory, then use **516** as value. Does your graphics card have 2GB, use **1024** and so on.
