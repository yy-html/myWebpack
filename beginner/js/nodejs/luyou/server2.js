var http = require('http');
var url = require('url');
var repwrite = require('./repwrite.js');


var server = http.createServer(serverFn).listen(3000);

function serverFn(request,response){
	console.log(request.url);
	console.log(url.parse(request.url))
	if(request.url !== '/favicon.ico'){
		var pathname = url.parse(request.url,true).pathname.split('/')[1];
		response.writeHead(200,{
			'Content-Type' : 'text/html;charset=utf-8'
		})
		try{
			repwrite[pathname](request,response);
		}catch(e){
			repwrite.page404(request,response);
		}
//		response.end();
	}
}