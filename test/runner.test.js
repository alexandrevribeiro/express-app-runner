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

describe('Demo app', function () {
    it('should provide an "index.html" at "' + appUrl + '"', function (done) {

        axios.get(appUrl)
            .then(function (response) {
                var indexContent = response.data;
                expect(indexContent).to.contains('<h1>Express app runner...</h1>');                

                // When you're doing an async test you need to call "done()" after your async code
                // has completed, and your test has modified everything it needs to modify, so you 
                // can check the results correctly.
                done();
            })
            .catch(function (error) {
                console.log(error);
            });        
    });
});