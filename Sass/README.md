## PREREQUISITES
1) Install Node.js
2) Install Sass from terminal with: npm install node-sass -g
3) Download Visual Studio Code or Atom Text Editor
4) Install the extension Sass/Less/Scss/Typescript/Javascript/Jade/Pug Compile Hero Pro in Visual Studio Code or the extension sass-autocompiler in Atom.

## COMPILE
After installing all the prerequisites, you can manage the preference of the extensions you installed in the Text Editor of your choice through the extension settings and then, every time you will save or update the .sass file, the Text Editor will generate automatically the file .css and .min.css in the folder you choose through the settings.

## COMPILE FROM TERMINAL
If you want to compile from terminal and not through the extensions of the Text Editor, then go with the terminal in the same folder of your .sass file and type:<br> node-sass style.sass -o .<br> This will generate a style.css file in the same folder.
