'use strict';

require('rootpath')();
var ExampleModel = require('app/models/example');

exports.read = function (req, res, next) {
	ExampleModel.find({})
		.exec(function(err, items) {
			if(!err && items) {
				res.status(200).json(items);
			} else {
				res.status(400).json({err: err});
			}
		});
};

exports.readOne = function (req, res, next) {
	ExampleModel.findOne({uuid: req.params.uuid})
		.exec(function(err, item) {
			if(!err && item) {
				res.status(200).json(item);
			} else {
				res.status(404).json({err: err});
			}
		});
};

exports.create = function (req, res, next) {
	ExampleModel.create(req.body, function(err, item) {
		if(!err && item) {
			res.status(201).json(item);
		} else {
			res.status(400).json({err: err});
		}
	});
};

exports.update = function (req, res, next) {
	ExampleModel.update({uuid: req.params.uuid}, req.body)
		.exec(function(err, update) {
			if(!err && update) {
				ExampleModel.findOne({uuid: req.params.uuid})
					.exec(function(err, item) {
						if(!err && item) {
							res.status(200).json(item);
						} else {
							res.status(400).json({err: err});
						}
					});
			} else {
				res.status(400).json({err: err});
			}
		});
};

exports.delete = function (req, res, next) {
	ExampleModel.remove({uuid: req.params.uuid})
		.exec(function(err, item) {
			if(item) {
				res.status(204).json({});
			} else {
				res.status(400).json({err: err});
			}
		});
};
