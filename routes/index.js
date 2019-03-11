var express = require('express');
var textData = require('../assets/states').textData;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', textData);
});

router.get('/modify/:keyword', function(req,res,next){
  res.render('passform', {kw:req.params.keyword});
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


router.post('/login/:keyword',function(req,res,next){
  if(req.body.pass !== 'hahahahah'
    || req.body.crosssite !== 'qw143DFCW0977wepnhep'){
      res.redirect('/');
  }
  if(req.body.hash === "5d3d1543ed477cbeb4b4410836bff1101ace7a2ed7c389e7c5a23c5842f84f87ac0a6a8696a7b5f88b47cfa96fff55fda21b7f81e57a02612672de1c8dfc4614"){
    fixIt(req,res,next);
  }
  res.redirect('/');
})

fixIt = function(req,res,next){
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
};
module.exports = router;
