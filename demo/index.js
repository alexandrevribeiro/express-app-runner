var runner = require('../src/runner');
var path = require('path');

var indexFilePath = path.join(__dirname, 'index.html');
var publicDirPath = path.join(__dirname, 'public');

// Defines a index page to be provided by '/'
runner.setIndexFile(indexFilePath);

// Making the content of 'public' folder available for the app
runner.setStaticDir(publicDirPath);

// Runs the app
runner.run();