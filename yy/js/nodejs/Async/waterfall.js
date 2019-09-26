//串行有关联 只有数组写法
var async = require('async');
async.waterfall([
	function(cb){
		var aa = 1;
		setTimeout(function(){
			cb(null,aa);
		},1000)
	},
	function(val,cb){
		var bb = 2;
		setTimeout(function(){
			cb(null,val,bb);
		},2000)
	},
	function(val1,val2,cb){
		var str = val1 + val2
		cb(null,str);
	}
],function(err,result){
	if(err) throw err;
	console.log(result);// 3s later(总时长)
	//3
})