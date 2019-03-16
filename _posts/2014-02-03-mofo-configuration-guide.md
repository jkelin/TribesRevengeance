---
layout: post
title: MoFo Tribes Vengeance Server Configuration Guide
description: Master’s of Friggin Ownage Tribes Vengeance Server Configuration Guide
date: Mon, 19 Feb 2007 21:28:43 GMT
permalink: /tutorials/serverhosting/mofo-configuration-guide/
author: Master’s of Friggin Ownage
categories: serverhosting
---

# Master's of Friggin Ownage: Tribes Vengeance Server Configuration Guide

- This guide has been provided to the Tribes community by the MoFo's ([http://www.themofoclan.com](http://www.themofoclan.com/)) and I ([Wolverine@themofoclan.com](mailto:Wolverine@themofoclan.com)). It is an accumulation of knowledge from several different sources including the T:V server admin mailing list ([http://lists.matureasskickers.net/mailman/listinfo/tvservers/](http://lists.matureasskickers.net/mailman/listinfo/tvservers/)) setup by ScrathMonkey and alot of help from Byte ([http://byte.zenegg.com](http://byte.zenegg.com/)). Most of the configurations I have done have been to support and encourage the play of custom maps made by our community members. These maps can be viewed and downloaded at ([http://www.vengeancemaps.com](http://www.vengeancemaps.com/)) which was setup by JMO, is administrated by SelfOwnage, and with resources also provided by NixFix. Thanks to everyone who has helped contribute to the information in this guide. 

- Any problems should be reported to me at [Wolverine@themofoclan.com](mailto:Wolverine@themofoclan.com).


## Requirements

- Tribes Vengeance Beta Dedicated Server installed

    - Download the server here: [http://www.vugames.com/downloadfile.do?gamePlatformId=412&mediaid=12980](http://www.vugames.com/downloadfile.do?gamePlatformId=412&mediaid=12980)

- For Game Panel service configuration

    - Game Panel software installed

- For auto download redirection site:

    - Dedicated Server

    - Full control of the server

    - One IP address available

    - Windows 2k3 server

    - Should work on previous versions although steps may be slightly different.

    - IIS

 

 

## Optional Useful Software

- Notepad++ - A very useful open source text editor that can be downloaded from

    - [http://notepad-plus.sourceforge.net/uk/site.htm](http://notepad-plus.sourceforge.net/uk/site.htm)

- GamePanel is also shareware and can be used to monitor, start, and stop your T:V server. You can get it here

    - [http://www.gamepanel.org/site/](http://www.gamepanel.org/site/)

 

 

## Basic Tribes Vengeance Server Configuration

This section covers the basic configuration of your Tribes Vengeance server. Most of this information is taken from Tysoft's Server configuration guide as posted on [http://www.tribalwar.com](http://www.tribalwar.com/).

1. Open a Windows Explorer screen and go to your Tribes Vengeance `Program\Bin` directory. For example:

`D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Program\Bin\`

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image001.html)

 

 

2. Copy the file `Beta_Dedicated_Server.ini` to `server.ini`.

3. Open `server.ini` in an editor and follow these steps to configure your T:V server.

3.1. In the section [Engine.Engine] make the following modifications.

3.1.1. Comment `RenderDevice=D3DDrv.D3DRenderDevice` by adding a semicolon at the beginning of the line. For example: 

`;RenderDevice=D3DDrv.D3DRenderDevice`

3.1.2. Uncomment `;RenderDevice=Engine.NullRenderDevice` by removing the semicolon at the beginning of the line. For example:

`RenderDevice=Engine.NullRenderDevice`

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image002.html)

 

3.2. In the section [Engine.GameEngine] make the following modifications.

3.2.1. Modify CacheSizeMegs=32 to allow a larger cache. I would not recommend a cache size larger than 512. 256 seems to be a good setting. For example:

`CacheSizeMegs=256`

3.2.2. Modify UseSound=True to disable sound on the server side. Set the value to false. For example: 

`UseSound=False`

**![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image003.html)**

 

3.3. In the section [IpDrv.TcpNetDriver] make the following modifications:

3.3.1. Set the value for the MaxClientRate to something more realistic. For example: 

`MaxClientRate=7000`

**![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image004.html)**

 

3.4. In the section [Engine.DemoRecDriver] which is for demo recording server side, stage the necessary modifications. 

3.4.1. Start with setting MaxClientRate to 10000. For example:

`MaxClientRate=10000`

3.4.2. Set the NetServerMaxTickRate to 20. For example:

`NetServerMaxTickRate=20`

3.4.3. Set the LanServerMaxTickRate to 20. For example:

`LanServerMaxTickRate=20`

**![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image005.html)**



3.5. In the section [Engine.GameReplicationInfo] input specific information about your T:V server and T:V server admin email

3.5.1. Set the ServerName to the name you wish to appear in the T:V server listing. For example:

`ServerName=MoFo's Casa de Putas`

3.5.2. The server ShortName should be set also, although I am not sure where this name is used. Set it to the same value as your ServerName. For example:

`ShortName=MoFo's Casa de Putas`

3.5.3. Add the setting AdminName and set it to your in-game nick, or whatever name you wish. For example:

`AdminName=Wolverine`

3.5.4. Add the setting AdminEmail and set it to an email address where you can be reached. Even better, an email where the admins for you team can be reached. For example:

`AdminEmail=Wolverine@themofoclan.com`

3.5.5. Add the MOTD, or message of the day as it is known, which is the message that center prints when a client joins your server. A welcome message and rules are typically a good value to input on these lines. For Example:

```
MOTDLine1=Welcome, to MoFo's Casa de Putas
MOTDLine2=No o-sniping and no base turtling, comprende?
MOTDLine3=Go to http://www.themofoclan.com or IRC #mofo for more info
MOTDLine4=Download maps at http://server.themofoclan.com/downloads/tribesv/maps/
```



**![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image006.html)**



3.6. In the section [Engine.GameInfo] set the following value.

3.6.1. Set MaxPlayers to the maximum number of players you want in game at one time. I recommend between 20-24 although what your server can handle will depend on the machine that you run your T:V server on. For example:

`MaxPlayers=22`

**![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image007.html)**



3.7. In the section [UWeb.WebServer] set the following values.

3.7.1. Set bEnabled to True. For example:

`bEnabled=True`

3.7.2. Set the port you wish to be used as the Web Admin port by setting ListenPort. For example:

`ListenPort=8080` 

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image008.html)

 

3.8.In the section [TribesVoting.TribesVotingHandler] you can make modifications about the voting in game. I have no recommendations except for changing the following setting.

3.8.1. Set KickPercent to 66 so that it takes a majority to kick a player. For example:

`KickPercent=66`

3.8.2. You might consider setting bAdminVote to False so that others aren't voting themselves Admin. For example:

`bAdminVote=False`

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image009.html)

 

3.9. In the section [Gameplay.MultiplayerGameInfo] modify this values

3.9.1. Set postGameDelay to something at least as long as 30 seconds. This is how long the stat screen is shown after the end of a map. For example:

`postGameDelay=45`

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image010.html)

 

