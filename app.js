'use strict';

require('rootpath')();
var app = require('express')();
var port = process.env.PORT || 5000;

// Setup database connection
require('app/middleware/db');

// Setup extra stuff for express
require('app/middleware/express')(app);

// Load all routes
require('app/routes')(app);

app.listen(port, function() {
	console.log('Server listening at http://localhost:%s.', port);
});
exports = module.exports = app;
