# Markdown Previewer

Visit the application [here](https://markdown-viewer-sp.herokuapp.com/)

## Goals
  * __User Story:__ I can type GitHub-flavored Markdown into a text area.

  * __User Story:__ I can see a preview of the output of my markdown that is updated as I type.

## Installation

1. Make sure you have [npm](https://www.npmjs.com/) installed.
2. Navigate to the root directory of the application and run `npm install` to install the required modules. You should see a node_modules folder in the root directory.

## Usage

### Development environment

Run `npm run startdev` to start a development environment using port 8080.  

### Production environment

1. Run `npm run bundle` to create your dist/ folder (your production environment).
2. Run `npm run start` to run your production environment.

## Built with

* [Node.js](https://nodejs.org/en/) - Platform Used
* [React](https://facebook.github.io/react/) - Web framework Used
* [marker](https://www.npmjs.com/package/marker) - Markdown utility
* [DOMPurify](https://github.com/cure53/DOMPurify) - XSS sanitizer

## Author

* [Sebastian Petak](http://www.sebastianpetak.com/)
