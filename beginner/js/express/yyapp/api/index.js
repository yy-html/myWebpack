var express = require('express');
var router = express.Router();

var cast = require('./cast.js');
var director = require('./director.js');
var movie = require('./movie.js');
var banner = require('./banner.js');
var users = require('./users.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cast',cast.defaultRoute);
router.get('/castpage',cast.castpage);
router.get('/castDetail',cast.castDetail);
router.get('/cast_delete',cast.cast_delete);
router.get('/cast_add',cast.cast_add);
router.post('/cast_add_action',cast.cast_add_action);
router.get('/cast_update',cast.cast_update);
router.post('/cast_update_action',cast.cast_update_action);

router.get('/director',director.defaultRoute);

router.get('/movie',movie.defaultRoute);
router.get('/movieSort',movie.movieSort);
router.get('/movieSection',movie.movieSection);
router.get('/movieSearch',movie.movieSearch);
router.get('/movieDistinct',movie.movieDistinct);


router.get('/banner',banner.defaultRoute);

router.get('/users',users.defaultRoute);

module.exports = router;
