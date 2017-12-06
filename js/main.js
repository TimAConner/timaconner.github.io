"use strict";

// Create menu
require('./menu');

// Populate blog
const blogController = require('./blogController');
blogController.populateBlog();