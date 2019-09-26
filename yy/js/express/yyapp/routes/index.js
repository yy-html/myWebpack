var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({
	dest : 'uploads/'
})

var cast = require('./cast.js');
var director = require('./director.js');
var movie = require('./movie.js');
var banner = require('./banner.js');
var users = require('./users.js');
var login = require('./login.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	var type = req.cookies.loginState == 1 ? 'index' : 'login';
	res.render(type);
});

router.get('/login',login.defaultRoute);
router.post('/loginAction',login.loginAction);

router.get('/cast',cast.defaultRoute);
router.get('/castpage',cast.castpage);
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
router.get('/bannerAdd',banner.bannerAdd);
router.post('/bannerAddAction',upload.single('file'),banner.bannerAddAction);

router.get('/users',users.defaultRoute);

module.exports = router;
