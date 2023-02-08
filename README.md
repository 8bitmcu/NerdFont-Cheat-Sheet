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
