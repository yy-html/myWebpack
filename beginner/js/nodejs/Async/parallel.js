//并行无关联
//对象写法
var async = require('async');
async.parallel({
	a : function(cb){
		var aa = 1;
		setTimeout(function(){
			cb(null,aa);
		},1000)
	},
	b : function(cb){
		var bb = 2;
		setTimeout(function(){
			cb(null,bb);
		},2000)
	}
},function(err,result){
	if(err) throw err;
	console.log(result);// 2s later(最大时长)
	//{a:1,b:2}
})
//数组写法
async.parallel([
	function(cb){
		var aa = 1;
		setTimeout(function(){
			cb(null,aa);
		},1000)
	},
	function(cb){
		var bb = 2;
		setTimeout(function(){
			cb(null,bb);
		},2000)
	}
],function(err,result){
	if(err) throw err;
	console.log(result);// 2s later(最大时长)
	//{a:1,b:2}
})
