# Baristamatic Angular Demo

This project is with created with version 13.3 of the [Angular JavaScript framework](https://v13.angular.io/docs).

A working demo of the repo is deployed here: <https://baristamatic.netlify.com/>

## Problem Requirements

To see the full requirements for this coding challenge, visit this [link](https://drive.google.com/open?id=1c4Ei1pOsLWaLqL_OjO0t-DY-9rmycaGT).

## Prerequisites

Both the CLI and generated project have dependencies that require Node 16.14.0 or higher, together with NPM 8.5.0 or higher.

Click the [link](https://nodejs.org/en/) and install Node/NPM on your machine before you continue.

## Downloading and installing the app

1. Download and extract the files in the Zip file of this code onto your local machine
2. Open a command terminal window and navigate to the extracted contents folder directory
3. Run `npm ci` to install all of the web app dependencies defined in the `package-lock.json` file (make sure Node and NPM are already installed!)
4. Run `npx playwright install` to install the browsers that will be needed by our E2E tests.
5. To run, follow the instructions below to initiate the development server

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run E2E tests

Run `npm run e2e:test` to end-to-end test the project using [Playwright](https://playwright.dev/). 

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
