---
layout: post
title: Hide Weapons Tutorial
keywords: tribesrevengeance, tribes, vengeance, revengeance, tutorial, guide, hide, first, weapon, bHideFirstPerSonWeapon
description: Here you will learn how to hide weapons so you can't see them because they are hidden (invisible)
date: 02/03/2014
permalink: /tutorials/miscellaneous/hideweapons/
author: Originally written by MalOx. Updated by Cobra and HighDive.
categories: miscellaneous
---

On this page you will find out how to hide your weapons, when playing in first person.

  
 ![]({{ "/assets/images/posts/hideweapons.jpg" | relative_url }})

To do this, follow these steps:

1. **Go** to the `.../VUGames/Tribes Vengeance/Program/Bin` folder
2. **Find** the `user.ini` file
3. **Open** it, with a text editing program, like notepad

4. **Search** the follow line, by using CTRL + F: **`bHideFirstPersonWeapon=False`**

    You will notice it will appear, or should appear, 3 times, underneath each of these sections:
    
    ```
    [Gameplay.PlayerCharacterController]
    [antics_v3.anticsCharacterController]
    [antics_v5.anticsCharacterController]
    ```


5. **Change**" **`bHideFirstPersonWeapon=False`**" too false in each of these cases, so you get:

    ```
    bHideFirstPersonWeapon=True
    ```
