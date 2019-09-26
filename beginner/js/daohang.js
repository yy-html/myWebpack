define(['jquery'],function($){
	//导航右
	$('.navr a').each(function(){
		$(this).	hover(function(){
			$(this).css('color','#f00');
		},function(){
			$(this).css('color','#000');
		})
	})
	//导航左 二级菜单
	$('.navl').hover(function(){
		$('.navdownul').show();
	},function(){
		$('.navdownul').hide();
	})
	//导航左 三级菜单
	$('.navdownul li').each(function(){
		$(this).hover(function(){
			$('div',this).show();
		},function(){
			$('div',this).hide();
		})
	})
})

