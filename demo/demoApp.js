import * as runner from '../lib/runner';

export default function (options, callback) {

    // Defines an index page to be provided by '/'
    runner.routeHomepageToFile('./index.html');

    // Routes the "/users" to the "users.html"
    runner.routeToFile('/users', './users.html');

    // Making the content of 'public-1' folder available for the app
    runner.addStaticDir('./public-1');

    // Making the content of 'public-2' folder available for the app
    runner.addStaticDir('./public-2');

    // Routing any other endpoint
    runner.app.get('/anything', (req, res) => {
        res.status(200).send('Anything!!!');
    });

    // Runs the app
    runner.run(options, callback);
}