var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', {name: "Home"});
});

router.get('/gallery', function(req, res) {
  res.render('gallery', {name: "Gallery"});
});

router.get('/about', function(req, res) {
  res.render('about', {name: "About"});
});

router.get('/contact', function(req, res) {
  res.render('contact', {name: "Contact"});
});

module.exports = router;
