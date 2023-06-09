var express = require('express');
var router = express.Router();
var multer = require("multer")
var userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/menu', function(req, res, next) {
  res.render('menu');
});

router.get('/price/1', function(req, res, next) {
  var id = req.params.id
  res.render('price', {id});
});

router.get('/price/2', function(req, res, next) {
  var id = req.params.id
  res.render('price2', {id});
});

router.get('/price/3', function(req, res, next) {
  var id = req.params.id
  res.render('price3', {id});
});

router.get('/price/4', function(req, res, next) {
  var id = req.params.id
  res.render('price4', {id});
});

router.get('/price/5', function(req, res, next) {
  var id = req.params.id
  res.render('price5', {id});
});

router.get('/price/6', function(req, res, next) {
  var id = req.params.id
  res.render('price6', {id});
});

router.get('/price/7', function(req, res, next) {
  var id = req.params.id
  res.render('price7', {id});
});

router.get('/price/8', function(req, res, next) {
  var id = req.params.id
  res.render('price8', {id});
});

router.get('/price/9', function(req, res, next) {
  var id = req.params.id
  res.render('price9', {id});
});

router.get('/price/10', function(req, res, next) {
  var id = req.params.id
  res.render('price10', {id});
});

router.get('/price/11', function(req, res, next) {
  var id = req.params.id
  res.render('price11', {id});
});

router.get('/price/12', function(req, res, next) {
  var id = req.params.id
  res.render('price12', {id});
});

router.get('/price/13', function(req, res, next) {
  var id = req.params.id
  res.render('price13', {id});
});

router.get('/price/14', function(req, res, next) {
  var id = req.params.id
  res.render('price14', {id});
});

router.get('/price/15', function(req, res, next) {
  var id = req.params.id
  res.render('price15', {id});
});

router.get('/price/16', function(req, res, next) {
  var id = req.params.id
  res.render('price16', {id});
});

router.get('/price/17', function(req, res, next) {
  var id = req.params.id
  res.render('price17', {id});
});

router.get('/price/18', function(req, res, next) {
  var id = req.params.id
  res.render('price18', {id});
});

router.get('/price/19', function(req, res, next) {
  var id = req.params.id
  res.render('price19', {id});
});

router.get('/price/20', function(req, res, next) {
  var id = req.params.id
  res.render('price20', {id});
});


router.get('/h', function(req, res, next) {
  res.render('3');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});
// this is the login route
router.get('/login', (req, res, next) => {
  res.render('login');
});




router.get('/seller', function(req, res, next) {
  res.render('seller');
});

router.post("/submit", function (req, res) {
  userModel.create({
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      address: req.body.address
    })
    .then(function () {
      res.render('submit');
    });
});

module.exports = router;
