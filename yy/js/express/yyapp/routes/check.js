
module.exports = {
	login(req,res,next){
		if(req.cookies.loginState != 1){
			res.render('login');
			return;
		}
	}
}