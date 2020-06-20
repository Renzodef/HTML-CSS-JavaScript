## PREREQUISITES
- Install Node.js.
- Install Gradle.
- Install Android Studio and the Android SDK.
- Add tools, tools/bin and platform-tools of the Android SDK to the environment variables.

## INSTALLING APACHE CORDOVA
Install Apache Cordova from terminal with: <br>
npm install -g cordova <br>
On Linux and macOS use: <br> 
sudo npm install -g cordova

## CREATION OF THE PROJECT
Create the project from terminal in the directory you like with: <br>
cordova create App <br> 
Then: <br>
1) In the root folder of the project change the config.xml file with the one you have here.
2) In the folder www of the project change the index.html file with the one you have here.
3) In the folder /www/img of the project change the logo.png file with the one you have here.

## BUILD THE .APK FILE
From terminal after this go in the directory root of the project and type: <br/>
cordova platform add android <br/>
And then: <br/>
cordova build <br/>
In the terminal you'll see the directory where the debug.apk file was created.
