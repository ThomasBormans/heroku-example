'use strict';

require('rootpath')();
var ExamplesController = require('app/controllers/examples');
var baseUrl = '/api/example/';
module.exports = function(app) {
	app.route(baseUrl).get(ExamplesController.read);
	app.route(baseUrl + ':uuid').get(ExamplesController.readOne);
	app.route(baseUrl).post(ExamplesController.create);
	app.route(baseUrl + ':uuid').put(ExamplesController.update);
	app.route(baseUrl + ':uuid').delete(ExamplesController.delete);
};
