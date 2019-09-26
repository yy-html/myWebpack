var fs = require('fs');

function readFile(config){
	var {url,type,success} = config;
	fs.readFile(url,type,function(err,data){
		if (err) throw err;
		success(data);
	})
}

module.exports = readFile;