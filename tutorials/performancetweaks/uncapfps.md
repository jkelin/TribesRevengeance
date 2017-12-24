---
layout: page
title: Uncap FPS Tutorial
keywords: tribesrevengeance, tribes, vengeance, revengeance, tutorial, guide, fps, frames, per, second, uncap
description: Uncap FPS Tutorial page. Here, you find out how to uncap you frames per second!
date: 02/03/2014
permalink: /tutorials/performancetweaks/uncapfps/
---

# Uncap FPS

* * *

On this page you will find out how you can uncap your frames per second, or rather FPS. The frames per second number represent the amount of frames you see per second, hence the name. The higher the FPS value, the smoother the game may appear to be.

  

To find out what you FPS is you go ingame and type **stat fps** into the console and a number will pop-up.

Before tweaking anything, it is always recommended making a **backup** of the file you are about to tweak. Should something go wrong, you always have a backup. Failing to do so might force you to reinstall the game in a worst case scenario.

  

If you have a high-end graphics card, you may notice that value sits at a stable 90 frames per second. This means you have a graphics card, which most likely supports more then 90 FPS for Tribes Vengeance. In order to get more FPS, you must uncap it. You can do that by following these steps:

  

- 1. **Navigate** to your **../VUGames/Tribes Vengeance/Program/Bin** folder
- 2. **Open** your **TV\_CD\_DVD.ini** file with a text-editing program, like notepad.
- 3. **Find** the following line, by using CTRL + F: **[Engine.LevelInfo]**
- 4. **Add** the following line: **bCapFramerate=False** 
 ![](uncapfps.jpg)

NOTE: The picture shows [Engine.GameInfo], but that is wrong. The steps are correct and you need to add it to [Engine.LevelInfo]

  

* * *
  

Originally written by MalOx. Updated by Cobra and HighDive.

