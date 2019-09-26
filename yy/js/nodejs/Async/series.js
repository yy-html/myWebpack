//node.js 异步编程之 串行无关联
var async = require('async');

//对象写法
async.series({
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
	console.log(result);// 3s later(总时长)
	//{a:1,b:2}
})
//数组写法
async.series([
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
	console.log(result);// 3s after
	//[1,2]
})














