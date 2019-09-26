var async = require('async');
var {MongoClient} = require('mongodb');
var mongoUrl = 'mongodb://localhost:27017/project';
var url = require('url');

module.exports = {
	defaultRoute : function(req,res,next){
		if(req.cookies.loginState != 1){
			res.render('login');
			return;
		}
		async.waterfall([
			function(cb){
				MongoClient.connect(mongoUrl,function(err,db){
					if(err) throw err;
					cb(null,db);
				})
			},
			function(db,cb){
				db.collection('cast').find({},{_id:0}).toArray(function(err,data){
					if(err) throw err;
					cb(null,data);
					db.close();
				})
			}
		],function(err,result){
			if(err) throw err;
			res.render('cast',{
				result,
			});
		})
	},
	castpage : function(req,res,next){
		if(req.cookies.loginState != 1){
			res.render('login');
			return;
		}
		var {limitNum,pageNum} = url.parse(req.url,true).query;
		limitNum = limitNum ? limitNum * 1 : 5;
		pageNum = pageNum ? pageNum * 1 : 0;
		async.waterfall([
			function(cb){
				MongoClient.connect(mongoUrl,function(err,db){
					if(err) throw err;
					cb(null,db);
				})
			},
			function(db,cb){
//				db.collection('cast').find({},{_id:0}).limit(limitNum).skip(limitNum * pageNum).toArray(function(err,data){
//					if(err) throw err;
//					cb(null,data);
//					db.close();
//				});
				db.collection('cast').find({},{_id:0}).toArray(function(err,data){
					if(err) throw err;
					var totalNum = Math.ceil(data.length / limitNum);
					var pagingData = data.splice(limitNum * pageNum,limitNum);
					cb(null,{pagingData,totalNum});
					db.close();
				})
			}
		],function(err,result){
			if(err) throw err;
			var {pagingData,totalNum} = result;
			
			if(pagingData.length == 0 && pageNum != 0){
				res.redirect('/castpage?limitNum=' + limitNum + '&pageNum=' + (pageNum - 1))
			}
			
			res.render('cast',{
				result : pagingData,
				limitNum,
				pageNum,
				totalNum
			})
		})
	},
	cast_delete : function(req,res,next){
		if(req.cookies.loginState != 1){
			res.render('login');
			return;
		}
		var {castid,limitNum,pageNum} = url.parse(req.url,true).query;
		async.waterfall([
			function(cb){
				MongoClient.connect(mongoUrl,function(err,db){
					if(err) throw err;
					cb(null,db);
				})
			},
			function(db,cb){
				db.collection('cast').deleteOne({id:castid},function(err,res){
					if(err) throw err;
					cb(null,'ok');
					db.close();
				})
			}
		],function(err,result){
			if(err) throw err;
			if(result == 'ok'){
				res.redirect('/castpage?limitNum=' + limitNum + '&pageNum=' + pageNum);
			}
		})
	},
	cast_add : function(req,res,next){
		if(req.cookies.loginState != 1){
			res.render('login');
			return;
		}
		res.render('cast_add');
	},
	cast_add_action : function(req,res,next){
		if(req.cookies.loginState != 1){
			res.render('login');
			return;
		}
		var {id,name,alt,img} = req.body;
		var obj = {
			id,
			name,
			alt,
			avatars : {
				samll : img,
				medium : img,
				large : img
			}
		}
		console.log(obj);
		async.waterfall([
			function(cb){
				MongoClient.connect(mongoUrl,function(err,db){
					if(err) throw err;
					cb(null,db);
				})
			},
			function(db,cb){
				db.collection('cast').insert(obj,function(err,res){
					if(err) throw err;
					cb(null,'ok');
				})
			}
		],function(err,result){
			if(err) throw err;
			if(result == 'ok'){
				res.redirect('/castpage');
			}
		})
	},
	cast_update : function(req,res,next){
		if(req.cookies.loginState != 1){
			res.render('login');
			return;
		}
		var {castid,limitNum,pageNum} = url.parse(req.url,true).query;
		async.waterfall([
			function(cb){
				MongoClient.connect(mongoUrl,function(err,db){
					if(err) throw err;
					cb(null,db);
				})
			},
			function(db,cb){
				db.collection('cast').find({id:castid},{_id:0}).toArray(function(err,data){
					if(err) throw err;
					cb(null,data);
					db.close();
				})
			}
		],function(err,result){
			if(err) throw err;
			res.render('cast_update',{
				result,
				limitNum,
				pageNum
			});
		})
	},
	cast_update_action : function(req,res,next){
		if(req.cookies.loginState != 1){
			res.render('login');
			return;
		}
		var {limitNum,pageNum,id,name,alt,img} = req.body;
		var obj = {
			$set: {
				name,
				alt,
				avatars : {
					large: img,
					medium : img,
					small : img
				}
			}
		}
		console.log(limitNum,pageNum);
		async.waterfall([
			function(cb){
				MongoClient.connect(mongoUrl,function(err,db){
					if(err) throw err;
					cb(null,db);
				})
			},
			function(db,cb){
				db.collection('cast').updateOne({id:id},obj,function(err,res){
					if(err) throw err;
					cb(null,'ok');
					db.close();
				})
			}
		],function(err,result){
			if(err) throw err;
			if(result =='ok'){
				res.redirect('/castpage?limitNum=' + limitNum + '&pageNum=' + pageNum);
			}
		})
	}
}
























