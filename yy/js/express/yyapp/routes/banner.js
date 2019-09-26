var check = require('./check.js');
var fs = require('fs');
var async = require('async');
var {MongoClient} = require('mongodb');
var mongoUrl = 'mongodb://localhost:27017/project';

module.exports = {
	defaultRoute : function(req,res,next){
		check.login(req,res,next);
		async.waterfall([
			function(cb){
				MongoClient.connect(mongoUrl,function(err,db){
					if(err) throw err;
					cb(null,db)
				})
			},
			function(db,cb){
				db.collection('banner').find().toArray(function(err,data){
					if(err) throw err;
					cb(null,data);
				})
			}
		],function(err,result){
			if(err) throw err;
			console.log(result)
			res.render('banner',{
				result
			})
		})
	},
	bannerAdd : function(req,res,next){
		check.login(req,res,next);
		res.render('bannerAdd');
	},
	bannerAddAction : function(req,res,next){
//		console.log(req.body,req.file);
		check.login(req,res,next);
		var oldNamePath = './uploads/' + req.file.filename;
		var newNamePath = oldNamePath + '.' + req.file.originalname.split('.')[1];
		
		var name = req.file.filename + '.' + req.file.originalname.split('.')[1];
		var {id,linkUrl} = req.body;
		
		async.waterfall([
			function(cb){
				fs.rename(oldNamePath,newNamePath,function(err,data){
					if(err) throw err;
				})
				cb(null);
			},
			function(cb){
				MongoClient.connect(mongoUrl,function(err,db){
					if(err) throw err;
					cb(null,db);
				})
			},
			function(db,cb){
				db.collection('banner').insert({id,linkUrl,name},function(err,req){
					if(err) throw err;
					cb(null,'ok');
				})
			}
		],function(err,result){
			if(err) throw err;
			if(result == 'ok'){
				res.redirect('/banner');
			}
		})
	}
}