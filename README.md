# React with Typescript

## About

This is about to do the initial set up of React with Typescript.

## Prerequisite

1. [NodeJS](http://www.nodejs.org/) - recommended veriosn 6.x and above.

## Clone/Download Repository

Download or Clone the react-starter-pack repo [here](https://github.com/sendray/react-starter-pack)

## Install **npm** modules

Install all the dependencies which are required to run your project using the following command.

```
npm install
```

Note: Please make sure that you are in the project path. 

## Startup

The following command will

* Compiles & Run the app
* Starts a web server hosting the app @ http://localhost:8080
* Serves the content from ./dist folder
* Watches for changes and injects them without reloading the browser (livereload)

```
npm start
```

# Steps to wireup TypeScript with React and webpack from scratch 

## Prerequisite

1. [Node.js](http://www.nodejs.org/) - recommended veriosn 6.x and above.

## Layout the Project

Lets create a new directory with the name 'react-starter-pack'.

```
mkdir react-starter-pack 
cd react-starter-pack
``` 

To start, we’re going to structure our project in the following way:

```
react-starter-pack/
└─ src/
   └─ components/
```

* Any components that we write will go in the 'src/components' folder.

```
mkdir src
cd src
mkdir components
cd ..
```

## Initialize the project

```
npm init
```

This will create package.json in your folder.

## Install our dependencies

Webpack is a tool that will bundle your code and optionally all of its dependencies into a single .js file
[learn more](https://webpack.js.org/concepts/)

local:

```
npm install --save webpack 
```

or gloabal:

```
npm install -g webpack
```

The webpack-dev-server will serve the files in the current directory
[learn more](https://webpack.js.org/configuration/dev-server/)

```
npm install --save-dev webpack-dev-server
```

### Add React and React-DOM, along with their declaration files

```
npm install --save react react-dom @types/react @types/react-dom
```

### Add Typescript and Typescript Loader
[learn more](https://www.typescriptlang.org/)

```
npm install --save-dev typescript ts-loader
```

### Add HTML Webpack Plugin

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
[learn more](https://webpack.js.org/plugins/html-webpack-plugin/)

```
npm install --save-dev html-webpack-plugin
```