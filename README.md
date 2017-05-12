# express-app-runner [![NPM version][npm-image]][npm-url]
A ridiculously fast way to configure and run an express app.

Installing
---
    npm install express-app-runner --save

Using
---

```js
var runner = require('express-app-runner');

var indexFilePath = __dirname + '/index.html';
var publicDirPath = __dirname + '/public';

// Defines a index page to be provided by '/'
runner.setIndexFile(indexFilePath);

// Making the content of 'public' folder available for the app
runner.setStaticDir(publicDirPath);

// Runs the app
runner.run();
```

> 

[npm-url]: https://npmjs.org/package/express-app-runner
[npm-image]: http://img.shields.io/npm/v/express-app-runner.svg