define(['jquery','Ajax','sousuokuang','daohang','banner','neirong_index','rightside','leftside'],function($){
//		new serach().a().init();
		//跳转goumaiye.html
		$('#luzhoulaojiao').each(function(){
			$(this).attr('href',$(this).attr('href') + '?index=' + $(this).attr('id') + '_' + $(this).index());
		})
})



















