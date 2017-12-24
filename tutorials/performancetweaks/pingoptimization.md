---
layout: page
title: Ping Optimization Tutorial
keywords: tribesrevengeance, tribes, vengeance, revengeance, tutorial, guide, ping, optimization, improve, latency, network, speed, netspeed,
description: Ping Optimization Tutorial page. Here, you find out how to improve your ingame ping!
date: 02/03/2014
permalink: /tutorials/performancetweaks/pingoptimization/
---

# Ping Optimization

* * *

On this page you will find all sorts of tweaks which you can apply in order to decrease your ping or stabilize your connection.

  

Before we can tweak and, hopefully, improve it, we must first know what ping means and what will effect it.

  

Your "ping" basically represents **the time, in ms, it takes for you to send a request to the server and for the server to report back**.

Because of this, the further you are away from the server you are trying to 'contact', the longer it will take to send and receive data, the higher your ping will be, the greater your delay will be.

  

If your ping increases a lot all of the sudden, you know something is going on. Usually this that either someone is using your internet, that you are downloading something or that there are multiple programs running in the background, which suck up your connection resources.

This being said it is recommended not to share your internet when playing lagg sensitive games such as Tribes and to turn off your download and to shut down any programs running in the background.

Furthermore, it is also possible your ping suffers, because there is malware at work. Virusses can have a negative effect on your latency, as they use your system recourses and therefore it is recommended to scan regularly, with decent software.

Before tweaking anything, it is always recommended making a **backup** of the file you are about to tweak. Should something go wrong, you always have a backup. Failing to do so might force you to reinstall the game in a worst case scenario.

  

## Kill the lagg

* * *

You can decrease the lagg you experience while playing,by doing the following:

- 1. **Start** Tribes Vengeance (preferably as administrator)
- 2. Go to the **options**
- 3. Go to the **network** tab
- 4. Un-check **adjust connection speed while playing**
  

## Connection speed

* * *

You can decrease your ping by doing the following:

- 1. **Start** Tribes Vengeance (preferably as administrator)
- 2. Go to the **options**
- 3. Go to the **network** tab
- 4. Select **LAN/T1** connection speed
  

Lets go a tad deeper on this one and explain how and why this is interesting, as well as explaining when or when not you should adjust this.

  

Your maximum connection speed is defined by a number in Bytes per seconds. The connection speed is the maximum amount of data allowed to be received or sent per second.

 ![](pingpic1.jpg)

The presets you can find ingame (see above) all have a different values suited for specific internet connections.

  

    Modem: 2.600 B/s	Suited for very slow internet connections

    ISDN: 5.000 B/s	Suited for slow internet connections

    Cable/ADSL:	10.000 B/s	Suited for normal internet connections

    LAN/T1: 20.000 B/s	Suited for fast internet connections

  

Please note that the values in B/s are theoretical and not the actual bandwidth amounts that will be sent or received)

  

If you have a slow internet connection, it is best to keep using Cable/ADSL or to use a lower value such as ISDN. This is to limit the amount of data the server will send you. If the server sends too much data, your connection will get flooded and you will start to lag. On the other hand, if you have a faster internet connection, you can allow more data to be sent or received and this will lower your ping. Lan/T1 is therefore best to use with faster connections.

  

Nowadays connection speeds have improved, and a high-speed connection back in 2004 is more of a normal speed connection in 2013. This means that the default connection speed of Tribes Vengeance is usually too low for our modern internet connections (default Max speed is 10kB/s or "Cable/ADSL" speed). It is therefore best to set your connection speed to LAN/T1 (20kB/s).

  

## Netspeed command

* * *

Another way to decrease your ping, is to use the "**netspeed [value]**" command in the console.

You can do this by following these steps:

- 1. **Start** Tribes Vengeance (preferably as administrator)
- 2. **Join** a Tribes Vengeance gameserver 
- 3. **Open** your console by using the **TAB** - or **~** key.
- 

4. Type **netspeed [value]** in your console.

For example: **netspeed 25000**

NOTE: This value will be saved in your configuration files. You will not have to retype the console command every time you start the game.

NOTe: the maximum connection speed it capped by the server. You will therefore only be able to set your connection speed as high as the defined server connection speed.

  

By typing "netspeed 30000", you will set your Max connection speed to 30kB/s. Faster internet connections will be able to utilise that new bandwidth and improve your ping as a result. It is, however, important that u do **NOT** set the netspeed too high. A too high value might cause lags and warps or even a ping increase instead of a decrease!

  

You can play with the console command to find the value that suits your internet connection speed best. Otherwise you can simply use one of the available connection speed presets ingame.

  

* * *
  

Originally written by MalOx, Cobra and Morpheus. Updated by HighDive.

