/* eslint-disable no-console */

var expect = require('chai').expect;
var axios = require('axios');
var demoApp = require('../demo/demoApp');

var appPort = 3123;
var appUrl = 'http://localhost:' + appPort;

// Runs the demo app
demoApp({
    port: appPort,
    open: false,
    showListeningLog: false
});

// Testing the index page (/)
describe('Demo app', function () {
    it('should provide an "index.html" at "' + appUrl + '"', function (done) {

        axios.get(appUrl)
            .then(function (response) {
                expect(response.data).to.contains('<h1>Express app runner...</h1>');                

                // When you're doing an async test you need to call "done()" after your async code
                // has completed, and your test has modified everything it needs to modify, so you 
                // can check the results correctly.
                done();
            })
            .catch(function (error) {
                console.error(error);
            });        
    });
});

// Testing the users page (/users)
describe('Demo app', function () {
    it('should provide a "users.html" at "' + appUrl + '/users"', function (done) {

        axios.get(appUrl + '/users')
            .then(function (response) {
                expect(response.data).to.contains('<h1>Users...</h1>');                

                // When you're doing an async test you need to call "done()" after your async code
                // has completed, and your test has modified everything it needs to modify, so you 
                // can check the results correctly.
                done();
            })
            .catch(function (error) {
                console.error(error);
            });
    });
});

// Testing the "/anything" page
describe('Demo app', function () {
    it('should provide the text "Anything!!!" at "' + appUrl + '/anything"', function (done) {

        axios.get(appUrl + '/anything')
            .then(function (response) {
                expect(response.data).to.equal('Anything!!!');                

                // When you're doing an async test you need to call "done()" after your async code
                // has completed, and your test has modified everything it needs to modify, so you 
                // can check the results correctly.
                done();
            })
            .catch(function (error) {
                console.error(error);
            });
    });
});
