var async = require('async');
var url = require('url');
var {MongoClient} = require('mongodb');
var mongoUrl = 'mongodb://localhost:27017/project';
var md5 = require('md5');

module.exports = {
	defaultRoute : function(req,res,next){
		res.render('login');
	},
	loginAction : function(req,res,next){
		var {name,pwd} = req.body;
//		pwd = md5(pwd);
		async.waterfall([
			function(cb){
				MongoClient.connect(mongoUrl,function(err,db){
					if(err) throw err;
					cb(null,db);
				})
			},
			function(db,cb){
				db.collection('admin').find({name,pwd},{}).toArray(function(err,data){
					if(err) throw err;
					cb(null,data);
					db.close();
				})
			}
		],function(err,result){
			if(err) throw err;
			
			if(result.length > 0){
				res.cookie('loginState',1)
			}
			res.redirect('/');
			
		})
	}
}