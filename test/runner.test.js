/* eslint-disable no-console */

var expect = require('chai').expect;
var axios = require('axios');
var demoApp = require('../demo/demoApp');

var appPort = 3123;
var appUrl = 'http://localhost:' + appPort;

before(function(done) {
    // Runs the demo app
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

        axios.get(appUrl)
            .then(function (response) {
                expect(response.data).to.contains('<h1>Express app runner...</h1>');                

                // When you're doing an async test you need to call "done()" after your async code
                // has completed, and your test has modified everything it needs to modify, so you 
                // can check the results correctly.
                done();
            })
            .catch(done);        
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
            .catch(done);
    });
});

// Testing the "/anything" page
describe('Demo app', function () {
    it('should provide the text "Anything!!!" at "' + appUrl + '/anything"', function (done) {

        axios.get(appUrl + '/anything')
            .then(function (response) {
                expect(response.data).to.equal('Anything!!!');                
                done();
            })
            .catch(done);
    });
});

// Testing if there is the 'app-2.js' file being statically provided by the app
describe('Demo app', function () {
    it('should provide a JavaScript file at "' + appUrl + '/app-1.js"', function (done) {

        axios.get(appUrl + '/app-1.js')
            .then(function (response) {
                expect(response.data).to.contains('console.log(\'"public-1/app.js" was loaded!\');');
                done();
            })
            .catch(done);
    });
});

// Testing if there is the 'app-2.js' file being statically provided by the app
describe('Demo app', function () {
    it('should provide a JavaScript file at "' + appUrl + '/app-2.js"', function (done) {

        axios.get(appUrl + '/app-2.js')
            .then(function (response) {
                expect(response.data).to.contains('console.log(\'"public-2/app.js" was loaded!\');');
                done();
            })
            .catch(done);
    });
});
