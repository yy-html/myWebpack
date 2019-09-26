//拿指定网站源代码
var http = require('http');
var https = require('https');
var cheerio = require('cheerio');

https.get('https://www.lagou.com/',function(request){
	var htmlStr = '';
	request.on('data',function(str){//接受数据事件
		htmlStr += str;
	})
	request.on('end',function(){//接受数据完毕事件
//		console.log(htmlStr);
		getOver(htmlStr);
	})
	request.on('err',function(err){//接受数据出错事件
		console.log(err);
	})
});

var list = [];
function getOver(htmlStr){
	var $ = cheerio.load(htmlStr);
	$('.menu_main').map(function(index,obj){
		var h2 = $(this).find('h2').text().trim();//去除字符串左右的空格
		var a = $(this).find('a');
		var arr = [];
		$(a).each(function(){
			arr.push($(this).text());
		})
		list.push({
			h2,
			a : arr,
		})
	})
	console.log(list);//输出在命令行
	getOver2(JSON.stringify(list));//输出在服务器
}

function getOver2(htmlStr){//同源策略保护不能直接访问；服务器与服务器之间不存在跨域，创建一个服务器区访问别人的服务器，自己再用ajax去访问自己的服务器
	http.createServer(function(request,response){
		response.setHeader('Access-Control-Allow-Origin','*');//所有人都可以访问我的服务器
		response.writeHead(200,{
			'Content-Type' : 'text/html;charset=utf-8'
		})
		response.write(htmlStr);
		response.end();
	}).listen(3000);
}