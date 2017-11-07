var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('student_status', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.render('student_status', { title: 'Express' });
});

module.exports = router;
