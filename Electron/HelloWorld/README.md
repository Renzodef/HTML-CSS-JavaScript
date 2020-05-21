## PREREQUISITES
- Install Node.js
- Install Electron from terminal with:<br>
npm install electron -g<br>
(If you are on Linux or Mac add "sudo" before the command)

## RUN THE APP
- Run the project from terminal with:<br>
electron .<br>
or<br>
electron app.js<br>
or<br>
npm start
- Then you should see a window with an "Hello World" displayed plus some informations about the used technologies.

## BUILD A WINDOWS EXECUTABLE
- Install from terminal:<br>
npm install electron-packager -g<br>
(If you are on Linux or Mac add "sudo" before the command)
- Go from terminal in the directory of this project and type:<br>
electron-packager . HelloWorld --platform=win32 --arch=x64 --electron-version=9.0.0<br>
You can change HelloWorld according to the name you wanna give to the app.<br>
Change the electron-version according to the one you have installed (check from terminal with "electron -v")
- You'll find in the new created folder (HelloWorld-win32-x64) the .exe file to run (HelloWorld.exe).