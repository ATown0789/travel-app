# FEND Capstone Travel App

## Description

A project to practice:
* fetching information from multiple APIs
* configuring and using webpack build tool to organize source code.
* the beginnings of jest testing
* service workers.
* writing and debugging:
	* server side code (Node.js/Express)
	* asynchronous javascript
	* client side to server side GET and POST Routes
	* using thrid party APIs.

## Prerequisites

### Dependencies
* Node.js
* Express
* cors
* body-parser
* dotenv
* webpack
* webpack-cli
* opencagedata API key
* weatherbit API key
* pixabay API key

### Dev-dependencies
* babel/core
* babel/preset-env
* clean-webpack-plugin
* css-loader
* html-webpack-plugin
* jest
* mini-css-extract-plugin
* node-sass
* optimize-css-assets-webpack-plugin
* sass-loader
* style-loader
* terser-webpack-plugin
* webpack-dev-server

## Installation

1. You can either clone or fork this repository to your local machine.
	For step by step instruction on how to do so check out these links

	* [Cloning a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
	* [Forking a repository](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)

2. Setup a Node.js environment.

3. npm install dependencies

4. Get OpenCageData API credentials.

5. Get weatherbit API credentials

6. Get pixabay API credentials

7. Create a config.js file that contains your OpenCageData API credentials

8. Create a .env file that contains your weatherbit and pixabay API credentials

9. ```npm run build-prod```

10. ```npm run start```

11. ```npm run build-dev```

## Runtime Environment
Any modern web browser and Node.js with npm

## Steps Taken To Build App

The following tasks were completed in this project:

* Setup the Node.js environment.
* Added the express, body-parser, and cors modules to Node.
* Ran the local server and printed out logs to the Command Line.
* Created API credentials with each API
* The personal API key's are stored in a .env or config.js file for safe keeping.
* Utilize webpack to organize and load files
* Utilize webpack-dev-server to edit code in a dev friendly environment
* Data is successfully received from the Aylien API.
* Implemented POST routes on both the client and the server.
* Dynamically display app data.
* Add event listener to the form button using JS.
* Use simple jest test to learn the basics
* Use service workers to cache app for offline use

## Acknowledgements

* Udacity's html and css structure