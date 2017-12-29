---
layout: post
title: Tribes Vengeance master server and version check protocol information
description: Technical guide about T:V master server, version check protocol
date: 2017-12-29
permalink: /tutorials/miscellaneous/master-server/
author: Fireant
categories: miscellaneous
draft: true
---

This is more of a brain dump than anything into currently ongoing investigation.

Revengeance's `engine.dll` communicates with the following urls:

1. `http://motd.tribesv.org/motd/vercheck.asp?productid=%d&versionuniqueid=%s&distid=%d&gamename=%s`
2. `http://motd.tribesv.org/motd/motd.asp?userid=%d&productid=%d&versionuniqueid=%s&distid=%d&uniqueid=%s&gamename=%s`
3. (appers to be unused) `http://motd.tribesv.org/motd/vercheck.asp?userid=%d&productid=%d&versionuniqueid=%s&distid=%d&uniqueid=%s&gamename=%s`
4. (appers to be unused) `http://d.motd.tribesv.org/dlfileraw.asp?file=%d&gamename=%s`


## Version checks

![Update available popup]({{ "/assets/images/posts/tv_update_available.jpg" | relative_url }})

Version update checks happen on `motd.tribesv.org/motd/vercheck.asp`.

Codepath is basically
1. Unrealscript `source\Unreal\Engine\Classes\GameSpy\GameSpyManager.uc`:`native function QueryPatch`
2. Engine.dll
3. Unrealscript `source\Unreal\Engine\Classes\GameSpy\GameSpyManager.uc`:`private event QueryPatchCompleted`

Tribes sends GET request `http://motd.tribesv.org/motd/vercheck.asp?productid=10397&versionuniqueid=63446&distid=1057&gamename=tribesv` with `User-Agent: GameSpyHTTP/1.0` and `Connection: close` headers.

It is expected that the server returns forward-slash-encoded string with:

- `dlurl`: string, optional (`dlurl` or `fpfileid` is required) - Url used for download. Is also displayed in the UI.
- `newver`: int, mandatory, truthy (not 0) - I assume this was supposed to be version of the download, but T:V devs never got around to checking it. It can be `1` and everything works.
- `lockout`: Probably int, optional - this should indicate if the download is mandatory or not, if it is mandatory, the "No" button in update check should not be visible. I could not manage to make this work, no matter what I set.
- `fpfileid`: int, optional (`dlurl` or `fpfileid` is required) - Is added to `http://www.fileplanet.com/index.asp?file=` in unrealscript to create the url.
- `newvername`: string, optional - This should be probably displayed somewhere in the interface, but I could not manage to make it work.

Thus server would respond with `\newver\1\dlurl\http://downloads.tribesrevengeance.net/TribesVengeance.zip\` to show the popup.

Relevant decompiled code snippet (of code that parses the response):

```c
/*
Taken from strings portion of engine.dll

.data:1073F6CC                                         ; DATA XREF: sub_1050CD10:loc_1050D040o
.data:1073F6E7                 align 4
.data:1073F6E8 ; char asc_1073F6E8[]
.data:1073F6E8 asc_1073F6E8    db '\',0                ; DATA XREF: sub_1050D1E0+2Bo
.data:1073F6EA                 align 4
.data:1073F6EC ; char aNewver[]
.data:1073F6EC aNewver         db '\newver\',0         ; DATA XREF: sub_1050D2C0+44o
.data:1073F6F5                 align 4
.data:1073F6F8 ; char aLockout[]
.data:1073F6F8 aLockout        db '\lockout\',0        ; DATA XREF: sub_1050D2C0+6Co
.data:1073F702                 align 4
.data:1073F704 ; char aFpfileid[]
.data:1073F704 aFpfileid       db '\fpfileid\',0       ; DATA XREF: sub_1050D2C0+93o
.data:1073F70F                 align 10h
.data:1073F710 ; char aNewvername[]
.data:1073F710 aNewvername     db '\newvername\',0     ; DATA XREF: sub_1050D2C0:loc_1050D36Fo
.data:1073F71D                 align 10h
.data:1073F720 ; char aDlurl[]
.data:1073F720 aDlurl          db '\dlurl\',0          ; DATA XREF: sub_1050D2C0:loc_1050D3A5o
.data:1073F728 ; char aHttpMotd_a_loc[]
*/

signed int __cdecl sub_1050D2C0(int a1, int a2, const char *a3)
{
  signed int result; // eax@2
  char *v4; // eax@3
  char *v5; // eax@5
  char *v6; // eax@8
  int v7; // ebp@9
  char *v8; // eax@11
  char *v9; // eax@14
  signed int v10; // [sp+8h] [bp-16Ch]@6
  char v11; // [sp+Ch] [bp-168h]@15
  char v12; // [sp+70h] [bp-104h]@15
  char Dest; // [sp+74h] [bp-100h]@12
  char v14; // [sp+173h] [bp-1h]@12

  if ( a2 )
  {
    sub_1050D250(0, 0, 0, &::Dest[256]);
    result = 1;
  }
  else
  {
    v4 = sub_1050D1E0(aNewver, a3);
    if ( v4 && atoi(v4) )
    {
      v5 = sub_1050D1E0(aLockout, a3);
      if ( !v5 || (v10 = 1, !atoi(v5)) )
        v10 = 0;
      v6 = sub_1050D1E0(aFpfileid, a3);
      if ( v6 )
        v7 = atoi(v6);
      else
        v7 = 0;
      v8 = sub_1050D1E0(aNewvername, a3);
      if ( v8 )
      {
        strncpy(&Dest, v8, 0x100u);
        v14 = 0;
      }
      else
      {
        Dest = 0;
      }
      v9 = sub_1050D1E0(aDlurl, a3);
      if ( v9 )
      {
        strncpy(&v11, v9, 0x65u);
        v12 = 0;
      }
      else
      {
        v11 = 0;
      }
      sub_1050D250(1, v10, v7, &v11);
      result = 1;
    }
    else
    {
      sub_1050D250(0, 0, 0, &::Dest[256]);
      result = 1;
    }
  }
  return result;
}
```
