var https = require('https');
var http = require('http');
var options = {
	hostname : "api.douban.com",
	port : 443, //https协议端口都是443，http是80
	path : "/v2/movie/top250",
	method: "Get"
}

//main
var request = https.request(options,function(request){
	var htmlStr = '';
	request.on('data',function(str){
		htmlStr += str;
	})
	request.on('end',function(){
//		console.log(htmlStr);
		getOver(htmlStr);
	})
	request.on('err',function(err){
		console.log(err);
	})
})

request.on('err',function(err){
	console.log(err);
})
request.end();

function getOver(htmlStr){//同源策略保护不能直接访问；服务器与服务器之间不存在跨域，创建一个服务器区访问别人的服务器，自己再用ajax去访问自己的服务器
	http.createServer(function(request,response){
		response.setHeader('Access-Control-Allow-Origin','*');//所有人都可以访问我的服务器
		response.writeHead(200,{
			'Content-Type' : 'text/html;charset=utf-8'
		})
		response.write(htmlStr);
		response.end();
	}).listen(3000);
}
