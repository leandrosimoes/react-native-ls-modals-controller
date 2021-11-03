# react-native-js-only-module-template

A custom template that I use to build JS Only Modules for React Native

##  What this template has?

* Typescript
* Eslint
* Prettier
* Tests
* Codacy Config File
* GitHub Workflow to the package to NPM
* Example Project

## How can I use it?

There are some steps to help you setup this template for your package.

1 - Clone this project
2 - Inside the project's root folder (This folder here), execute the command `node rename.js`
3 - Following all the cli steps, your project will be set up with the new data provided
4 - Enter the `package/` folder and execute `npm i`
5 - Execute `npm run build` to build and create the `bin/` folder

### If you DO NOT want to use the `example/` project

1 - Just delete the folder (`rm -rf example`)

### If you DO WANT to use the `example/` project

1 - Follow the instructions in `README.md` file from the `example/` project folder

## Publishing the package to NPM

1 - Follow the instructions in `README.md` file from the `package/` project folder