var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Mark: about page 
router.get('/about',function(req, res, next){
  res.render('about',{
    title: 'About'
  });
});

// Mark: Contact
router.get('/contact', function(req, res, next){
  res.render('contact', {title: 'Contact'});
});

module.exports = router;
