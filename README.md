# NerdFont-Cheat-Sheet

`nerdfont.csv` is a generated CSV that includes all of the Nerd Font icons and their description, as found on [Nerd Font's Cheat Sheet website](https://www.nerdfonts.com/cheat-sheet).

`nerdfont.txt` is a more readable version of that file


## Usage

You will need to open the files with an editor that has a [Nerd Font](https://www.nerdfonts.com) installed for.

### rofi

A simple icon picker can be built with rofi (or dmenu) and the provided nerdfont.txt file. This picker will copy the icon to the clipboard (requires xsel installed)

```
cat "nerdfont.txt" | rofi -dmenu -i | awk '{print $1}' | xsel -i -b
```

In wayland with fuzzel and wl-copy you can issue

```
 cat nerdfont.csv  | fuzzel -d | gawk -F, '{printf $3}' | wl-copy
```

## Updating the files

The prefered method to update the files is now through a copy of `webfont.css` and the newer `updateScript.sh` bash script. However, the older `updateScript.js` is still available (see it's content for uage instructions. `updateScript.sh` takes exactly one parameter: a path to webfont.css. If this is empty, the script will attempt to use curl or wget to download the file.
