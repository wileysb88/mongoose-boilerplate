var express = require('express');
var controller = express.Router();

// grab my model
//var Model = require('../models/MyModel');

/* GET home page. */
controller.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})
// .get('/api', function(req, res, next) {
//   // get ALL of the types from my TYPES collection
//   // .find has an error and maybe types that we want.
//   Model.find(function(err, types) {
//     if (err) console.log(err);
//     res.json(types);
//   });
// });

module.exports = controller;
