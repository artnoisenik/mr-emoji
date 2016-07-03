var express = require('express');
var router = express.Router();
var watson = require('watson-developer-cloud');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/watson/english', function(req, res, next) {
  return 
  console.log('Testing');

})


module.exports = router;
