//定义模块
function serverFn(request,response){
	response.writeHead(200,{
		'Content-Type' : 'text/plain;charset=utf-8',
	})
	response.write('yy');
	response.write('洋洋');
	response.write('<h1>洋洋</h1>');
	response.end();
}
//暴露模块
module.exports = serverFn;
