var express = require('express');
var router = express.Router();
var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({
  username: process.env.WATSON_USERNAME,
  password: process.env.WATSON_PASSWORD,
  version: 'v3',
  version_date: '2016-05-19'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/watson/english', function(req, res, next) {
  console.log('BOOOOMOOOMOMOMOMEEEEEEEEEERRRRRR');

  tone_analyzer.tone({ text: 'A word is dead when it is said, some say. Emily Dickinson' },
    function(err, tone) {
      if (err)
        console.log(err);
      else
        console.log(JSON.stringify(tone, null, 2));
    });
})


module.exports = router;
