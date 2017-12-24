---
layout: page
title: FPS Optimization Tutorial
keywords: tribesrevengeance, tribes, vengeance, revengeance, tutorial, guide, fps, frames, per, second, optimization
description: FPS Optimization Tutorial page. Here, you find out how to optimize your FPS!
date: 02/03/2014
permalink: /tutorials/performancetweaks/improvefps/
---

On this page you will find out how you can improve your frames per second, or rather FPS. The frames per second number represent the amount of frames you see per second, hence the name. The higher the FPS value, the smoother the game may appear to be.

  

The amount of frames per second you get, is highly dependant on your hardware, espcially your graphics card. The stronger the card, the better your FPS, given that your CPU and other hardware can keep up.

Furthermore, it is also important to note that the FPS you get, is also dependant on of recourses Tribes (Re)Vengeance can use. If you have a lot of other programs running in the background, it is possible your FPS will be drained.

Lastly, it is also possible that your ingame FPS will drain, because of malware running on your computer. Virusses have a negative effect on your FPS, therefore scanning regurarly, with decent software, is recommended.

  

Luckily, there are a few things you **can** do, without having to spend a lot of money!

  

Before tweaking anything, it is always recommended making a **backup** of the file you are about to tweak. Should something go wrong, you always have a backup. Failing to do so might force you to reinstall the game in a worst case scenario.

  

## MouseLaggHelper

* * *

You can turn this option off to reduce CPU usage and FPS drain.

You can do this by following these steps:

1. **Navigate** to your `.../VUGames/Tribes Vengeance/Program/Bin` folder
2. **Open** your `TV_CD_DVD.ini` file, with a text editing program, like notepad.
3. **Search** the following line, by using CTRL + F: `D3DDrv.D3DRenderDevice]`
4. **Change** ReduceMouseLagg=True to `ReduceMouseLagg=False`
5. **Save** the file and **reboot** Tribes Vengeance
 ![](reducemouselagghelper.jpg)  

## Vsync and refresh rate

* * *

You can increase your FPS by enabling triple buffering and disabling Vsync.

You can do that by following these steps:

1. **Navigate** to your `.../VUGames/Tribes Vengeance/Program/Bin` folder
2. **Open** your `TV_CD_DVD.ini` file, with a text editing program, like notepad.
3. **Search** the following line, by using CTRL + F: `D3DDrv.D3DRenderDevice]`
4. **Change** UseTrippleBuffering=False to `UseTrippleBuffering=True`
4. **Change** UseVsync=True to `UseVsync=False`
5. **Change** DesiredRefreshRate=[NUMBER] to `DesiredRefreshRate=[MAX REFRESH RATE YOUR MONITOR SUPPORTS]`
![](vsyncandrefreshrate.jpg)

NOTE: Setting `UseVsync=False` can and/or will cause screen tearing. This however does improve your FPS, which is why it was added.

  

## Player Shadows

* * *

Player Shadows drain considerably on your FPS. Lowering the detail of these will lower the drain on your FPS.

You can do this by following these steps:

1. **Start** Tribes Vengeance
2. Go to the in game **options**
3. Go to the **Video** tab
4. **Decrease** the **Dynamic Shadow Detail**
 ![](shadowdetail.jpg)  
  

* * *
  

Originally written by MalOx, Cobra and Morpheus. Updated by HighDive.
