$(function() {
	$('#comment').load('othercomment.html', function() {
		$('#right_tab').remove();
		$('.searchbox').remove();
		$('.head_ad').remove();
		$('#nav').remove();
		$('#head').remove();
//		$('.login').html("您好，");
		$('.login a').html(" ");
		$('.register a').html("退出");
		$('.register a').attr("href", "login.html");
		$('.iphone').css('right', '186px');
		$('li.contact').css({
			'margin-top': '-11px',
			'margin-left': '-2px',
		})

		//左上角登录注册根据用户是否登录来改变
		var a = getCookie('a');
		var nm = getCookie('userName');
		if(a == 'true') {
			$('.login').html("您好，" + nm);
		} else {
			$('.login').html(" Hi~欢迎来到ZOL商城，请" + "<a href='login.html'>登录</a>");

		}
		$('.register a').click(function() {
			setCookie('a', false);
		});

	});

})
$(function() {
	var cookie = document.cookie;
	var cook = cookie.split('; ');
	//console.log(cook);
	var arr = [];
	for(var i = 0; i < cook.length; i++) {
		var shuju = cook[i].split('=');
		var nameid = shuju[0] * 1
		//console.log(shuju[0]);
		if(!isNaN(nameid)) {
			arr.push(nameid);
		}
	}
	$.ajax({
		url: "../js/list.json",
		success: function(data) {
			var mag = data.data;
			var s1 = s2 = s4 = s5 = '';
			var s3 = 0;
			var str = '';
			var sum = 0;
			for(var i = 0; i < arr.length; i++) {
				for(var j = 0; j < mag.length; j++) {
					if(arr[i] == mag[j].id) {
						var currentNum = getCookie('number' + mag[j].id);
						s1 = mag[j].img;
						s2 = mag[j].title;
						s3 = mag[j].price;
						s4 = mag[i].shop_name;
						s5 = s3 * currentNum ;
						sum += Number(s5);
						str += '<tr class ="stname"><td colspan="7" class=" store_infor "><div class="shopname"><input name="" type="checkbox" value="189882" checked="">店铺：<a href="#" target="_blank" class="shopnm">' + s4 + '</a></div><div class="contact"><a class="tag_security" style="margin: 0 -9px 0 0">&nbsp;</a></div><div class="contact"><a target="_blank" href="#"><img border="0" src="../img/button_121.gif" alt="点击这里给我发消息" title="点击这里给我发消息"></a></div></td></tr>';
						str += '<tr class="manjian"><td class="offer_detail" colspan="7"><div class="total"><span class="type l" style="float: left;">满就减</span>商品金额已满<em>4666.00</em>元，立减<em>36.00</em>元</div></td></tr>';
						str += '<tr class="goods_order"><td colspan="2" class="s-infor"><input type="checkbox" checked><a href="#" class="pic">';
						str += '<img width="80" height="60" src="../img/list/' + s1 + '"></a><div class="inforbox"><h3 class="tit"><a href="list.html">"' + s2 + '"</a></h3><div class="security clearfix"><a href="#" title="7天退换货" class="security-a" target="_blank"></a><a href="#" title="上门服务" class="security-c" target="_blank"></a><a href="#" title="真实报价" class="security-d" target="_blank"></a><a href="#" title="先行赔付" class="" target="_blank"></a></div><p>颜色：黑色</p><div class="info-con"><span>套装：官方标配</span><div class="info-help"><h5>官方标配：</h5><p>全新原装电脑+全国联保保修卡+说明书+电源适配器+电池（具体以厂家配置为准）</p></div></div></div></td>';
						str += '<td class="s-price "><em>' + s3 + '</em></td><td class="s-amount "><div class="buy-num"><a class="minus" dataid = "' + mag[j].id + '" href="javascript:void(0)" title="减一">-</a>';
						str += '<input type="text" maxlength="2"  class="text_amount" value="' + currentNum + '"><a class="plus" dataid = "' + mag[j].id + '" href="javascript:void(0)" title="加一">+</a><div class="tips-2" id="tips_2552051" style="display: none;">最多只能购买8件</div></div></td><td class="s-agio"><div>−−</div></td>';
						str += '<td class="s-total"><em id="cartPrice">' + s5 + '.00</em></td><td class="s-del"><div class="s-delbox"> <a href="javascript:void(0)" title="移入收藏夹" ">移入收藏夹</a><a dataid = "' + mag[j].id + '" href="javascript:;" class = "del"" >删除</a><div class="deletebox" style="display:none;"><p>确认要删除该商品吗？</p><a href="javascript:void(0)" class="yes" dataid = "' + mag[j].id + '">是的</a><a href="javascript:void(0)" class="no">取消</a> <i></i></div></div></td></tr>';

					}
				}
			}
			$('table').append(str);
			$('.cartPrice').append(sum)

//			var number = Number($('.text_amount').val());
			//数量框的失焦事件
			$('.text_amount').blur(function() {
					var number = $('.text_amount').val();
					var carId = $(this).prev().attr('dataid');
					var s3 = $(this).parents('.s-amount ').prev().find('em').html();//获取当前商品的单价
					var b = Number($(this).parents('.goods_order ').find('#cartPrice').html());
					$(this).parents('.goods_order').find('#cartPrice').html(Number(s3) * number + '.00');
					setCookie('number' + carId, number);
					
					var a = Number($('.cartPrice').html());
					var cha = a - b;
					var c =Number($(this).parents('.goods_order').find('#cartPrice').html());//获取改变后的商品小计
					var nowTotle = cha + c;
					$('.cartPrice').html(nowTotle);//改变总价

				})
				//数量加减按钮
			$('.minus').click(function() {
				var numbers = $(this).next().val();
				var s3 = $(this).parents('.s-amount ').prev().find('em').html();//获取当前商品的单价
				var newNum = --numbers;
				var carId = $(this).attr('dataid');
				var sumNow = $('.cartPrice').html();//获取当前的总价
				if(newNum > 0) {
//					$('.text_amount').val(newNum);
					$(this).next().val(newNum);
//					$('#cartPrice').html(s3*newNum + '.00');
					$(this).parents('.goods_order').find('#cartPrice').html(Number(s3) * newNum + '.00')//改变商品单价
					$('.cartPrice').html(Number(sumNow) - Number(s3));//改变总价
					setCookie("number" + carId, newNum);
				}
			})
			$('.plus').click(function() {
				var numbers = $(this).prev().val();
				var s3 = $(this).parents('.s-amount ').prev().find('em').html();//获取当前商品的小计
				var newNum = ++numbers;
				var carId = $(this).attr('dataid')
				var sumNow = $('.cartPrice').html();//获取当前的总价
				if(newNum <= 33) {
//					$('.text_amount').val(newNum);
					$(this).prev().val(newNum);
//					$('#cartPrice').html(s3*newNum + '.00');
					$(this).parents('.goods_order').find('#cartPrice').html(Number(s3)*newNum + '.00');//改变商品小计
					$('.cartPrice').html(Number(sumNow) + Number(s3));//改变总价
					setCookie("number" + carId, newNum);

				}
			})
			//点击删除按钮
			$('.del').click(function() {
				$(this).parents('.s-delbox').find('.deletebox').css('display','block')
			})
			//确定将商品删除
			$('.yes').click(function() {
				var goods_order = $(this).parents('.goods_order');
				goods_order.prev().prev().remove();
				goods_order.prev().remove();
				goods_order.remove();

				var del_num = $(this).attr('dataid');
				//				alert('number'+del_num);
				deleteCookie('number' + del_num);
				deleteCookie(del_num);
				window.location.reload();

			})
			//取消删除按钮
			$('.no').click(function(){
				$(this).parents('.s-delbox').find('.deletebox').css('display','none')
			});
	
			

		}
	});
	
	//去结算
	$('.accounting-btn').click(function(){
		window.location.href = 'pay.html';
		var totlePrice = $('.cartPrice').html(); 
		setCookie('totle',totlePrice);
	})
	$('.submitCart').click(function(){
		window.location.href = 'pay.html';
		var totlePrice = $('.cartPrice').html(); 
		setCookie('totle',totlePrice);
	})


})