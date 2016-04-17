'use strict';

require('rootpath')();
var mongoose = require('mongoose');
var path = require('path');

// Connect to db
mongoose.connect('mongodb://127.0.0.1:27017' + path.sep + 'heroku-example');
