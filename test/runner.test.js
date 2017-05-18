/* eslint-disable no-console */

import {expect} from 'chai';
import request from 'request';
import demoApp from '../demo/demoApp';

const appPort = 3123;
const appUrl = 'http://localhost:' + appPort;

// Runs the demo app
before((done) => {
    demoApp({
        port: appPort,
        open: false,
        showListeningLog: false
    }, () => {
        done();
    });
});


// Testing the index page (/)
describe('Demo app', () => {
    it('should provide an "index.html" at "' + appUrl + '"', (done) => {

        request(appUrl, (error, response, body) => {
            expect(body).to.contains('<h1>Express app runner...</h1>');
            done();
        });
    });
});

// Testing the users page (/users)
describe('Demo app', () => {
    it('should provide a "users.html" at "' + appUrl + '/users"', (done) => {

        request(appUrl + '/users', (error, response, body) => {
            expect(body).to.contains('<h1>Users...</h1>');
            done();
        });
    });
});

// Testing the "/anything" page
describe('Demo app', () => {
    it('should provide the text "Anything!!!" at "' + appUrl + '/anything"', (done) => {

        request(appUrl + '/anything', (error, response, body) => {
            expect(body).to.contains('Anything!!!');
            done();
        });
    });
});

// Testing if there is the 'app-2.js' file being statically provided by the app
describe('Demo app', () => {
    it('should provide a JavaScript file at "' + appUrl + '/app-1.js"', (done) => {

        request(appUrl + '/app-1.js', (error, response, body) => {
            expect(body).to.contains('console.log(\'"public-1/app.js" was loaded!\');');
            done();
        });
    });
});

// Testing if there is the 'app-2.js' file being statically provided by the app
describe('Demo app', () => {
    it('should provide a JavaScript file at "' + appUrl + '/app-2.js"', (done) => {

        request(appUrl + '/app-2.js', (error, response, body) => {
            expect(body).to.contains('console.log(\'"public-2/app.js" was loaded!\');');
            done();
        });
    });
});
