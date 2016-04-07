var express = require('express');
var controller = express.Router();

// grab my model
var PlanetType = require('../models/PlanetType');

/* GET home page. */
controller.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})
.get('/planetTypes', function(req, res, next) {
  // get ALL of the types from my TYPES collection
  // .find has an error and maybe types that we want.
  PlanetType.find(function(err, types) {
    if (err) console.log(err);
    res.json(types);
  });
});

module.exports = controller;
