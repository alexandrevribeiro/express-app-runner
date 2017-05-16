# express-app-runner 
[![NPM version][npm-image]][npm-url]
[![Travis Build Status][travis-image]][travis-url]
[![AppVeyor Build Status][appveyor-image]][appveyor-url]

A ridiculously fast and easy way to configure and run an express app.

Installing
---
    npm install express-app-runner --save

Documentation
---
[Documentation is available here](https://github.com/alexandrevribeiro/express-app-runner/blob/master/docs/documentation.md).

Samples
---
Running a simple app with an `index.html` as the root page and making the content of the `public` directory available to the app:
```js
var runner = require('express-app-runner');
var path = require('path');

var indexFilePath = path.join(__dirname, 'index.html');
var publicDirPath = path.join(__dirname, '/public';

// Defines an index page to be provided by '/'
runner.setIndexPage(indexFilePath);

// Making the content of the 'public' folder available for the app
runner.addStaticDir(publicDirPath);

// Runs the app
runner.run();
```

A more complex sample:
```js
var runner = require('express-app-runner');
var path = require('path');

var indexFilePath = path.join(__dirname, 'index.html');
var usersFilePath = path.join(__dirname, 'users.html');
var publicDirPath1 = path.join(__dirname, 'public-1');
var publicDirPath2 = path.join(__dirname, 'public-2');

// Defines an index page to be provided by '/'
runner.setIndexPage(indexFilePath);

// Adds "users" page to be provided by '/users'
runner.addPage('/users', usersFilePath);

// Making the content of 'public-1' folder available for the app
runner.addStaticDir(publicDirPath1);

// Making the content of 'public-2' folder available for the app
runner.addStaticDir(publicDirPath2);

// Adding any other endpoint
runner.app.get('/anything', function(req, res) {
    res.status(200).send('Anything!!!');
});

// Runs the app
runner.run({
    port: 4000,
    hostname: 'my_hostname',
    open: false,
    showListeningLog: false,
    listeningCallback: function() { doSomething(); }
});
```

[npm-url]: https://npmjs.org/package/express-app-runner
[npm-image]: https://badge.fury.io/js/express-app-runner.svg

[travis-url]: https://travis-ci.org/alexandrevribeiro/express-app-runner
[travis-image]: https://travis-ci.org/alexandrevribeiro/express-app-runner.svg?branch=master

[appveyor-url]: https://ci.appveyor.com/project/alexandrevribeiro/express-app-runner
[appveyor-image]: https://ci.appveyor.com/api/projects/status/github/alexandrevribeiro/express-app-runner?svg=true