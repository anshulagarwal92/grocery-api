var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send({
        name: 'anshul agarwal'
    });
    return;
  // res.render('index', { title: 'Express' });
});

module.exports = router;
