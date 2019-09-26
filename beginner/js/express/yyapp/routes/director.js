var check = require('./check.js');
module.exports = {
	defaultRoute : function(req,res,next){
		check.login(req,res,next);
		res.render('director');
	}
}