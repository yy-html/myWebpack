define(['jquery'],function($){
	//左侧边栏
	//鼠标移上
	$('.leftside ul li').not(':last').each(function(){
		$(this).mouseover(function(){
			var index = $(this).index();
//				$(this).css('background','#d24844');
//				$('a',this).css('width',30);
//				$('span',this).hide();
//				$('b',this).show();
			leftsideover(index);
		})
		$(this).mouseout(function(){
			var index = $(this).index();
//				$(this).css('background','');
//				$('a',this).css('width',18);
//				$('span',this).show();
//				$('b',this).hide();
			if($(this).data('num') != 1){
				leftsideout(index);
			}
			
		})
	})
	//
	function leftsideover(index){
		var $this = $('.leftside ul li').eq(index);
		$this.css('background','#d24844');
		$('a',$this).css('width',30);
		$('span',$this).hide();
		$('b',$this).show();
	}
	function leftsideout(index){
		var $this = $('.leftside ul li').eq(index);
		$this.css('background','');
		$('a',$this).css('width',18);
		$('span',$this).show();
		$('b',$this).hide();
	}
	//鼠标点击
//		var mark = 1;
	$('.leftside li a').each(function(){
		$(this).click(function(){
//				mark = 2;
			if($(this).parent().is('.last-leftside')){
				$('body,html').animate({
					scrollTop : 0,
				},600/*,function(){
					mark = 1;
				}*/)
			}else{
				var $top = $('.main2,.main3').eq($(this).parent().index()).offset().top;
				$('body,html').animate({
					scrollTop : $top,
				},400/*,function(){
					mark = 1;
				}*/)
			}
		})
	})
	//滚轮事件
	$(window).scroll(function(){
//		if(mark == 1){
		var $top = $(this).scrollTop();
		if($top > 800 && $top < 4000){
			$('.leftside').fadeIn(700);
		}else{
			$('.leftside').fadeOut(700);
		}
//			console.log($top);
		if($top > 4000){
			$('.leftside').fadeOut(700);
		}
		$('.main2,.main3').each(function(){
			var $index = $(this).index() - 5;
			var $height = $(this).offset().top + $(this).height() / 2;
			if($(window).scrollTop() < $height){
				$('.leftside ul li').not(':last').each(function(){
					var index = $(this).index();
					leftsideout(index);
				})
				leftsideover($index);
				$('.leftside ul li').not(':last').data('num','');
				$('.leftside ul li').eq($index).data('num',1);
				return false;
			}
		})
	})
})