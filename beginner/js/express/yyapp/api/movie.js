var async = require('async');
var url = require('url');
var {MongoClient} = require('mongodb');
var mongoUrl = 'mongodb://localhost:27017/project';

moduleObj = {
	defaultRoute : function(req,res,next){
		async.waterfall([
			function(cb){
				MongoClient.connect(mongoUrl,function(err,db){
					if(err) throw err;
					cb(null,db);
				})
			},
			function(db,cb){
				db.collection('movie').distinct('year',function(err,yearArr){
					if(err) throw err;
					yearArr.sort(function(a,b){return a - b});
					cb(null,yearArr,db);
				})
			},
			function(yearArr,db,cb){
				db.collection('movie').find({},{_id:0}).toArray(function(err,data){
					if(err) throw err;
					cb(null,{yearArr,data});
					db.close();
				})
			}
		],function(err,result){
			if(err) throw err;
//			res.render('movie',{
//				result : result.data,
//				yearArr : result.yearArr
//			});
			res.send({
				result : result.data,
				yearArr : result.yearArr
			})
		})
	},
	movieSort : function(req,res,next){
		var {type,sortNum} = url.parse(req.url,true).query;
		var obj = {};
		sortNum *= 1;
		try{
			obj[type] = sortNum;
		}catch(e){
			
		}
		async.waterfall([
			function(cb){
				MongoClient.connect(mongoUrl,function(err,db){
					if(err) throw err;
					cb(null,db);
				})
			},
			function(db,cb){
				db.collection('movie').distinct('year',function(err,yearArr){
					if(err) throw err;
					yearArr.sort(function(a,b){return a - b});
					cb(null,yearArr,db);
				})
			},
			function(yearArr,db,cb){
				db.collection('movie').find({},{_id:0}).sort(obj).toArray(function(err,data){
					if(err) throw err;
					cb(null,{data,yearArr});
					db.close();
				});
			}
		],function(err,result){
			if(err) throw err;
//			res.render('movie',{
//				result : result.data,
//				yearArr : result.yearArr
//			})
			res.send(result.data);
		})
	},
	movieSection : function(req,res,next){
		var {gte,lte} = url.parse(req.url,true).query;
		gte = parseFloat(gte);
		lte = parseFloat(lte);
//		obj = {
//			average : {
//				$gte : gte,
//				$lte : lte
//			}
//		}
//		console.log(obj);
		async.waterfall([
			function(cb){
				MongoClient.connect(mongoUrl,function(err,db){
					if(err) throw err;
					cb(null,db);
				})
			},
			function(db,cb){
				db.collection('movie').distinct('year',function(err,yearArr){
					if(err) throw err;
					yearArr.sort(function(a,b){return a - b});
					cb(null,yearArr,db);
				})
			},
			function(yearArr,db,cb){
				db.collection('movie').find({average:{$gte : gte,$lte : lte}},{_id:0}).toArray(function(err,data){
					if(err) throw err;
					cb(null,{data,yearArr});
					db.close();
				})
			}
		],function(err,result){
			if(err) throw err;
			res.render('movie',{
				result : result.data,
				yearArr : result.yearArr
			})
		})
	},
	movieSearch : function(req,res,next){
		var {type,str} = url.parse(req.url,true).query;
		var obj = {};
		try{	
			obj[type] = eval('/' + str + '/');
		}catch(e){
			
		}
		console.log(obj)
		async.waterfall([
			function(cb){
				MongoClient.connect(mongoUrl,function(err,db){
					if(err) throw err;
					cb(null,db);
				})
			},
			function(db,cb){
				db.collection('movie').distinct('year',function(err,yearArr){
					if(err) throw err;
					yearArr.sort(function(a,b){return a - b});
					cb(null,yearArr,db);
				})
			},
			function(yearArr,db,cb){
				db.collection('movie').find(obj,{_id:0}).toArray(function(err,data){
					if(err) throw err;
					cb(null,{data,yearArr});
					db.close();
				})
			}
		],function(err,result){
			if(err) throw err;
			res.render('movie',{
				result :result.data,
				yearArr : result.yearArr
			})
		})
	},
	movieDistinct : function(req,res,next){
		var {year} = url.parse(req.url,true).query;
		year *= 1;
		async.waterfall([
			function(cb){
				MongoClient.connect(mongoUrl,function(err,db){
					if(err) throw err;
					cb(null,db);
				})
			},
			function(db,cb){
				db.collection('movie').distinct('year',function(err,yearArr){
					if(err) throw err;
					yearArr.sort(function(a,b){return a - b});
					cb(null,yearArr,db);
				})
			},
			function(yearArr,db,cb){
				db.collection('movie').find({year},{_id:0}).toArray(function(err,data){
					if(err) throw err;
					cb(null,{yearArr,data});
					db.close();
				})
			}
		],function(err,result){
			if(err) throw err;
			res.render('movie',{
				result : result.data,
				yearArr : result.yearArr
			});
		})
	}
}
module.exports = moduleObj;






















