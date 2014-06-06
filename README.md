#basicseed [![Bower version](https://badge.fury.io/bo/basicseed.svg)](http://badge.fury.io/bo/basicseed)

`basicseed` is a starter template for your web based projects. It also includes some basic styles as a starting point for you. 

It does a few simple things...

  1. Lays out the folder structure for a *basic* site
  2. Basic HTML5 page with all the good stuff.
  3. SASS based *blueprint* of styles for a basic layout of your site.
    * CSS resets using [normalize](http://necolas.github.io/normalize.css/)
    * Responsive, mobile first, grid
    * Imports the [fontawesome](http://fortawesome.github.io/Font-Awesome/) package so you have lots of icons at your finger tips!
    * Plus a ton of great styles! [Check them out below](#css) for more details.
  2. Uses [**Bower**](http://bower.io) for dependency management
  3. Implements a few awesome tasks via [**Grunt**](http://gruntjs.com/)
    * Starts a web server that live reloads when you save a file and automatically opens a browser when you run the `grunt` command
    * Compiles SASS on save of a `.scss` file
    * Minifies all CSS and JS files
  
## <a name="css"></a> CSS

This is the info on the styles included in the `sass` folder.

## Directory Layout

    root/               --> all of the files
      assets/           --> production CSS, JS, font, and image files
        css/            --> css folder
          app.css       --> default stylesheet
        js/             --> js folder
          main.js       --> empty js file
        lib/            --> all library files (packages)
          fontawesome/  --> fontawesome package files
        img/            --> image files
      js/               --> unminified js files
        main.js         --> empty js file
      sass/             --> sass (uncomplied) folder
        _framework.scss --> all *base* styles, including buttons, headings, lists, etc.
        _grid.scss      --> basic grid for responsive design, based on [bootstrap](http://getbootstrap.com/) and [foundation](http://foundation.zurb.com/)
        _mixins.scss    --> any and all mixins used throughout the stylesheets
        _normalize.scss --> [normalize *library*](http://necolas.github.io/normalize.css/) by Nicolas Gallagher
        _responsive.scss--> basic media query layout
        app.scss        --> imports all of the other `.scss` files. Stick your own styles below the `import` statements
      .bowerrc          --> tells bower to install files into `assets/lib`
      .gitignore        --> ignores stuff when committing to git
      bower.json        --> specify [Bower](http://bower.io) packages for the project
      Gruntfile.js      -> [Grunt](http://gruntjs.com/) tasks, like server, minify, compile, etc.
      index.html        --> app layout file (the main html template file of the app)
      LICENSE           --> MIT license
      package.json      --> registers Grunt plugin dependencies
      README.md         --> it's what you are reading, right now!
      server.js         --> basic express server for development purposes


