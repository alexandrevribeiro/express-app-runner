/* eslint-disable no-console */

var expect = require('chai').expect;
var request = require('request');
var demoApp = require('../demo/demoApp');

var appPort = 3123;
var appUrl = 'http://localhost:' + appPort;

// Runs the demo app
before(function(done) {    
    demoApp({
        port: appPort,
        open: false,
        showListeningLog: false,
        listeningCallback: function()  { done(); }
    });
});


// Testing the index page (/)
describe('Demo app', function () {
    it('should provide an "index.html" at "' + appUrl + '"', function (done) {

        request(appUrl, function (error, response, body) {
            expect(body).to.contains('<h1>Express app runner...</h1>');                
            done();
        });
    });
});

// Testing the users page (/users)
describe('Demo app', function () {
    it('should provide a "users.html" at "' + appUrl + '/users"', function (done) {

        request(appUrl + '/users', function (error, response, body) {
            expect(body).to.contains('<h1>Users...</h1>');                
            done();
        });
    });
});

// Testing the "/anything" page
describe('Demo app', function () {
    it('should provide the text "Anything!!!" at "' + appUrl + '/anything"', function (done) {

        request(appUrl + '/anything', function (error, response, body) {
            expect(body).to.contains('Anything!!!');                
            done();
        });
    });
});

// Testing if there is the 'app-2.js' file being statically provided by the app
describe('Demo app', function () {
    it('should provide a JavaScript file at "' + appUrl + '/app-1.js"', function (done) {

        request(appUrl + '/app-1.js', function (error, response, body) {
            expect(body).to.contains('console.log(\'"public-1/app.js" was loaded!\');');                
            done();
        });
    });
});

// Testing if there is the 'app-2.js' file being statically provided by the app
describe('Demo app', function () {
    it('should provide a JavaScript file at "' + appUrl + '/app-2.js"', function (done) {

        request(appUrl + '/app-2.js', function (error, response, body) {
            'console.log(\'"public-2/app.js" was loaded!\');'
            done();
        });
    });
});
