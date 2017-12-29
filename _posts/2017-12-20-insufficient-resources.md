---
layout: post
title: Fix for "Insufficient System Resources" Warning Message on Newer PCs
description: How to fix Insufficient System Resources" Warning Message on Newer PCs
date: 2017-12-20
permalink: /tutorials/issues/insufficient-resources/
author: earnolmartin
author_link: http://forums.videogames101.net/index.php?topic=474.0
categories: issues
---

If you receive the following warning when launching the game on newer PCs with plenty of system resources (powerful CPU, lots of RAM, etc):

![Insufficient resources error]({{ "/assets/images/posts/192_exNOrY_tribes_v_error.png" | relative_url }})

You can fix it by editing the `TV_CD_DVD.ini` file (full path in my case `Tribes Revengeance\Tribes Vengeance\Program\Bin\TV_CD_DVD.ini`) and changing:


```ini
RequireMinSpec=True
```

To:

```ini
RequireMinSpec=False
```

After consulting expert and savior [jackfuste](http://www.wsgf.org/forums/memberlist.php?mode=viewprofile&u=31072) from [wide screen gaming forum (WSGF)](http://www.wsgf.org/), the technical reason this happens is:

> As for error, it's happened because the programmer used "signed int" data type.
> "signed int" data type have range of values from –2,147,483,648 to 2,147,483,647 and this is not enough to store the value of video memory, since modern videocards haves more that 2GB of video memory.

Hope this helps!
