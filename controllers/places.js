var express = require('express');
var controller = express.Router();

// challenge: create a new model + schema in /models/Place.js
// This model we're creating is the 'Place' model
// You will be importing new data to the same database
// but a new collection called 'places'
// you will then use controller.get('/') to .find all
// entries in this collection
// browse to localhost:3000/places/ to see the api
// data will be sourced...

/* GET users listing. */
controller.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = controller;
