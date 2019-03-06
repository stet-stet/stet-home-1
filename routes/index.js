var express = require('express');
var router = express.Router();
const {textData} = require("../assets/states");

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(textData);
  res.render("index.ejs",textData);
});

module.exports = router;
