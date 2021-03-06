# express-app-runner 

[![Greenkeeper badge](https://badges.greenkeeper.io/alexandrevribeiro/express-app-runner.svg)](https://greenkeeper.io/)
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
Running a simple app with an `index.html` as the homepage and making the content of the `public` directory available to the app:
```js
var runner = require('express-app-runner');

// Defines an index page to be provided by '/'
runner.routeHomepageToFile('./index.html');

// Making the content of the 'public' directory available for the app though the '/' path.
// It may be useful to make JS and CSS files available to the app, 
// although most of the time you will probably be using a bundler like Webpack.
runner.addStaticDir('./public');

// Runs the app
runner.run();
```

A more complex sample:
```js
var runner = require('express-app-runner');

// Defines an index page to be provided by '/'
runner.routeHomepageToFile('./index.html');

// Routes the "/users" to the "users.html"
runner.routeToFile('/users', './users.html');

// Routes the "/another" to the "another.html"
runner.routeToFile('/another', './../anyOtherDir/another.html');

// Making the content of the 'public' directory available for the app though the '/static' path
// It may be useful to make JS and CSS files available to the app, 
// although most of the time you will probably be using a bundler like Webpack.
runner.addStaticDir('./public', '/static');

// Routing any other endpoint
runner.app.get('/anything', function (req, res) {
    res.status(200).send('Anything!!!');
});

// Runs the app
runner.run({
    port: 4000,
    hostname: 'my_hostname',
    open: false,
    showListeningLog: false,
}, function(err) {
    doSomething();
});
```

[npm-url]: https://npmjs.org/package/express-app-runner
[npm-image]: https://badge.fury.io/js/express-app-runner.svg

[travis-url]: https://travis-ci.org/alexandrevribeiro/express-app-runner
[travis-image]: https://img.shields.io/travis/alexandrevribeiro/express-app-runner.svg?label=unix

[appveyor-url]: https://ci.appveyor.com/project/alexandrevribeiro/express-app-runner
[appveyor-image]: https://img.shields.io/appveyor/ci/alexandrevribeiro/express-app-runner.svg?label=windows