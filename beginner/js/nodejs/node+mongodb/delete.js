const async = require('async');
const {MongoClient} = require('mongodb');
const mongoUrl = 'mongodb://localhost:27017/project';

async.waterfall([
	function(cb){
		MongoClient.connect(mongoUrl,function(err,db){
			if(err) throw err;
			cb(null,db);
		})
	},
	function(db,cb){
		db.collection('list').deleteMany({name:'yy'},function(err,data){
			if(err) throw err;
			cb(null,'ok');
			db.close();
		})
	}
],function(err,result){
	if(err) throw err;
	if(result == 'ok'){
		console.log('delete success!');
	}
})