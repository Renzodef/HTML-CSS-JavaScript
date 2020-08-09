## PREREQUISITES
1) Install Node.js
2) Install Sass from terminal with: npm install node-sass -g
3) Download Atom Text Editor
4) Install the extension sass-autocompiler in Atom.

## COMPILE
After installing all the prerequisites, when you use Atom, every time you will save or update the .scss file, the Text Editor will generate automatically the file min.css in the same folder.

## COMPILE FROM TERMINAL
If you want to compile from terminal and not through the extensions of the Text Editor, then go with the terminal in the same folder of your .scss file and type:<br> node-sass file.scss -o .<br> This will generate a file.css file in the same folder.
