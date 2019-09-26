function getStyle(obj,attr){
				return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
			}
			
function start(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var stop = true;
		for(var attr in json){
			var value = attr === 'opacity' ? parseInt(getStyle(obj,attr)*100) :parseInt(getStyle(obj,attr));
			var speed = (json[attr] - value) / 8;
			speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);	
			if(attr === 'opacity'){
				obj.style.opacity = (value + speed) / 100;
				obj.style.filter = 'alpha(opacity=' + (value + speed) + ')';
			}else{
				obj.style[attr] = value + speed +'px';
			}
			if(value != json[attr]){
				stop = false;
			}
		}
		if(stop){
			clearInterval(obj.timer);
			fn();
		}
	},30)
}