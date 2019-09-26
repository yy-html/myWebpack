function getStyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}	//获取元素-即时-非行内样式；

function motion(obj,json,fn){
    clearInterval(obj.timer);	//清除上一个计时器：解决不变回去或物体加速的问题；在计时器外；
    obj.timer = setInterval(function(){	//设置计时器；
        var stop = true;		//声明停止条件（任意两个值）；在计时器内 每次启动都重新赋值为ture；
        for(var attr in json){	//遍历传进来的json多属性；
            var value = attr === 'opacity' ? parseInt(getStyle(obj,attr)*100) :parseInt(getStyle(obj,attr));	//获取元素-即时-非行内样值；
            //设置物体运动速度（缓冲）；即时属性距离传来的目标属性越近 速度越慢；基数越大，物体速度越慢，运动越慢；
            var speed = (json[attr] - value) / 40;
            speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);		//当缓冲速度最后小于1的时候 取整以达到目标值；
            if(attr === 'opacity'){		//属性分两类：1.不带px的透明值；2.带px的；判断遍历的此属性是哪类属性；
                obj.style.opacity = (value + speed) / 100;
                obj.style.filter = 'alpha(opacity=' + (value + speed) + ')';
            }else{
                obj.style[attr] = value + speed +'px';
            }
            if(value != json[attr]){	//当物体当前属性没到达目标值时，拦截改变停止条件；当所有的属性都到达目标值才越过拦截条件；优先到达目标值的属性会原地踏步走speed=0；
                stop = false;
            }
        }
        console.log(attr,speed,value,json[attr]);	//循环外 计时器内；当所有的属性都到达目标值时停止计时器；
        if(stop){
            clearInterval(obj.timer);
            fn();		//多属性依次运动 第三个值为函数，函数内是第二步要执行的运动，当第一个运动执行完，停止计时器并回调第二个要执行的运动；
        }
    },15)
}

export default motion
