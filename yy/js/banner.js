define(['jquery'],function($){
	//banner小图
	$('.shuangtu a').each(function(){
		$(this).hover(function(){
			$('img',this).animate({
				opacity : 1,
			},200,"swing")
			$(this).animate({
				left : -3,
			},200,"swing")
		},function(){
			$('img',this).animate({
				opacity : 0.8,
			},200,"swing")
			$(this).animate({
				left : 3,
			},200,"swing")
		})
	})
	//banner轮播图
	var index = 0;
	slider();
	$('.mybanner ul li').each(function(){
		$(this).mouseover(function(){
			index = $(this).index();
			slider();
		})
	})
	var timer;
	interval()
	function interval(){
		clearInterval(timer);
		timer = setInterval(function(){
			index += 1;
			if(index > 7){
				index = 0;
			}
			slider();
		},2500)
	}
	function slider(){
		$('.mybanner ul li span').removeClass('spanhover');
		$('.mybanner ul li span').eq(index).addClass('spanhover');
		$('.mybanner > img').removeClass('imgactive');
		$('.mybanner > img').eq(index).addClass('imgactive');
	}
	$('.mybanner').hover(function(){
		clearInterval(timer);
	},function(){
		interval();
	})
})