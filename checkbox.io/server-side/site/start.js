/*jslint nomen: true */
var nopt = require('nopt'),
    config = nopt({ coverage: Boolean }),
    istanbulMiddleware = require('istanbul-middleware'),
    coverageRequired = config.coverage,
    port = 3002;

if (coverageRequired) {
    console.log('Turning on coverage; ensure this is not production');
    istanbulMiddleware.hookLoader(__dirname, { verbose: true });
}
console.log('Starting server at: http://127.0.0.1:');
if (!coverageRequired) {
    console.log('Coverage NOT turned on, run with --coverage to turn it on');
}
require('./server.js');