var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', {name: "Index"});
});

router.get('/contact', function(req, res) {
  res.render('contact', {name: "Contact"});
})

router.get('/about', function(req, res) {
  res.render('about', {name: "About"});
})

module.exports = router;
