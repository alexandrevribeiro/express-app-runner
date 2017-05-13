var runner = require('../lib/runner');
var path = require('path');

var indexFilePath = path.join(__dirname, 'index.html');
var usersFilePath = path.join(__dirname, 'users.html');
var publicDirPath1 = path.join(__dirname, 'public-1');
var publicDirPath2 = path.join(__dirname, 'public-2');

// Defines a index page to be provided by '/'
runner.setIndexPage(indexFilePath);

// Adds "users" page to be provided by '/users'
runner.addPage('/users', usersFilePath);

// Making the content of 'public-1' folder available for the app
runner.addStaticDir(publicDirPath1);

// Making the content of 'public-2' folder available for the app
runner.addStaticDir(publicDirPath2);

// Adding any other endpoint
runner.app.get('/anything', function(req, res) {
    res.send(200, 'Anything!!!');
});

// Runs the app
runner.run();