'use strict';

require('rootpath')();
var app = require('express')();

// Setup database connection
require('app/middleware/db');

// Setup extra stuff for express
require('app/middleware/express')(app);

// Load all routes
require('app/routes')(app);

app.listen(5000, function() {
	console.log('Server listening at http://localhost:5000.');
});
exports = module.exports = app;
