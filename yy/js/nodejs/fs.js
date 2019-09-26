var fs = require('fs');

//得到文件与目录信息
//fs.stat('./Ajax.js',function(err,data){
//	if(err) throw err;
//	console.log(data.isFile());
//	console.log(data.isDirectory());
//})
//创建文件夹，如果是同步创建目录 mkdirSync
//fs.mkdir('new',function(err,data){
//	if(err) throw err;
//	console.log('mkdir yes!');
//})
////创建并写入内容
//fs.writeFile('test.txt','111111',function(err,data){//创建 替换
//	if(err) throw err;
//	console.log('writeFile yes!');
//})
//fs.appendFile('test.txt','222222',function(err,data){//创建 追加
//	if(err) throw err;
//	console.log('appendFlie yes!');
//})
//
//读取文件的内容,如果是同步 readFileSync
//fs.readFile('test.txt',function(err,data){
//	if(err) throw err;
//	console.log(data.toString());//<Buffer 31 31 31 31 31 31 32 32 32 32 32 32> 为Buffer类型 需转换为字符串
//})
//fs.readFile('test.txt','utf-8',function(err,data){
//	if(err) throw err;
//	console.log(data);
//})
//列出目录的东西
//fs.readdir('../js',function(err,data){
//	if(err) throw err;
//	console.log(data);
//})
//重命名目录或文件，如果是同步 renameSync
//fs.rename('test.txt','test2.txt',function(err,data){
//	if(err) throw err;
//	console.log('rename yes!');
//})
//删除目录与文件rmdir，unlink
//stream流模块
var readStream = fs.createReadStream('test2.txt');
var writeStream = fs.createWriteStream('test3.txt');
readStream.pipe(writeStream);


















