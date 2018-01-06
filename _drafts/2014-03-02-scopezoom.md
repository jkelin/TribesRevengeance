---
layout: post
title: Scope Zoom Tutorial
keywords: tribesrevengeance, tribes, vengeance, revengeance, tutorial, guide, add, change, scope, zoom, level
description: TribesRevengeance.com - Scope Zoom Turorial page. Here you learn how to add, change or delete scope zoom levels.
date: 02/03/2014
permalink: /tutorials/miscellaneous/scopezoom/
author: Originally written by MalOx. Updated by Cobra and HighDive
categories: miscellaneous
---

On this page you will find out how to change your scope zoom levels.

  

In order to do so, follow these steps:

- 1. **Go** to the **.../VUGames/Tribes Vengeance/Program/Bin** folder
- 2. **Open** the **user.ini** file
- 3. **Search** the following line, by using CTRL + F: `[Gameplay.PlayerCharacterController]`
- 

4. **Scroll** down until you see the following:

  

    zoomSpeed=0.750000 
    		zoomLevel=2 
    		zoomedFOVs=50.000000 
    		zoomedFOVs=23.000000 
    		zoomedFOVs=8.000000 
    		zoomedMouseScale=0.750000 
    		zoomedMouseScale=0.400000 
    		zoomedMouseScale=0.100000 
    		zoomMagnificationLevels=2.000000 
    		zoomMagnificationLevels=4.000000 
    		zoomMagnificationLevels=10.000000

  

The above values are the **default values**

A quick explanation of what everything means:

- **zoomedFOV** is the FOV of your zoomed-in image (check [**here**](fov.php) for more information about FOV)
- **zoomedMouseScale** defines your aiming sensibility. Not that you will only see a difference in sensibility with high values, such as `zoomedMouseScale=15` or higher
- **zoomMagnificationLevels** is the actual zoom variable you will zoom in with
  