3.10. - In the section [GameClasses.ModeCTF] modify the following values to enable capture and time limits.

3.10.1. Set bUseMapScoreLimits to True. For example:

`bUseMapScoreLimits=True`

3.10.2. Set TimeLimit to 20. For example:

`TimeLimit=20`

3.10.3. In addition you can set teamBalanceCheckInterval to something less frequent. For example:

`teamBalanceCheckInterval=120`

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image011.html)

 

3.11. If you wish you server to be passworded add the following value in the section [Engine.AccessControl].

3.11.1. Set GamePassword to your desired password. For example:

`GamePassword=yourpassword`

3.12. Save your "server.ini" file.

3.13. That is the end for the configuration of your Tribes Vengeance Server ini file.

 

## Adding Server Admins

Adding admins in Tribes Vengeance can be done through the webadmin or via editing the "TribesAdmin.ini" file. **Note** that the file is not created until _after_ the first run of the server. 

1. Open the file "TribesAdmin.ini" in an editor. This is the file where you can define your admins for the server. At a minimum define yourself.

1.1. By default there is an admin configured with username admin and password admin. I recommend changing this admin to your nick and password. For example:

`AdminUsers=(AdminName=Wolverine,Password=mypassword,Privileges=,Groups=(Admin),ManagedGroups=())`

1.2. It is recommended that you add Privileges to your account. To add privileges to all functionality modify the line adding the values "K|M|A|G|X". For example:

`AdminUsers=(AdminName=Wolverine,Password=mypassword,Privileges= K|M|A|G|X ,Groups=(Admin),ManagedGroups=())`

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image012.html)

