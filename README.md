# React with Typescript

## About

Configure React project using Typescript and Webpack.

## Milestones

- [x] Initial Setup - React + TypeScript + Webpack 1.x
- [ ] Upgrade to Webpack2
- [ ] SASS/LESS compilers 
- [ ] CSS, JS optimisation
- [ ] Production bundle
- [ ] SVG & Image
- [ ] Testing framework
- [ ] Version Management

## Prerequisite

1. [NodeJS](http://www.nodejs.org/) - recommended veriosn 6.x and above.

## Clone/Download Repository

[https://github.com/sendray/react-starter-pack.git](https://github.com/sendray/react-starter-pack.git)

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

# From the scratch 

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

This will create package.json in your folder. This is where the meta data of your project is captured.

## Install Dependencies

Webpack is a tool that will bundle your code and optionally all of its dependencies into a single .js file.

[To learn more](https://webpack.js.org/concepts/)

locally

```
npm install --save webpack 
```

or gloabally

```
npm install -g webpack
```

The webpack-dev-server will serve the files in the current directory.

[To learn more](https://webpack.js.org/configuration/dev-server/)

```
npm install --save-dev webpack-dev-server
```

### React and React-DOM, along with their declaration files

```
npm install --save react react-dom @types/react @types/react-dom
```

### Typescript and Typescript Loader

[To learn more](https://www.typescriptlang.org/)

```
npm install --save-dev typescript ts-loader
```

### HTML Webpack Plugin

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles.

[To learn more](https://webpack.js.org/plugins/html-webpack-plugin/)

```
npm install --save-dev html-webpack-plugin
```

Note: You can use yarn instead of npm package manager.
[Read this article to know more](https://medium.com/@justin.pathrose/configure-react-project-using-typescript-and-webpack-f69faee3e915)


This is all about the basic set-up. Now enjoy coding!