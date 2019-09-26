define(['jquery'],function($){
	//main1 font
	$('.main1 a:eq(1)').hover(function(){
		$(this).css('color','#bb271a');
	},function(){
		$(this).css('color','#666');
	})
	//marin1 img
	$('.main1 ul li').each(function(){
		$(this).hover(function(){
			$('img',this).animate({
				left : -5,
			},300)
		},function(){
			$('img',this).animate({
				left : 5,
			},300)
		})
	})
	//main2-top-right
	$('.main2-top p a').each(function(){
		$(this).hover(function(){
			$(this).css('color','#d24844');
			$('#' + $(this).parents().eq(2).attr('id') + ' .main2-top p a img').hide();
			$('img',this).show();
			$('#' + $(this).parents().eq(2).attr('id') + ' .right-main2').children().hide();
			$('#' + $(this).parents().eq(2).attr('id') + ' .right-main2-' + $(this).index()).show();
		},function(){
			$(this).css('color','#000');
		})
	})
	//main2-left
	//设置动态宽度
	$('.bullshit div').each(function(){
		$(this).css('width',$('ul',this).length*$('ul',this).outerWidth())
	})
	//运动
	var num = 0;
	$('.rightbtn').each(function(){
		$(this).click(function(){
			num -= 1;
			if(num < -$(this).siblings('.bullshit').children('div').children('ul').length + 1){
				num = 0;
			}
			$(this).siblings('.bullshit').children('div').animate({
				left : num * $(this).siblings('.bullshit').children('div').children('ul').outerWidth(),
			},500)
		})
	})
	$('.leftbtn').each(function(){
		$(this).click(function(){
			num += 1;
			if(num > 0){
				num = -$(this).siblings('.bullshit').children('div').children('ul').length + 1;
			}
			$(this).siblings('.bullshit').children('div').animate({
				left : num * $(this).siblings('.bullshit').children('div').children('ul').outerWidth(),
			},500)
		})
	})
	//main3
	var num2 = 0;
	$('.main3 a:eq(1)').click(function(){
		num2 -= 1;
		if(num2 < -2){
			num2 = 0;
		}
		$('ul','.main3 div:nth-of-type(2)').animate({
			left : num2 * 530,
		})
	})
	$('.main3 a:eq(0)').click(function(){
		num2 += 1;
		if(num2 > 0){
			num2 = -2;
		}
		$('ul','.main3 div:nth-of-type(2)').animate({
			left : num2 * 530,
		})
	})
})