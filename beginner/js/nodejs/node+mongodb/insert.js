const async = require('async');
const {MongoClient} = require('mongodb');
const mongoUrl = 'mongodb://localhost:27017/project';
var insertObj = [{name:'y1',pwd:'123'},{name:'y2',pwd:'456'},{name:'y3',pwd:'789'}];

async.waterfall([
	function(cb){
		MongoClient.connect(mongoUrl,function(err,db){
			if(err) throw err;
			cb(null,db);
		})
	},
	function(db,cb){
		db.collection('list').insert(insertObj,function(err,data){
			if(err) throw err;
			cb(null,'ok');
			db.colse();
		});
	}
],function(err,result){//遵循错误优先回调
	if(err) throw err;
	if(result == 'ok'){
		console.log('insert success!');
	}
})