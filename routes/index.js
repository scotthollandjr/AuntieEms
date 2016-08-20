var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send("<h1>Test Title</h1><h3>Boots and Cats</h3>");
});

module.exports = router;
