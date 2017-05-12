var express = require('express');
var open = require('open');
var merge = require('merge');
var http = require('http');

http.createServer(app).listen()

var app = express();

var defaultRunOptions = {
    port: 3000,
    hostname: 'localhost',
    open: true,
    showListeningLog: true,
    listeningCallback: null
};

module.exports = {

    setIndexFile: function (filePath) {
        app.get('/', function(req, res) {
            res.sendFile(filePath);
        });
    },

    setStaticDir: function (dirPath) {
        app.use(express.static(dirPath));
    },    

    run: function (options) {

        options = options || {};
        options = merge(defaultRunOptions, options);

        var server = app.listen(options.port, options.hostname, function (err, aaa, bbb, ccc) {

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

    app: app
};