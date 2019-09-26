function ajax(json){		//{type : GET,url : url,async : true,data : {key : value,key : value},succes : function(){},}
	if(!json){
		return ;
	}
	//初始化参数
	json.type = json.type || 'GET';
	json.url = json.url || '';
	json.async = json.async || true;
	json.data = json.data || {};
	json.succes = json.succes || function(){};
	//设置data
	var arr = [];
	for(var key in json.data){
		arr.push(key + '=' + json.data[key]);	//[key=value,key=value]
	}
	var str = arr.join('&');		//'key=value&key=value'
	//创建Ajax对象
	var ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('MIcrosoft.XMLHTTP');
	if(json.type.toUpperCase() == 'GET'){
		ajax.open(json.type,json.url + '?' + str,json.async);
		ajax.send();
	}else{
		if(json.type.toUpperCase == 'POST'){
			ajax.open(json.type,json.url,json.async);
			ajax.setRequestHeader('content-type','application/x-www-form-urlencoded;charset=utf-8');
			ajax.send(str);
		}
	}
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			json.succes(ajax.responseText);
		}
	}
}	
	
//$.ajax({
//	type : 'GET',
//	url : 'json/yy.json',
//	data : {
//		l : 1,
//		y : 2
//	},
//	succes : function(ajax){
//		alert(ajax);
//});

var $ = {};
$.ajax = function(json){
	if(!json){
		return ;
	}
	json.type = json.type || 'GET';
	json.url = json.url || '';
	json.async = json.async || true;
	json.data = json.data || {};
	json.succes = json.succes || function(){};
	var arr = [];
	for(var key in json.data){
		arr.push(key + '=' + json.data[key]);
	}
	var str = arr.join('&');
	var ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('MIcrosoft.XMLHTTP');
	if(json.type.toUpperCase() == 'GET'){
		ajax.open(json.type,json.url + '?' + str,json.async);
		ajax.send();
	}else{
		if(json.type.toUpperCase == 'POST'){
			ajax.open(json.type,json.url,json.async);
			ajax.setRequestHeader('content-type','application/x-www-form-urlencoded;charset=utf-8');
			ajax.send(str);
		}
	}
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			json.succes(ajax.responseText);
		}
	}
}