var express = require('express');
var textData = require('../assets/states').textData;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', textData);
});

router.get('/:keyword', function(req,res,next){
  var n = {
    title: textData.title,
    status:[],
  }
  for(i of textData.status){
    if(req.params.keyword.search(i["letter"]) !== -1){
      n.status.push({name:i.name, letter:i.letter, state: true});
    } else {
      n.status.push({name:i.name, letter:i.letter, state: false});
    }
  }
  textData = n;
  res.redirect('/');
})

router.get('/reset',function(req,res,next){
  textData = {
    title:"Stet's HALT status",
    status:[
      {name:"hungry", letter:"H", state: false},
      {name:"angry", letter:"A", state: false},
      {name:"lonely", letter:"L", state: false},
      {name:"tired", letter:"T", state: false},
    ],
  }
})
module.exports = router;
