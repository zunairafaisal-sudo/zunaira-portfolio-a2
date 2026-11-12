
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});


router.get('/about', function(req, res, next) {
    res.render('index', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
    res.render('index', { title: 'Projects' });
});

router.get('/contact', function(req, res, next) {
    res.render('index', { title: 'Contact Me' });
});

module.exports = router;
