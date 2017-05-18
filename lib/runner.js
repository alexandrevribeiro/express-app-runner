'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;
exports.routeHomepageToFile = routeHomepageToFile;
exports.routeToFile = routeToFile;
exports.addStaticDir = addStaticDir;
exports.run = run;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _open = require('open');

var _open2 = _interopRequireDefault(_open);

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A ridiculously fast and easy way to configure and run an express app.
 * @module express-app-runner
 */

var expressApp = (0, _express2.default)();

/* eslint-disable no-console */

var defaultRunOptions = {
    port: 3000,
    hostname: 'localhost',
    open: true,
    showListeningLog: true,
    listeningCallback: null
};

/**
 * Gets an absolute file path from the specified 'filePath'
 * 
 * @param {string} filePath 
 */
var getAbsolutePath = function getAbsolutePath(relativePath) {
    var parentDirname = _path2.default.dirname(module.parent.filename);
    return _path2.default.resolve(parentDirname, relativePath);
};

/**
 * Routes HTTP GET requests to the '/', providing the specified "filePath" by it.
 *
 * @param {string} filePath The relative path to the HTML file to be provided by '/'.
 * @function
 * @alias module:express-app-runner
 */
function routeHomepageToFile(filePath) {
    this.routeToFile('/', filePath);
}

/**
 * Routes HTTP GET requests to the specified 'urlPath', providing the specified "filePath" by it.
 *
 * @param urlPath {string} The path for which the file will be provided.
 * @param filePath {string} The relative path to the HTML file to be provided.
 * @function
 * @alias module:express-app-runner
 */
function routeToFile(urlPath, filePath) {

    filePath = getAbsolutePath(filePath);

    expressApp.get(urlPath, function (req, res) {
        res.sendFile(filePath, function (err) {
            if (err) console.error(err);
        });
    });
}

/**
 * Makes the content of 'dirPath' directory available for the app.
 * 
 * @param {string} dirPath The relative path to the directory.
 * @function
 * @alias module:express-app-runner
 */
function addStaticDir(dirPath) {
    dirPath = getAbsolutePath(dirPath);
    expressApp.use(_express2.default.static(dirPath));
}

/**
 * Runs the application.
 * 
 * @param {Object} [options] Options to configure how the app should be run.
 * @param {Object} [callback] Callback function to be called after it successfully started listening to the app.
 * @prop {string} [options.port=3000] Application port.
 * @prop {string} [options.hostname=localhost] Application hostname.
 * @prop {string} [options.open=true] Defines whether or not the application should be open after running it.
 * @prop {string} [options.showListeningLog=true] Defines whether or not it's to show a log after it successfully started listening to the app.     
 * @returns {http.Server}
 * @function
 * @alias module:express-app-runner
 */
function run(options, callback) {

    options = options || {};
    options = (0, _merge2.default)(defaultRunOptions, options);

    var server = expressApp.listen(options.port, options.hostname, function (err) {

        if (err) {
            console.error(err);
            return;
        }

        var address = 'http://' + options.hostname + ':' + options.port;

        if (options.showListeningLog) console.log('Listening to \'' + address + '\'');

        if (options.open) (0, _open2.default)(address);

        if (callback) callback(err);
    });

    return server;
}

/**
 * The expression application.
 *
 * @type {Express}     
 * @alias module:express-app-runner
 */
var app = exports.app = expressApp;