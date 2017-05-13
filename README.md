# express-app-runner [![NPM version][npm-image]][npm-url]
A ridiculously fast and easy way to configure and run an express app.

Installing
---
    npm install express-app-runner --save

Documentation
---
[Documentation is available here](https://github.com/vribeiro-alexandre/express-app-runner/blob/master/docs/documentation.md).

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
    res.status(status).send('Anything!!!');
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
[npm-image]: http://img.shields.io/npm/v/express-app-runner.svg