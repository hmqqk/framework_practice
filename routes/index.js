var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/bootstrap_practice', function(req, res, next) {
  res.render('bootstrap_practice');
});
router.get('/bootstrap_practice2', function(req, res, next) {
  res.render('bootstrap_practice2');
});
router.get('/html', function(req, res, next) {
  res.render('html5_new_functions');
});

router.get('/css', function(req, res, next) {
  res.render('css_practice');
});

module.exports = router;
