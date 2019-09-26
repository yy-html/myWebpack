define(['jquery'],function($){
	//右侧边栏
	$('.rightside ul li').not('.line').each(function(){
		$(this).hover(function(){
			$(this).css('background','#c3514a');
			$('div',this).eq(0).show().animate({
				left : -90,
				opacity : 1,
			},300);
		},function(){
			$(this).css('background','#2a2a2e');
			$('div',this).eq(0).animate({
				left : -120,
				opacity : 0,
			},300,function(){
				$(this).hide();
			});
		})
	})
})

