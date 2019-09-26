const {MongoClient} = require('mongodb');

const mongoUrl = 'mongodb://localhost:27017/project';

MongoClient.connect(mongoUrl,function(err,db){
	if(err) throw err;
	console.log(db);
})