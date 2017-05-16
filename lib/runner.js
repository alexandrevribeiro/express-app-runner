/**
 * A ridiculously fast and easy way to configure and run an express app.
 * @module express-app-runner
 */

var express = require('express');
var open = require('open');
var merge = require('merge');
var app = express();

var defaultRunOptions = {
    port: 3000,
    hostname: 'localhost',
    open: true,
    showListeningLog: true,
    listeningCallback: null
};

/* eslint-disable no-console */

module.exports = {

    /**
     * Defines an index page to be provided by '/'.
     *
     * @param {string} filePath Path to the HTML file to be provided by '/'.
     * @function
     * @alias module:express-app-runner
     */
    setIndexPage: function (filePath) {
        this.addPage('/', filePath);
    },

    /**
     * Adds a page to be provided by the specified 'urlPath'.
     * 
     * @param urlPath {string} Path where the page will be provided.
     * @param filePath {string} Path to the HTML file to be provided.
     * @function
     * @alias module:express-app-runner
     */
    addPage: function (urlPath, filePath) {
        app.get(urlPath, function(req, res) {
            res.sendFile(filePath, function(err) {
                if (err) console.error(err);
            });
        });
    },

    /**
     * Makes the content of 'dirPath' directory available for the app.
     * 
     * @param {string} dirPath Directory path.
     * @function
     * @alias module:express-app-runner
     */
    addStaticDir: function (dirPath) {
        app.use(express.static(dirPath));
    },    

    /**
     * Runs the application.
     * 
     * @param {Object} [options] Options to configure how the app should be run.
     * @prop {string} [options.port=3000] Application port.
     * @prop {string} [options.hostname=localhost] Application hostname.
     * @prop {string} [options.open=true] Defines whether or not the application should be open after running it.
     * @prop {string} [options.showListeningLog=true] Defines whether or not it's to show a log after it successfully started listening to the app.
     * @prop {string} [options.listeningCallback=null] Callback function to be called after it successfully started listening to the app.
     * @returns {http.Server}
     * @function
     * @alias module:express-app-runner
     */
    run: function (options) {

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

            if (options.listeningCallback)
                options.listeningCallback(err);
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