# Apypos (Monster Hunter Explore Server Emulator)
This repository contains the source code for a server emulator for the game Monster Hunter Explore.

Discord: discord.gg/dnwcpxm488

## Why the Name?
The server is called Apypos. To keep with the theme Erupe set. It was originally called Boromir, after the Guild Executive from MHXR and was randomly chosen name by the initial framework developer as they had not played the game when it was live. It was changed because LOTR association just felt like it didnt fit MH which we also found it might have been a localization error.

## Prerequisites

* Node.js and npm
    * Using NVM [Download NVM here](https://github.com/nvm-sh/nvm/releases/)
        ```bash
        nvm install [version_number]
        ```
        For example:
        ```bash
        nvm install 20
        ```
    * Direct Download
        [Download Node.js and npm](https://nodejs.org/)
* Yarn
    ```bash
    npm install -g yarn
    ```
* Git (Optional)
    [Download Git for Windows](https://gitforwindows.org/)

* Mongo DB
    Install it locally [Download Mongo](https://www.mongodb.com/products/self-managed/community-edition)
    or you can run `docker-compose up` in the root of this directory if you have `https://www.docker.com/` installed.

## Setup

1. Clone the repository (if you haven't already):

    ```bash
    git clone https://github.com/zerulight/apypos
    ```

    Navigate to the project directory:

    ```bash
    cd apypos
    ```

2. Install the dependencies:

    ```bash
    yarn install
    ```
    ```bash
    yarn run install:clean
    ```

3. Configuration:

    * Ensure you have set the necessary environment variables or configurations needed by the project. Including DB Connection config.
    * Edit any configuration files if necessary.

4. Build the project:
   
    ```bash
    yarn build
    ```


## Resource Files
The server expects you to place some files for the game to download within `src\public\res\download` for your platform of choosing. Andriod or iOS. These files are FPK files a compressed archive which has the game arc files within. As the only files ive been able to get are `v0282` this is all the server supports. You can use a backup of the games files and run the [FPK Packer](https://gist.github.com/stratic-dev/0021fb33c408f2cdd40296f6e4988fb2) over the files to generate these fpks.

## Banner resources
The game would download extra banners on start up for events. This is disabled but if you want to enable this you need to populate the API in `src\controllers\bannerController.ts` and then place your respective files in `src\public\res\banner` for your platform of choosing. Pre installed files would have these files bundled in you would need to seperate them out from resource files. 


## Running the Project

After setting up and Putting the resource files in you can run the project using:

  ```bash
    yarn start
  ```
Alternatively you can run it in dev mode which enables nodemon for automatic file refresh

  ```bash
    yarn run start:dev
  ```

Your server should start, and you should be able to access it on `http://localhost:80` or whatever port you've configured.



# ID's and Quests
Most IDs can be found in the game files under `arc_cmn\resident` you will need to extract the arcs and then convert the xfs files to xml. There is a tool called Revil Toolkit `https://github.com/PredatorCZ/RevilLib`

## Logging

This project uses Winston for logging. Logs are displayed in the console in the format:


Request: [HTTP_METHOD] [URL] | Response: [STATUS_CODE] [RESPONSE_TIME]ms

# Patching the game (Andriod)
## Requirements
- https://apktool.org/docs/install Get the bat script and the jar file 
- https://github.com/patrickfav/uber-apk-signer/releases/tag/v1.3.0 Get the jar file
## Unpack
```bash
.\apktool.bat d .\MHXR_base.apk
```
You should see a new folder called the name of the apk. 

## Modify IP
look in the new folder for the following files using a hex editor like 010 or imhex
.\lib\arm64-v8a\libMHS.so
.\lib\armeabi-v7a\libMHS.so 

Look for the string `https://mhxr-dispatch.s3-ap-northeast-1.amazonaws.com/` modify it with your ip and zeroing out the rest of the string. Ensure its http.

## Modify the AndriodManifest.xml 
In the root of the unpacked folder look for AndriodManifest.xml
Inside find the string
```xml
<application android:appComponentFactory="android.support.v4.app.CoreComponentFactory" android:hardwareAccelerated="true" android:hasCode="true" android:icon="@mipmap/ic_launcher" android:label="@string/app_name" android:name="android.support.multidex.MultiDexApplication">
```
Find that line
and then modify it to be
```xml
<application android:appComponentFactory="android.support.v4.app.CoreComponentFactory" android:debuggable="true" android:hardwareAccelerated="true" android:hasCode="true" android:icon="@mipmap/ic_launcher" android:label="@string/app_name" android:name="android.support.multidex.MultiDexApplication" android:usesCleartextTraffic="true">
```

## Repack
Repack the apk use the folder that was unpacked in the below command. It should produce a new apk.
```bash
.\apktool.bat b -o mhxr-patched.apk .\MHXR_base\
```
## Resign
```bash 
java -jar .\uber-apk-signer-1.3.0.jar -a ".\mhxr-patched.apk" -out ./out
```
## Install
It should be in a folder ./out/mhxr-patched.apk place this on to your andriod device and install it


# Patching the game (iOS)
1. Rebane the .ipa to .zip 
2. Unzip the IPA
3. Modify MHXR file with your ip by searching for https://mhxr-dispatch. and zeroing out the rest of the string. Ensure its http. then save the file
4. Rezip the Zip file and rename back to .ipa
5. Use sideloadly to sideload.
