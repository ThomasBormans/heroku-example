'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uuid = require('node-uuid');

var ExampleSchema = new Schema({
	uuid: {
		type: String,
		default: uuid,
		required: true,
		index: true
	},
	name: {
		type: String,
		required: true
	},
	deleted: {
		type: Boolean,
		required: true,
		default: false
	}
});

ExampleSchema.set('toJSON');
ExampleSchema.set('toObject');

// Set the name of the collection
ExampleSchema.set('collection', 'examples');

module.exports = mongoose.model('Example', ExampleSchema);
