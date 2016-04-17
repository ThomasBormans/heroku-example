'use strict';

require('rootpath')();
var bodyParser = require('body-parser');
var helmet = require('helmet');
module.exports = function(app) {
	app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
	app.use(bodyParser.json({limit: '50mb', keepExtensions: true}));

	// Using helmet to make app more secure
	app.use(helmet.xframe());
	app.use(helmet.xssFilter());
	app.use(helmet.nosniff());
	app.use(helmet.ienoopen());
	app.disable('x-powered-by');
};
