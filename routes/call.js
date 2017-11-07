var express = require('express');
var router = express.Router();

// var data = require('../data');

router.get('/', function(req, res, next) {
  res.render('call', { id: req.body.id_student  });
});

router.post('/', function(req, res, next) {
  res.render('call', { id: req.body.id_student });
});


module.exports = router;
