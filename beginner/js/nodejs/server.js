//协议：node原生模块http
var http = require('http');
//创建服务器(请求，响应)
var server = http.createServer(function(request,response){
	//返回了状态码，设置了文件格式，设置了字符编码
	response.writeHead(200,{
		'Content-Type' : 'text/plain;charset=utf-8',//plain 将html标签转义 原样输出
	})
	response.write('yy');
	response.write('洋洋');
	response.write('<h1>洋洋</h1>');//html
	response.end('end');
}).listen(3000);
//服务器监听接口：端口号(0-65535)
//server.listen(3000);


var http = require('http');
var serverFn = function(request,response){
	response.writeHead(200,{
		'Content-Type' : 'text/plain;charset=utf-8',//plain 将html标签转义 原样输出
	})
	response.write('yy');
	response.write('洋洋');
	response.write('<h1>洋洋</h1>');//html
	response.end();
}
var server = http.createServer(serverFn).listen(3000);


var http = require('http');
var serverFn = require('./serverFn.js');
var server = http.createServer(serverFn).listen(3000);