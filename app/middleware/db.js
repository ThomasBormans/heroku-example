'use strict';

require('rootpath')();
var mongoose = require('mongoose');

// Connect to db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/heroku-example');
