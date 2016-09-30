$(function(){
	$('#comment').load('html/comment.html',function(){
		//订单移入移出
		$('.dingdan').hover(function(){
			$('.hide_dd').css('display','block');
			$('.hide_dd').stop().animate({'right':'37px'});
		},function(){
			$('.hide_dd').stop().animate({'right':'-31px'});
			$('.hide_dd').css('display','none');
		});
		//足迹移入移出
		$('.zuji').hover(function(){
			
			$('.hide_zj').css('display','block');
			$('.hide_zj').animate({'right':'37px'});
			//alert()
		},function(){
			$('.hide_zj').animate({'right':'-31px'});
			$('.hide_zj').css('display','none');
		});
		//购物车移入移出
		$('.gwc').hover(function(){
			$('.hide_gwc').css('display','block');
			$('.hide_gwc').stop().animate({'right':'37px'});
		},function(){
			$('.hide_gwc').stop().animate({'right':'-31px'});
			$('.hide_gwc').css('display','none');
		})
		//返回顶部
		$('.backtop').click(function(){
			$('html,body').animate({'scrollTop':0},0);
			})
		});
		
});

$(function(){
//	================轮播图========================
//	var index = 0;
//	var timer =null;
//	var length = $('.lb li').size();
//	$('.point span').eq(index).css('background','#c00').siblings().css('background','rgba(0,0,0,0.6)');
//	timer = setInterval(change,3000);
//	//轮播图运动函数
//	function change(){
//			$('.lb').animate({'marginLeft':'-740px'},1000,function(){
//				$('.lb li').eq(0).appendTo($('.lb'));
//				$('.lb').css("marginLeft",0);
//				if(index > length-1){
//					index = 0;
//					$('.point span').eq(index).css('background','#c00').siblings().css('background','rgba(0,0,0,0.6)');
//				}
//			});
//			index++;
//			$('.point span').eq(index).css('background','#c00').siblings().css('background','rgba(0,0,0,0.6)');
//	}
//====================banner的轮播================================	
	var _index=0	
	var length = $('.lb li').size();
	var timer=setInterval(changes,2000)
	//轮播函数
	function changes(){
		_index++
		if(_index>=length){
			_index=0
		}
		$(".lb").stop(true).animate({"left":"-"+740*_index+"px"})
		$('.point span').eq(_index).css('background','#c00').siblings().css('background','rgba(0,0,0,0.6)');
	}	
	//圆点
	$('.point span').eq(0).css('background','#c00')
	$('.point span').hover(function(){
		clearInterval(timer)
		$(this).css('background','#c00').siblings().css('background','rgba(0,0,0,0.6)');
		var index=$(this).index()-1
		_index=index
		changes();
	},function(){
		timer=setInterval(changes,2000)
	})
	//轮播左右按钮出现
	$('.mark_left').hover(function(){
		$('.pre').css('display','block')
	},function(){
		$('.pre').css('display','none')
	})
	$('.mark_right').hover(function(){
		$('.next').css('display','block')
		
	},function(){
		$('.next').css('display','none')
	})
	//左右按钮点击事件
	$('.pre').click(function(){
		clearInterval(timer);
//		console.log(_index)
		if(_index <= 0){
			_index = 6;
		}
		_index--;
		_index--;
		changes();
	})
	$('.next').click(function(){
		clearInterval(timer);
//		console.log(_index)
		changes();
	})
	
	
//=========================二级菜单=========================
	$('.nav_left_menu ul li').hover(function(){
		$(this).children().last().css('display','block');//二级菜单出现
		$(this).css({'background':'rgba(255,255,255,0.98)'});//相应的一级菜单背景色改变
		$(this).find('.item').css('color','#333');
		$(this).find('.item').children('a').css('color','#333')//相应的字体颜色改变
		
	},function(){
		$(this).children().last().css('display','none');//二级菜单消失
		$(this).css({'background':'#2d2d2d'});//相应的一级菜单背景色改变
		$(this).find('.item').css('color','#fff');
		$(this).find('.item').children('a').css('color','#fff')//相应的字体颜色改变
	})
	
	//=======================1元夺宝=================
	$('.oneyuan_list li').mouseenter(function(){
		$(this).find(".hover_show").css('display','block');
	});
	$('.oneyuan_list li').mouseleave(function(){
		$(this).find(".hover_show").css('display','none');
	})
	
	
//==================1F--4F图片向上滑动（跳动）效果=====================
	$('.item img').hover(function(){
		$(this).stop(true).animate({
			'margin-top':'10px'
		})
	},function(){
		$(this).stop(true).animate({
			'margin-top':'20px'
		})
	})
	
//======================public===1F--4F 轮播的插件==========================
	var chajian=window.chajian||{}
	chajian={
		lunbo:function(options){
			var defu={
				oul:$(".lb_1f"),
				dian:$(".point_onelou span"),
				prezhezhao:$('.pre_1f'),
				preanniu:$('.pre_1f i'),
				nexzhezhao:$('.next_1f'),
				nexanniu:$('.next_1f i')
			}
			var opt=$.extend(defu,options);
			var oul=opt.oul;
			var dian=opt.dian
			var prezhezhao=opt.prezhezhao;
			var preanniu=opt.preanniu;
			var nexzhezhao=opt.nexzhezhao;
			var nexanniu=opt.nexanniu;
			var timer_public= setInterval(change,2000);
			var indexs=0	
			//轮播函数
			function change(){
				indexs++;
				if(indexs>=3){
					indexs=0
				}
				oul.stop(true).animate({"left":"-"+420*indexs+"px"})
				dian.eq(indexs).css('background','#f33').siblings().css('background','#e6e6e6');
			}	
			//圆点
			dian.eq(0).css('background','#f33').siblings().css('background','#e6e6e6');
			dian.hover(function(){
				clearInterval(timer_public);
				$(this).css('background','#f33').siblings().css('background','#e6e6e6');
				var num = $(this).index()-1;
				indexs = num;
				change();
			},function(){
				timer_public = setInterval(change,2000)
			})
			//轮播左右按钮出现
			prezhezhao.hover(function(){
				preanniu.css('display','block')
			},function(){
				preanniu.css('display','none')
			})
			nexzhezhao.hover(function(){
				nexanniu.css('display','block')
				
			},function(){
				nexanniu.css('display','none')
			})
			//左右按钮点击事件
			preanniu.click(function(){
				clearInterval(timer_public);
				if(indexs <= 0){
					indexs = 3;
				}
				indexs--;
				indexs--;
				change();
			})
			nexanniu.click(function(){
				clearInterval(timer_public);
				change();
			})
			
		}
	}

	//1F
	chajian.lunbo({
		oul:$(".mobile .lb_1f"),
		dian:$(".mobile .point_onelou span"),
		prezhezhao:$('.mobile .pre_1f'),
		preanniu:$('.mobile .pre_1f i'),
		nexzhezhao:$('.mobile .next_1f'),
		nexanniu:$('.mobile .next_1f i')
	})
	//2F
	chajian.lunbo({
		oul:$(".nb .lb_1f"),
		dian:$(".nb .point_onelou span"),
		prezhezhao:$('.nb .pre_1f'),
		preanniu:$('.nb .pre_1f i'),
		nexzhezhao:$('.nb .next_1f'),
		nexanniu:$('.nb .next_1f i')
	})
	//3F
	chajian.lunbo({
		oul:$(".jd .lb_1f"),
		dian:$(".jd .point_onelou span"),
		prezhezhao:$('.jd .pre_1f'),
		preanniu:$('.jd .pre_1f i'),
		nexzhezhao:$('.jd .next_1f'),
		nexanniu:$('.jd .next_1f i')
	})
	//4F
	chajian.lunbo({
		oul:$(".diy .lb_1f"),
		dian:$(".diy .point_onelou span"),
		prezhezhao:$('.diy .pre_1f'),
		preanniu:$('.diy .pre_1f i'),
		nexzhezhao:$('.diy .next_1f'),
		nexanniu:$('.diy .next_1f i')
	})
	
	console.log('作者：魏磊，331192656@qq.com')
//	var indexs=0	
//	//var b = $('.lb_1f li').size();
//	var timer_public= setInterval(change,2000);
//	//轮播函数
//	function change(){
//		indexs++;
//		if(indexs>=3){
//			indexs=0
//		}
//		$(".lb_1f").stop(true).animate({"left":"-"+420*indexs+"px"})
//		$(".point_onelou span").eq(indexs).css('background','#f33').siblings().css('background','#e6e6e6');
//	}	
//	//圆点
//	$('.point_onelou span').eq(0).css('background','#f33').siblings().css('background','#e6e6e6');
//	$('.point_onelou span').hover(function(){
//		clearInterval(timer_public);
//		$(this).css('background','#f33').siblings().css('background','#e6e6e6');
//		var num = $(this).index()-1;
//		indexs = num;
//		change();
//	},function(){
//		timer_public = setInterval(change,2000)
//	})
//	//轮播左右按钮出现
//	$('.pre_1f').hover(function(){
//		$('.pre_1f i').css('display','block')
//	},function(){
//		$('.pre_1f i').css('display','none')
//	})
//	$('.next_1f').hover(function(){
//		$('.next_1f i').css('display','block')
//		
//	},function(){
//		$('.next_1f i').css('display','none')
//	})
//	//左右按钮点击事件
//	$('.pre_1f i').click(function(){
//		clearInterval(timer_public);
//		if(indexs <= 0){
//			indexs = 3;
//		}
//		indexs--;
//		indexs--;
//		change();
//	})
//	$('.next_1f i').click(function(){
//		clearInterval(timer_public);
//		change();
//	})
	

	
	
	
/*====================滚动出现最上方搜索条========================*/
	$(window).scroll(function(){
		if($(this).scrollTop() > 500){
			$('.search_layer').fadeIn();
		}else{
			$('.search_layer').fadeOut();
		}
	})
	
	
/*==============登录用户名的显示和隐藏===========*/
	var a = getCookie('a');
	var nm = getCookie('userName');
	if(a == 'true'){
		$('.showName').css('dispay','block')
		$('.sname').html(nm);
		
	}else{
		$('.showName').css('display','none')
	}
	//点击退出
	$('.tuichu').click(function(){
		$('.showName').css('display','none');
		setCookie('a','false');
	})
	
	
	
	
	
	

	
	
})




