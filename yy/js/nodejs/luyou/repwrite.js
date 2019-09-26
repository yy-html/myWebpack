var readFile = require('./readFile.js');
var url = require('url');
var querystring = require('querystring');
module.exports = {
	home : function(request,response){
//		response.write('首页');
//		response.end();
		readFile({
			url : './home.html',
			type : 'utf-8',
			success :function(data){
//				console.log(data);
				response.write(data);
				response.end();
			}
		})
	},
	cart : function(request,response){
		readFile({
			url : './cart.html',
			type : 'utf-8',
			success :function(data){
				response.write(data);
				response.end();
			}
		})
	},
	login : function(request,response){
		readFile({
			url : './login.html',
			type : 'utf-8',
			success :function(data){
				response.write(data);
				response.end();
			}
		})
	},
	loginAction : function(request,response){
		var {name,pwd} = url.parse(request.url,true).query;
//	or	var obj = url.parse(request.url,true).query.name;
//		obj.name; obj.pwd;
		response.write('用户名：' + name);
		response.write('密码：' + pwd);
		response.end();
	},
	register : function(request,response){
		readFile({
			url : './register.html',
			type : 'utf-8',
			success :function(data){
				response.write(data);
				response.end();
			}
		})
	},
	registerAction : function(request,response){
		var htmlStr = '';
		request.on('data',function(data){
			htmlStr += data;
		})
		request.on('end',function(){
			var obj = querystring.parse(htmlStr);
//		or	var {name,pwd} = obj;
			response.write('用户名：' + obj.name);
			response.write('密码：' + obj.pwd);
			response.end();
		})
		request.on('err',function(err){
			consol.log(err);
		})
	},
	page404 : function(request,response){
		response.write('404 not found');
		response.end();
	}
}


//	var sousuoStr = oText.innerText();
//	var sousuoArr = sousuoStr.split('');
//	
//	for(var i = 0;i < oLis.length;i ++){
//		var str = '';
//		var arr = oLis[i].innerText().split('');
//		for(var i = 0;i < sousuoArr.length;i ++){
//			str += arr[i];
//		}
//		if(sousuoStr == str && arr.length>sousuoArr.length){
//			oLis[i].style.display = 'block';
//		}
//	}
		



