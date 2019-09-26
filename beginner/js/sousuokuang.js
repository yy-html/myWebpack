define(['jquery'],function($){
	//搜索框
	$('.sousuol div:eq(0)').click(function(){
		$(this).next().show();
	});
	$('.sousuoclick p').each(function(){
		$(this).click(function(){
			$(this).parent().prev().html($(this).text()).append('<div class="sanjiao2"></div>');
			$(this).parent().hide();
		})
	})
})
