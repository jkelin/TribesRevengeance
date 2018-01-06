---
layout: post
title: Demo Playback
keywords: tribesrevengeance, tribes, vengeance, revengeance, tutorial, guide, demo, playback, advantage, disadvantage, usage, watch, move, send, receive, cache, rypel, error
description: Demo Playback Turorial page. Here you learn how to playback demo's and use them.
date: 06/03/2014
permalink: /tutorials/miscellaneous/demosystem/
author: Originally written by Hawk. Updated by HighDive
categories: miscellaneous
---

In the following guide, you will learn everything necessary about the Tribes: Vengeance demo recording system: what it is, how and why to use it, errors you might encounter and how to solve them.

  

The demo system is a built in feature in Tribes: Vengeance, that allows your game to record your gameplay, and view it later at any time you wish. How does this differentiate from using a typical screen recording software, and what are the advantages and disadvantages?

  

## Advantages

* * *

The demo system uses a lot less system resources than external recording software. If you are not playing on a powerful computer, this will allow you to record while playing, without having to worry about lags.

  

The demo system allows you to play with a certain configuration (such as HUD, FOV etc), but watch the recording with a different one. This is good, because it allows you to play with a setting you feel comfortable on, but when creating a video you can use a configuration more suitable for that. Also if you are watching a demo recorded by someone else, you will see the gameplay with your own configuration, making it easier for you to watch.

  

The demo files take a lot less space than directly recorded video files. While directly recorded video files take gigabytes upon gigabytes of space, a demo file takes only a few megabytes. This makes it not only convenient to store, but also much easier to distribute, in case you want to send or receive demos from another player.

  

When watching a demo you can use tools such as RypelCam, that allow you to make creative scenes and capture the action from a completely different angle if you so wish (RypelCam not covered in this tutorial).

  
  

## Disadvantages

* * *

Rather than creating a video file (.avi, .mp4, .flv etc) like the typical recording softwares, the demo system creates a .dem file, that can only be viewed inside Tribes: Vengeance. To create a video that can be edited and uploaded to YouTube, you still need to use an external recording software, and record a video from the demo file.

  

The Tribes: Vengeance demo system hardly has any fancy features, such as speed up, slow down, rewind etc. When you play the demo, it takes as long as the actual gameplay did, and you have to deal with that. If there was 18 minutes of useless gameplay before that one awesome action you want to see, you will have to let the demo play for 18 minutes until that scene comes up. This, sometimes, makes it very time consuming to get the actual video files, you want to edit or upload.

  

The system has a bug that sometimes causes the demos to be watchable, but in general considered useless for montages or any other purpose for that matter (a description of problem this later), so direct video recording is more reliable to save that gameplay you want to see later.

  
  

## Usage

* * *

So, now that you know what the demo system is and why it is used... **How** do you actually use it?

  

The steps to record and watch a demo are really simple:

- 1. While playing, press ESC to bring up the scores menu. On the left, you will see a button labeled "Start recording". Click the button and you are set - the game is now recording your gameplay! Whenever you wish to stop recording, you repeat the same process, the button will now be labeled "Stop recording" instead - click that and the recording will stop, and you will have a demo file ready to be viewed later! (Remember to stop the recording before the game ends, and start a new one when the next game starts!)
- 2. Alternatively, while in game press tab to open console, and type "demorec demo\_name" (without the quotation marks). "demo\_name" will be the name of the demo file, so you can replace that keyword with anything you choose, for example "demorec asdfglol", "demorec pro\_gameplay\_1337" etc. WARNING: THE NAME MUST NOT CONTAIN A SPACE!
  

Watching the demo is also very simple:

- 1. Open Tribes: Vengeance
- 2. Select "multiplayer" 
- 

3. Go to the "Recordings" tab

Here you will see a list of all available demos.

- 3. You can select any, and watch them by clicking "Play demo".

Alternatively, you can do the following:

- 1. Open Tribes: Vengeance
- 2. Open console
- 

3. Write "demoplay demo\_name"

demo\_name being the name of your demo, so if its name is super\_action1234 then type "demoplay super\_action1234".

NOTE: If you wish to watch a demo that someone else has sent you, just place the .dem file in your VUGames/TribesVengeance/Program/Bin folder, and it will appear in the recordings list, when you want to watch it. All recordings will be in this same folder, so if you wish to send demos to people, you will find them here.

  

## Problems - Solutions

* * *

When attempting to watch a demo, you may run into a couple problems. Here are some of them, and solutions:

- 1. The game says "Missing file x2\_v3.u for demo playback" and will not load! - To watch the demo, you need to have the correct cache files in their correct folders. To manually solve this problem, do the following: 
  - 

1. <stron>Navigate to your <strong>../VUGames/TribesVengeance/Program/Cache </strong> folder.</stron>

In there you will see a bunch of cache files with long arbitrary names such as 388sgwgaerg8a9rgyr4385t32q88swgweg.uxx, and one file called cache.ini.

  - 

2. **Open** cache.ini, with a text editor such as notepad.

Inside you will see lines of text. Each line matches one cache file in the cache folder.

  - 

3. For example, if the game asks for something like x2\_v3.u, you need to **find** the text line that ends with "= x2\_v3.u".

An example line might look like this: "77wgfweagbker0r8a8i359239.uxx = x2\_v3.u".

  - 

4. This means, now you simply need to **locate the file** with a matching name in your folder (in this case 77wgfweagbker0r8a8i359239.uxx), and rename it to "x2\_v3.u".

Remember to also change the file extension! Some files need to be changed to .u others to .pkg, just rename it to whatever the cache.ini file tells you.

  - 

5. After that, you **move the file** to the correct folder.

The game will probably ask for multiple cache files, before it will let you watch your demo, so while you are at it, you might as well do the renaming process to all cache files and move them to the correct folders.

Instead of doing this manually, you could use a tool called the **cachemanager**. A tutorial on how to use it, can be found [here](cachemanager.php).

- 2. The demo will not load and does not even show an error message, just the sky animation in the background! - This is caused by something in your demo name that is not allowed, most likely a space character. Go to your VUGames/TribesVengeance/Program/Bin folder, find the demo you want to play, and rename it (make sure it contains no spaces!).
- 3. The demo loads, but plays with too low FOV and I can't see any HUD! - This is the problem mentioned earlier in the guide. It is a bug in the system, and unfortunately there is no known way to fix this. You can still watch it, but it is very limited, and in general not useful for anything. It is not known exactly what causes the problem and it appears to happen quite randomly - luckily most demos work correctly, but every once in a while a great play will be ruined by this.
  