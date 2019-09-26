define(['jquery','Ajax','sousuokuang','daohang','rightside'],function($){
	//获取url
	var urlData = window.location.search.split('=')[1].split('_')[0];
	var index = window.location.search.split('=')[1].split('_')[1];
	//获取json
	ajax({
		type : 'GET',
		url : 'json/yy.json',
		succes : function(ajax){
			var jSon = JSON.parse(ajax);
			//main-top
			$('.main-top li:eq(3) a').text(jSon[index][urlData].name + ' x');
			//类目
			$($('.main-left dl:nth-child(1) dd:nth-of-type(2) a:nth-of-type(2)')).text(jSon[index][urlData].name);
			
			//banner
			$('.banner img').eq(0).attr('src','img/' + urlData + '/' + jSon[index][urlData].banner);
			$('.banner img').eq(1).attr('src','img/' + urlData + '/' + jSon[index][urlData].bannerin);
			
			
			//main
			//small
			for(var i = 0,length = jSon[index][urlData].small.length;i < length;i ++){
				var str = `
					<dd>
						<img src="img/${urlData}/${jSon[index][urlData].small[i].smallimg1}" alt="" />
						<span>
							<a href="#">${jSon[index][urlData].small[i].smalltext}</a>
							<a href="#">${jSon[index][urlData].small[i].smallp}</a>
						</span>
					</dd>
				`;
				$('.small').append(str);
			}
			
			
			//medium
			for(var i = 0,length = jSon[index][urlData].medium.length;i < length;i ++){
				var str = `
					<dd>
						<img src="img/${urlData}/${jSon[index][urlData].medium[i].mediumimg1}" alt="" />
						<p>${jSon[index][urlData].medium[i].mediumtext}</p>
						<p>
							<span>${jSon[index][urlData].medium[i].mediump}</span>
							<span>${jSon[index][urlData].medium[i].mediumt}</span>
							<span>评论数：</span>
						</p>
					</dd>
				`;
				$('.medium').append(str);
			}
			
			
			//big
			for(var i = 0,length = jSon[index][urlData].big.length;i < length;i ++){
				var str = `
					<div class="big">
						<div class="box">
							<a href="cart.html?bigid=${jSon[index][urlData].big[i].bigid}">
								<main>
									<a href=""><img src="img/${urlData}/${jSon[index][urlData].big[i].bigimg1}" alt="" /></a>
									<a href=""><img src="img/${urlData}/${jSon[index][urlData].big[i].bigimg2}" alt="" /></a>
									<a href=""><img src="img/${urlData}/${jSon[index][urlData].big[i].bigimg3}" alt="" /></a>
								</main>
							</a>
							<p>
								<span>¥${jSon[index][urlData].big[i].bigp}</span>
								<span>成交&nbsp;<a>${jSon[index][urlData].big[i].bigt}</a>&nbsp;笔</span>
							</p>
							<p>${jSon[index][urlData].big[i].bigtext}</p>
							<a href="#" class='fuck'>${jSon[index][urlData].big[i].bigfrom}</a>
							<div>
								<img src="img/${urlData}/${jSon[index][urlData].big[i].bigin1}" alt="" />
								<img src="img/${urlData}/${jSon[index][urlData].big[i].bigin2}" alt="" />
								<img src="img/${urlData}/${jSon[index][urlData].big[i].bigin3}" alt="" />
							</div>
						</div>
					</div>`;
				$('.main-right-bottom').append(str);
			}
			
			
			//类目
			var num = 1;
			$('.main-left dl:first dd:nth-of-type(1) p').click(function(){
				$(this).parent().next().slideToggle(300);
				if(num == 1){
					$('span',this).css('transform','rotate(-90deg)');
				}
				num ++;
				if(num > 2){
					num = 1;
					$('span',this).css('transform','rotate(0)');
				}
			})
			//main-top
			$('.main-top p span').text($('.box').length);
			//main-right-top
			$('.main-right-top div ul li').hover(function(){
				$(this).addClass('f00');
			},function(){
				$(this).removeClass('f00');
			})
			//box
			$('.box').hover(function(){
				$(this).parent().css('z-index','2');
				$(this).css('border','1px #f00 solid');
				$('div',this).show();
				$('a',this).eq(4).css({
					'text-decoration':'underline',
					'color':'#f00'
				});
			},function(){
				$('div',this).hide();
				$(this).css('border','1px #e1e1e1 dashed');
				$(this).parent().css('z-index','1');
				$('a',this).eq(4).css({
					'text-decoration':'none',
					'color':'#7f7f7a'
				});
			})
			//bigin
			$('.box div img').mouseover(function(){
				$(this).parent().siblings('main').children().children().hide();
				$(this).parent().siblings('main').children().children().eq($(this).index()).show();
			})
		}
	})
})		