1.3. The rest of the admins can be configured in the web admin which has descriptive names for the privileges. I find it is easier to determine what users have what privileges that way.

1.4. Save your `TribesAdmin.ini` file.

1.5. That is the end for the configuration of your admin privileges.

 

## Configuring Startup using Shortcuts

There are several ways to start your Tribes Vengeance Server including .bat files, software like GamePanel, or you can simply use a shortcut. I will outline how to use a shortcut in the following section.

1. Open a Windows Explorer screen and go to your Tribes Vengeance `Program\Bin` directory. For example:

`D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Program\Bin\`

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image001.html)

 

2. Right click on `Beta_Dedicated_Server.exe` and select 'Copy'.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image013.html)

 

3. Right click on the Desktop and select 'Paste Shortcut'.

4. Right click on the new "Shortcut to `Beta_Dedicated_Server.exe` and select 'Properties'.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image014.html)

 

5. Modify the target to include these command line options that specify the map to start the server on, the server ini configuration file, and the server log file:

`mp-emerald ini=server.ini log=server.log`

5.1. The entire target for my server is, for example:

`D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Program\Bin\Beta\_Dedicated\_Server.exe mp-emerald ini=server.ini log=server.log`

**![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image015.html)**



6. Click 'Apply' and then click 'OK'.

7. To start your Tribes Vengeance Server double click the shortcut you just created.

 

## Configuring Startup using Game Panel

We use an open source software product named Game Panel to start and stop our server. Game Panel installed is a requirement to be able to follow these steps. 

1. Click 'Start'.

2. Select 'All Programs'.

3. Select 'Game Panel'.

4. Select 'Manage Services'.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image016.html)

4.1. In the GamePanel: Service Configurations window click the 'New Service' tab and enter a name for the Tribes Vengeance Server service then click 'Create'.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image017.html)

4.2. In the Service Configuration Utility make the following changes

4.2.1.In the Service Properties section enter the following values.

4.2.1.1. For the Display Name enter a descriptive name for your Tribes Vengeance Server service. For example "TV Casa de Putas".

4.2.1.2. Enter a name for the service. For example `tv\_casa\_de\_putas`.

4.2.1.3. Select a Start Type of 'Automatic'.

4.2.1.4. Select an Account of 'Local System'.

4.2.1.5. By default there will not be any Dependencies that need to be selected.

4.2.2.In the Process Properties enter the following information

4.2.2.1. For the Application select the button to the right of the field in order to browse to the Tribes Vengeance Beta Server executable located in Program\Bin\ of your Tribes Vengeance Beta Server Directory. This file is named "Beta\_Dedication\_Server.exe". 

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image018.html)

4.2.2.2. Modify the arguements to include these command line options that specify the map to start the server on, the server ini configuration file, and the server log file. 

`mp-emerald ini=server.ini log=server.log`

4.2.2.3. Select the working directory for the Tribes Vengeance Server. This must be the same directory where the "Beta\_Dedicated\_Server.exe" executable is located which is Program\Bin of your Tribes Vengeance Beta Server Directory.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image019.html)

4.2.2.4. Select a Priority of 'RealTime' to ensure the Tribes Vengeance Server has top process priority on the server.

4.2.2.5. Leave Check If Running at its default setting of '5'.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image020.html)

4.2.3. Click 'Install' to install the Tribes Vengeance Server service.

4.3. Click 'Update' to start the Tribes Vengeance Server service.

That completes the configuration of the Game Panel service to start the Tribes Vengeance Server.

 

## Auto Download Redirection Website Configuration

Tribes Vengeance is configured to auto download maps to clients when the clients do not have the maps. The game engine does this by default, but at a very slow rate. To expedite the download you can configure a website that will be used for an auto download redirection site. This will allow for extremely fast auto downloads to the clients. The best way to setup your auto download redirection is to create a separate website just for the maps. To do that follow these steps

1. Click 'Start'.

2. Select 'Administrative Tools'.

3. Select 'IIS services Manager'.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image021.html)

 

3.1. Click the '+' next to your local computer to expand it and show three folders, one will be 'Web Sites'.

3.2. Right Click on 'Web Sites'

3.3. Select 'New' then select 'Website'.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image022.html)

 

3.4. This will bring up the 'Web Site Creation Wizard'.

3.4.1. Select 'Next'.

3.4.2. Enter a Description for your website and then select 'Next'.

3.4.3. Select an IP address for the site.

3.4.4. Verify the TCP port is '80'.

3.4.5. Leave the Host header empty and then select 'Next'.

3.4.6. Enter the home (root) directory for your website. Typically website's home directories are in `C:\www\` however I suggest creating a new directory in your Tribes Vengeance Beta Server directory. For example:

`D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Content\Web\Redirection\`

3.4.6.1. The home directory will need to be an existing directory. A new directory can be created by clicking 'Browse' and then selecting 'Make New Folder'.

3.4.7. Click 'Allow anonymous access to this Web site' and then click 'Next'.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image023.html)

 

3.4.8. Configure permissions by clicking 'Read' and 'Browse'. Then select 'Next'.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image024.html)

 

3.4.9. Click 'Finish' to complete the website configuration.

3.5. Expand the website folder by clicking the '+'.

3.6. Right click on the new website and select 'Properties'.

3.6.1. Select the 'Performance' tab.

3.6.1.1. Declick 'Limit the network bandwidth available to this Web Site'.

3.6.1.2. Select 'Connections limited to:' and enter `32`.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image025.html)

 

3.6.2. Select the 'HTTP Headers' tab.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image026.html)

3.6.2.1. Select 'MIME Types'.

3.6.2.1.1. Click 'New' to add a new MIME type.

3.6.2.1.1.1. Insert `.uz2` in the Extension field. (without the quotes)

3.6.2.1.1.2. Insert `application/octet-stream` in the MIME Type field. (without the quotes)

3.6.2.1.2. Verify the MIME type is listed in the MIME Types window.

3.6.2.1.3. Select 'OK'.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image027.html)

3.6.2.2. Select 'Apply'.

3.6.2.3. Select 'OK'.

 

This completes the configuration of the website.

 

 

## Compressing and staging map files

Maps must be compressed using the 'ucc' utility so that they are in the .uz2 format. Then the files must be copied to the home directory of your new website. Follow these steps:

1. Click 'Start'

2. Select 'Command Prompt'. If a 'Command Prompt' shortcut isn't on your start menu select 'All Programs', then 'Accessories', then 'Command Prompt'.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image028.html)

 

3. Change to your Tribes Vengeance Beta Server directory. For example, ours is "D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\":

`cd "\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\"` then hit enter.

