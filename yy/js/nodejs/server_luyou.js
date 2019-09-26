var http = require('http');
var url = require('url');

var server = http.createServer( serverFn ).listen(3000);
function serverFn(request,response){
	console.log(request.url);
	if(request.url !== '/favicon.ico'){
		console.log(request.url);
		console.log(url.parse(request.url,true).query.a);
		response.writeHead(200,{
			'Content-Type' : 'text/html;charset=utf-8'
		})
		response.write('yy');
		response.end();
	}
}