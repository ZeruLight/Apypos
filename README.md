# Project Boromir
This repository contains the source code for a private server for the game Monster Hunter Explore.
discord.gg/dnwcpxm488

## Why the Name?
The server is called Boromir, after the Guild Executive from MHXR, but the name was randomly chosen by the developer as they had not played the game when it was live.

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

## Setup

1. Clone the repository (if you haven't already):

    ```bash
    git clone https://github.com/mehrdavon/boromir
    ```

    Navigate to the project directory:

    ```bash
    cd boromir
    ```

2. Install the dependencies:

    ```bash
    yarn install
    ```
    ```bash
    yarn run install:clean
    ```

3. Configuration:

    * Ensure you have set the necessary environment variables or configurations needed by the project.
    * Edit any configuration files if necessary.

4. Build the project:
   
    ```bash
    yarn build
    ```

## Running the Project

After setting up, you can run the project using:

  ```bash
    yarn start
  ```
Alternatively you can run it in dev mode which enables nodemon for automatic file refresh

  ```bash
    yarn run start:dev
  ```

Your server should start, and you should be able to access it on `http://localhost:80` or whatever port you've configured.

## Logging

This project uses Winston for logging. Logs are displayed in the console in the format:


Request: [HTTP_METHOD] [URL] | Response: [STATUS_CODE] [RESPONSE_TIME]ms