3.1. If your directory is on another drive you must first change to that drive. To do that simply type your drive letter at the prompt and then hit enter.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image029.html)

 

3.2. Change to the 'Program\Bin' subdirectory of your Tribes Vengeance Beta Server directory.

`cd Program\Bin` then hit enter.

3.3. To compress the .tvm map files input this command

`ucc compress ..\..\Content\Maps\*.tvm` then hit enter.

3.4. To compress the .pkg map files input this command

`ucc compress ..\..\Content\Maps\*.pkg` then hit enter.

3.5. To compress the .mopp files input this command

`ucc compress ..\..\Content\Maps\*.mopp` then hit enter.

3.6. Note that some .pkg files may be in Content\Art so it may be necessary to also issue this command

`ucc compress ..\..\Content\Art\Environments\*.pkg` then hit enter.

3.7. Finally, copy all the '.uz2' files to your new website with these commands

`xcopy /V ..\..\Content\Maps\*.uz2 ..\..\Content\Web\Redirection\` then hit enter.

`xcopy /V ..\..\Content\HavokData\*.uz2 ..\..\Content\Web\Redirection\` then hit enter.

`xcopy /V ..\..\Content\Art\Environments\*.uz2 ..\..\Content\Web\Redirection\` then hit enter.

4. From any machine access your website using a browser to verify that the map files are downloadable. 

4.1. Input `http://yourIPaddress/` in the location bar and then hit enter. 

4.2. Click one of the compressed map .uz2 files. You should to be prompted to save the file. If you are prompted to enter a username/password additional permission configuration may be needed.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image030.html)

 

**Note that any mods or logos will need to be compressed and available on your new website also. **

This completes compressing and staging map files

 

## Configure Tribes Vengeance Server Redirection

The server's ini file must be configured to point clients to download from your new website. To do this follow these steps. 

1. Open your "server.ini" file in an editor.

1.1. In the [IpDrv.TcpNetDriver] section modify the following values:

1.1.1. Set AllowDownloads to False. For example:

`AllowDownloads=False`

1.1.2. Comment DownloadManagers=Engine.ChannelDownload by adding a semicolon at the beginning of the line. For example: 

