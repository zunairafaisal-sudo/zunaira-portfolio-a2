//import Express and create the router
var express = require('express');
var router = express.Router();


//displays the home page
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});


//displays the about me page
router.get('/about', function(req, res, next) {
    res.render('index', { title: 'About Me' });
});


//displays the projects page
router.get('/projects', function(req, res, next) {
    res.render('index', { title: 'Projects' });
});


//displays the contact me page
router.get('/contact', function(req, res, next) {
    res.render('index', { title: 'Contact Me' });
});

//exports the router so the application can use it
module.exports = router;
