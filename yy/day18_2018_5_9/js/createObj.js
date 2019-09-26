class CreateObj{ //创建类
	//构造器方法
	constructor(){
		//属性：
		this.ele = document.createElement('img');
		//初始化对象
		this.init();
	}
	//初始化对象方法
	init(){
		//加到页面中
		document.body.appendChild(this.ele);
		//设置img的属性
		this.ele.src = 'img/1.gif';
		//定位
		this.ele.style.position = 'absolute';
		//设置对象的大小
		this.ele.style.width = '100px';
		this.ele.style.height = '100px';
		//设置速度 
		this.speedX = this.randomInt(3,80);
		this.speedY = this.randomInt(3,80);
		//记录计时器
		this.timer = null;
		this.drag();
		//调用运动方法
		this.sport();
		
	}
	//设置对象的运动 
	sport(){
		clearInterval(this.timer);
		this.timer = setInterval(()=>{
			let left = this.ele.offsetLeft + this.speedX;
			let top = this.ele.offsetTop + this.speedY;
			//设置边界
			if(left <= 0){
				left = 0;
				this.speedX *= -1;
			}else if(left >= document.documentElement.clientWidth - this.ele.offsetWidth){
				left = document.documentElement.clientWidth - this.ele.offsetWidth;
				this.speedX *= -1;
			}
			if(top <= 0){
				top = 0;
				this.speedY *= -1;
			}else if(top >= document.documentElement.clientHeight - this.ele.offsetHeight){
				top = document.documentElement.clientHeight - this.ele.offsetHeight;
				this.speedY *= -1;
			}
			this.ele.style.left = left + 'px';
			this.ele.style.top = top + 'px';
		},30)
	}
	//拖拽
	drag(){
		this.ele.onmousedown = function(evt){
			clearInterval(this.timer);
			let e = evt || window.event;
			this.disX = e.offsetX;
			this.disY = e.offsetY;
			document.onmousemove = function(evt){
				this.fnMove(evt);
			}.bind(this);
			document.onmouseup = function(){
				this.fnUp();
			}.bind(this);
			document.ondragstart = function(){
				return false;
			}
		}.bind(this);
	}
	//鼠标移动时
	fnMove(evt){
		let e = evt || window.event;
		let left = e.pageX - this.disX;
		let top = e.pageY - this.disY;
		//设置边界
		if(left <= 0){
			left = 0;
		}else if(left >= document.documentElement.clientWidth - this.ele.offsetWidth){
			left = document.documentElement.clientWidth - this.ele.offsetWidth;
		}
		if(top <= 0){
			top = 0;
		}else if(top >= document.documentElement.clientHeight - this.ele.offsetHeight){
			top = document.documentElement.clientHeight - this.ele.offsetHeight;
		}
		this.ele.style.left = left + 'px';
		this.ele.style.top = top + 'px';
	}
	//鼠标弹起时
	fnUp(){
//		alert(this);
		document.onmousemove = null; //取消移动事件
		this.sport(); //开启运动
		
	}
	//随机数
	randomInt(min,max){
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}