`;DownloadManagers=Engine.ChannelDownload`

1.2. In the [IpDrv.HTTPDownload] section modify the following value:

1.2.1. Set RedirectToURL= to your new website(IP address)

`RedirectToURL=http://yourIPaddress/`

**DO NOT FORGET THE FORWARD SLASH AT THE END!**

**![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image031.html)**

 

This completes the Tribes Vengeance Server ini configuration for auto download redirection.

 

## Installing and Configuring Byte's WebAdmin

Byte made modifications to the webadmin to make most of the intended functionality of it work correctly. Most importantly, with Byte's WebAdmin you can create a custom map rotation and password the server without restarting it. To install and configure Byte's webadmin follow these steps.

1. Download the webadmin from byte.zenegg.com from [ByteWeb_1.32.rar]({{ site.downloads_url | append: "/mods/ByteWeb_1.32.rar" }})

2. Unzip the file.

3. Copy the "ByteWeb.u" file into the Tribes Vengeance Beta Server's Program\Bin\ directory. For example:

`D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Program\Bin\ByteWeb.u`

4. Copy the "ByteWeb-Readme.txt" to the Tribes Vengeance Beta Server's Content\Help\ directory. For example:

`D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Content\Help\ByteWeb-Readme.txt`

5. Copy the remaining files in the zip file to the Tribes Vengeance Beta Server's `Content\Web\ServerAdmin\` directory. For example:

    ```
    D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Content\Web\ServerAdmin\cell\_center.inc
    D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Content\Web\ServerAdmin\cell\_center\_nowrap.inc
    D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Content\Web\ServerAdmin\cell\_colspan.inc
    D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Content\Web\ServerAdmin\cell\_left.inc
    D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Content\Web\ServerAdmin\cell\_left\_nowrap.inc
    D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Content\Web\ServerAdmin\cell\_right.inc
    D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Content\Web\ServerAdmin\cell\_right\_nowrap.inc
    D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Content\Web\ServerAdmin\current\_players\_perm\_col.inc
    D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Content\Web\ServerAdmin\maplist\_map.inc
    D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Content\Web\ServerAdmin\row\_center.inc
    D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Content\Web\ServerAdmin\row\_left.inc
    D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Content\Web\ServerAdmin\slotmanager.htm
    D:\Program Files\VUGames\Tribes Vengeance Beta Server\Casa de Putas\Content\Web\ServerAdmin\slotmanager-entry.inc
    ```

6. Open your server ini file in an editor.

6.1. In the [UWeb.WebServer] section make the following changes.

6.1.1. Comment the Applications[0], ApplicationPaths[0], Applications[1], and ApplicationPaths[1] sections by putting a semicolon at the beginning of each line.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image032.html)

6.1.2. Add the following lines to the server ini.

![](MoFo%20Tribes%20Vengeance%20Server%20Configuration%20Guide_files/image033.html)

7. Restart your Tribes Vengeance Beta Server.

That completes the configuration of Byte's WebAdmin. Read the "ByteWeb-Readme.txt" for more information on how to use the functionality of Byte's WebAdmin.


## Tribes Vengeance Cache Manager

The maps that are auto downloaded from your new website are copied into clients cache directory(`C:\Program Files\VUGames\Tribes Vengeance\Program\Bin\Cache\`). There is a utility that can be used to copy the files from the client's cache to the correct directory, the T:V cache manager. 

- The T:V cache manager can be found here

[TVCacheManager.zip]({{ site.downloads_url | append: "/other/TVCacheManager.zip" }})

- Install and start the program

 - Select all items in the window and then click the third button from the left Move the selected files to the relevant profile folders.

- That's it.
 

## Redirection website FAQs

I have answered some questions about bandwidth running a redirection site. What I have found is the following.

- What is the throughput that is needed or is used during map changes?

    - Network utilization peaks in the 6-7Mb/s range in between maps.

- What is the overall increase in data transferred per month?

    - We noticed no overall increase in transfer bandwidth usage per month. Keep in mind the compressed map files are relatively small, normally between 5-10MB.

- Do the clients have to download that map each and every time it appears in the rotation?

    - Once a client downloads the map into their cache it will remain there for 30 days before it is purged. Using the T:V cache manager they can move the files into the correct directories and never have to download the map again. 

- Where can I find the community maps?

    - Most of your clients will already have the maps that are available at [http://www.vengeancemaps.com/](http://www.vengeancemaps.com/)

 

