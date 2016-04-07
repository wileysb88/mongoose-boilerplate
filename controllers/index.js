var express = require('express');
var controller = express.Router();

// grab my model
// Taco is our model
var Taco = require('../models/Taco');

/* GET home page. */
controller.get('/', function(req, res, next) {
  // can call Tacos anything
  Taco.find(function(err, Tacos){
    if (err) return next(err);
    res.json(Tacos);
  });
});

controller.post('/', function(req, res, next){
  // req.body is our data, the first arguement is the data
  Taco.create(req.body, function(err, Taco){
    if (err) return next(err);
    res.json(Taco);
  });
});


controller.get('/:id', function(req, res, next){
  Taco.findById(req.params.id, function(err, Taco){
    if (err) return next(err);
    res.json(Taco);
  });
});

// modern browsers accept patch the future
// this is to update
controller.patch('/:id', function(req, res, next){
  Taco.findByIdAndUpdate(req.params.id, req.body, function(err, Taco){
    if (err) return next(err);
    res.json(Taco);
  });
});

// this is the same thing as patch
controller.put('/:id', function(req, res, next){
  Taco.findByIdAndUpdate(req.params.id, req.body, function(err, Taco){
    if (err) return next(err);
    res.json(Taco);
  });
});


controller.delete('/:id', function(req, res, next){
  Taco.findByIdAndRemove(req.params.id, function(err, Taco){
    if (err) return next(err);
    res.json(Taco);
  });
});











// .get('/api', function(req, res, next) {
//   // get ALL of the types from my TYPES collection
//   // .find has an error and maybe types that we want.
//   Model.find(function(err, types) {
//     if (err) console.log(err);
//     res.json(types);
//   });
// });

module.exports = controller;
