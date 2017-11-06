var express = require('express');
var router = express.Router();


router.get('/destination', function(req, res, next) {
  res.render('dest', { title: 'Express' });
});

router.post('/destination', function(req, res, next) {
  res.render('dest', { title: 'Express' });
});

module.exports = router;
