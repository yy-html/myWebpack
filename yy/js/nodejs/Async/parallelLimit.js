//并行无关联限制线路个数（只有数组写法，相当于串行无关联-减少服务器压力-提交并发量）
var async = require('async');
async.parallelLimit([
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
],1,function(err,result){
	if(err) throw err;
	console.log(result);// 3s later(总时长)
	//[1,2]
})