## OVERVIEW
There are two syntaxes available for Sass. The first, known as SCSS (Sassy CSS), is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. This syntax is enhanced with the Sass features. Files using this syntax have the .scss extension. 

The second and older syntax, known as the indented syntax (or sometimes just “Sass”), provides a more concise way of writing CSS. It uses indentation rather than brackets to indicate nesting of selectors, and newlines rather than semicolons to separate properties. Files using this syntax have the .sass extension.

## PREREQUISITES
1) Install Node.js
2) Install Sass from terminal with: npm install node-sass -g
3) Download Atom Text Editor
4) Install the extension sass-autocompiler in Atom.

## COMPILE
After installing all the prerequisites, when you use Atom, every time you will save or update the .scss or .sass file, the Text Editor will generate automatically the file min.css in the same folder.

## COMPILE FROM TERMINAL
If you want to compile from terminal and not through the extensions of the Text Editor, then go with the terminal in the same folder of your .scss or .sass file and type:<br> node-sass file.scss -o .<br> This will generate a file.css file in the same folder.
