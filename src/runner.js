/**
 * A ridiculously fast and easy way to configure and run an express app.
 * @module express-app-runner
 */

var express = require('express');
var open = require('open');
var merge = require('merge');
var path = require('path');
var app = express();

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
function getAbsolutePath(relativePath) {
    var parentDirname = path.dirname(module.parent.filename);
    return path.resolve(parentDirname, relativePath);    
}

module.exports = {

    /**
     * Routes HTTP GET requests to the '/', providing the specified "filePath" by it.
     *
     * @param {string} filePath The relative path to the HTML file to be provided by '/'.
     * @function
     * @alias module:express-app-runner
     */
    routeHomepageToFile: function (filePath) {
        this.routeToFile('/', filePath);
    },

    /**
     * Routes HTTP GET requests to the specified 'urlPath', providing the specified "filePath" by it.
     *
     * @param urlPath {string} The path for which the file will be provided.
     * @param filePath {string} The relative path to the HTML file to be provided.
     * @function
     * @alias module:express-app-runner
     */
    routeToFile: function (urlPath, filePath) {

        filePath = getAbsolutePath(filePath);

        app.get(urlPath, function (req, res) {
            res.sendFile(filePath, function (err) {
                if (err) console.error(err);
            });
        });
    },

    /**
     * Makes the content of 'dirPath' directory available for the app.
     * 
     * @param {string} dirPath The relative path to the directory.
     * @function
     * @alias module:express-app-runner
     */
    addStaticDir: function (dirPath) {
        dirPath = getAbsolutePath(dirPath);
        app.use(express.static(dirPath));
    },

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
    run: function (options, callback) {

        options = options || {};
        options = merge(defaultRunOptions, options);

        var server = app.listen(options.port, options.hostname, function (err) {

            if (err) {
                console.error(err);
                return;
            }

            var address = 'http://' + options.hostname + ':' + options.port;

            if (options.showListeningLog)
                console.log('Listening to \'' + address + '\'');

            if (options.open)
                open(address);

            if (callback)
                callback(err);
        });

        return server;
    },

    /**
     * The expression application.
     *
     * @type {Express}     
     * @alias module:express-app-runner
     */
    app: app
};