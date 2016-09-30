$(function() {
	$('#comment').load("othercomment.html", function() {
		//订单移入移出
		$('.dingdan').hover(function() {
			$('.hide_dd').css('display', 'block');
			$('.hide_dd').stop().animate({
				'right': '37px'
			});
		}, function() {
			$('.hide_dd').stop().animate({
				'right': '-31px'
			});
			$('.hide_dd').css('display', 'none');
		});
		//足迹移入移出
		$('.zuji').hover(function() {

			$('.hide_zj').css('display', 'block');
			$('.hide_zj').animate({
				'right': '37px'
			});
			//alert()
		}, function() {
			$('.hide_zj').animate({
				'right': '-31px'
			});
			$('.hide_zj').css('display', 'none');
		});
		//购物车移入移出
		$('.gwc').hover(function() {
				$('.hide_gwc').css('display', 'block');
				$('.hide_gwc').stop().animate({
					'right': '37px'
				});
			}, function() {
				$('.hide_gwc').stop().animate({
					'right': '-31px'
				});
				$('.hide_gwc').css('display', 'none');
			})
			//返回顶部
		$('.backtop').click(function() {
				$('html,body').animate({
					'scrollTop': 0
				}, 0);
			})
			//移入商品分类出现二级菜单
		$('.nav_left_title').hover(function() {
				$('.nav_left_menu').fadeIn();
			}, function() {
				$('.nav_left_menu').fadeOut();
			})
			//=========================二级菜单=========================
		$('.nav_left_menu ul li').hover(function() {
			$(this).children().last().css('display', 'block'); //二级菜单出现
			$(this).css({
				'background': 'rgba(255,255,255,0.98)'
			}); //相应的一级菜单背景色改变
			$(this).find('.item').css('color', '#333');
			$(this).find('.item').children('a').css('color', '#333') //相应的字体颜色改变

		}, function() {
			$(this).children().last().css('display', 'none'); //二级菜单消失
			$(this).css({
				'background': '#2d2d2d'
			}); //相应的一级菜单背景色改变
			$(this).find('.item').css('color', '#fff');
			$(this).find('.item').children('a').css('color', '#fff') //相应的字体颜色改变
		});
		//左上角登录注册根据用户是否登录来改变
		var a = getCookie('a');
		var nm = getCookie('userName');
		if(a == 'true'){
//						$('.login').html("您好，"+nm);
			$('.login').html("<a>您好</a>," + nm);
			$('.login').css('color','#36c');
			$('.login a').css('color','#666');
		}else{
			$('.login').html(" Hi~欢迎来到ZOL商城，请"+"<a href='login.html'>登录</a>");
			
		}
		$('.register a').html("退出");
		$('.register a').attr("href", "login.html");
		$('.register a').click(function(){
			setCookie('a',false);
		});

		$('#right_tab').remove();
	})

	$('#fff').load("footcomment.html", function() {
		$('.f_content .up').remove()
	});

})

$(function() {
	//ajax加载详情页的页面
	var dataid = getCookie('dataid');
	$.ajax({
		url: "../js/list.json",
		success: function(mag) {
			//console.log(mag);
			var num = mag.data;
			var str0 = str1 = str2 = str3 = str4 = str5 = str6 = "";
			var p1 = p2 = p3 = p4 = p5 = "";
			var str = "";
			var mimg = simg = bimg = "";
			for(var i in num) {
				if(dataid == num[i].id) {
					str0 = num[i].id;
					str1 = num[i].title;
					str2 = num[i].img;
					str3 = num[i].price;
					str4 = num[i].pingjia;
					str5 = num[i].xiaoshou;
					str6 = num[i].shop_name;
					p1 = num[i].p1;
					p2 = num[i].p2;
					p3 = num[i].p3;
					p4 = num[i].p4;
					p5 = num[i].p5;
					var shuliang = 0;
					if(getCookie('number' + str0)) {
						shuliang = getCookie('number' + str0);
					} else {
						shuliang = 1;
					}
					str = '<div class="number"><span class="buynum">购买数量：</span><div class="baoguo"><span class="decrease"></span><input dataid= "' + num[i].id + '" type="text" title="请输入购买量" value="' + shuliang + '" class="numbers"><span class="increase"></span></div><span class="part">件<em>（限购33件)</em></span></div>';

					mimg += '<img class="mpic currentPic" src="../img/list/' + str2 + '" title="pc图片" alt="P1">';
					mimg += '<img class="mpic" src="../img/detail/' + p2 + '" title="pc图片" alt="P2">';
					mimg += '<img class="mpic" src="../img/detail/' + p3 + '" title="pc图片" alt="P3">';
					mimg += '<img class="mpic" src="../img/detail/' + p4 + '" title="pc图片" alt="P4">';
					mimg += '<img class="mpic" src="../img/detail/' + p5 + '" title="pc图片" alt="P5">';

					simg += '<li class="spic"><img src="../img/list/' + str2 + '"></li>';
					simg += '<li class="spic"><img src="../img/detail/' + p2 + '" /></li>';
					simg += '<li class="spic"><img src="../img/detail/' + p3 + '" /></li>';
					simg += '<li class="spic"><img src="../img/detail/' + p4 + '" /></li>';
					simg += '<li class="spic"><img src="../img/detail/' + p5 + '" /></li>';

					bimg += '<img class="bigpic currentPic" src="../img/list/' + str2 + '" />';
					bimg += '<img class="bigpic" src="../img/detail/' + p2 + '" />';
					bimg += '<img class="bigpic" src="../img/detail/' + p3 + '" />';
					bimg += '<img class="bigpic" src="../img/detail/' + p4 + '" />';
					bimg += '<img class="bigpic" src="../img/detail/' + p5 + '" />';

				}

			}

			//console.log(simg);

			$('.tu .up img').attr('src', '../img/list/' + str2);

			$('.box').before(mimg);
			$('.down_ul').append(simg); //小图
			$('.bigs').append(bimg); //放大的图
			

			$('.baoxiu').after(str);

			$('.title').html(str1);
			$('.good_price').html(str3);
			$('.buy_adivce em').html(str4);
			$('.buy_record em').html(str5);
			$('.clearfix span a').html(str6);
			$('.store_name a').html(str6);
			$('.buy_car').attr('dataid', str0);
			$('.btn_tocar').attr('dataid', str0);
			//			$('.big img').attr('src','../img/list/'+str2);

			//数量输入框失焦事件
			$('.numbers').blur(function() {
					if(Number($('.numbers').val()) > 0) {
						$('.decrease').css('background', "#f8f8f8 url(../img/bg3.png) no-repeat 0 -169px");
						var inpId = $('.numbers').attr('dataid');
						var num = Number($('.numbers').val());
						setCookie('number' + inpId, num);
					} else {
						$('.decrease').css('background', "#f8f8f8 url(../img/bg3.png) no-repeat 0 -197px");

					}
				})
				//数量加减按钮
			$('.decrease').click(function() {
				var inpId = $(this).next().attr('dataid');
				var number = getCookie('number' + inpId);
				number = Number($('.numbers').val());
				var newNum = --number;
				if(number > 0) {
					$('.numbers').val(newNum);
					$('.increase').css('background', "#f8f8f8 url(../img/bg3.png) no-repeat -32px -169px");
					var num = Number($('.numbers').val());
					setCookie('number' + inpId, num);
				} else {
					$('.numbers').val(1);
					setCookie('number' + inpId, 1);
					$('.decrease').css('background', "#f8f8f8 url(../img/bg3.png) no-repeat 0 -197px");
				}
			})
			$('.increase').click(function() {
				//		console.log(number)
				number = Number($('.numbers').val());
				var newNum = ++number;
				if(number <= 33) {
					$('.decrease').css('background', "#f8f8f8 url(../img/bg3.png) no-repeat 0 -169px")
					$('.numbers').val(newNum);
					var inpId = $(this).prev().attr('dataid');
					var num = Number($('.numbers').val());
					setCookie('number' + inpId, num);
				} else {
					$('.numbers').val(33);

				}
			})

			/*=======================点击小图切换大图==================================*/
			$('.spic').click(function() {
				var $index = $(this).index();
				//				console.log($index);
				$('.mpic').removeClass('currentPic');
				$('.mpic').eq($index).addClass('currentPic');
				$('.bigpic').removeClass('currentPic');
				$('.bigpic').eq($index).addClass('currentPic');
				$(this).css('border-color', '#c00').siblings().css('border-color', '#fff')

			})
		}
	});

	//============================购物车窗口=====================
	//加入购物车
	$('.button').on('click', '.buy_car', function() {
		//	$('.buy_car').click(function(){
		$('.carbox').css('visibility', 'visible');
		$('#zs-cart-number').html(Number($('.numbers').val())) //窗口的商品总数目
		var price = Number($('.good_price').html());
		var num = Number($('#zs-cart-number').html());
		$('#total_price').html(num * price) //窗口的商品总价格
		var carId = $('.buy_car').attr('dataid');
		setCookie('number' + carId, num);
	})
	$('.btn_tocar').click(function() {
			if(getCookie('a') == 'true') {
				var dataid = $(this).attr('dataid');
				setCookie(dataid, dataid);
				window.location.href = "car.html";
			} else {
				window.location.href = 'login.html';
			}
		})
		//点击关闭 购物车窗口
	$('.zs-close').click(function() {
		$('.carbox').css('visibility', 'hidden');
	})

	//滚动到1190px，变为固定定位于顶部
	$(window).scroll(function() {
		if($(this).scrollTop() > 1190 && $(this).scrollTop() < 20100) {
			//			$('.zs-suck-top .zs-tabbar-nav').addClass('w');
			$('.zs-sidebar').addClass('toside');
			$('#nav-buynow').css('display', 'block');
			$('.zs-suck-top .zs-tabbar-nav').addClass('topcenter');
			$('#zp-tabbar').css('width', 992)
		} else {
			$('.zs-suck-top .zs-tabbar-nav').removeClass('topcenter');
			$('#nav-buynow').css('display', 'none');
			$('.zs-sidebar').removeClass('toside');

		}
	});

	//==================================楼梯======================
	$('.louti li').click(function() {
		var $index = $(this).index();
		$('li').find('a').removeClass('loutcurrent');
		$(this).find('a').addClass('loutcurrent');
		var $top = $('.zs-goods-detail .sevice-title').eq($index).offset().top;
		$('html ,body').animate({
			'scrollTop': $top - 50
		}, 600);
	});
	
	$(window).scroll(function() {
			var $t = $(this).scrollTop(); //获取滚动条滚动的高度
		var $obj = $(".sevice-title");
		//循环每一个Louti 然后找到最先满足条件的那个 Louti
		$obj.each(function() {
			var $index = $(this).index(".sevice-title");
//			console.log($index);
			//楼层与浏览器上面的高度
			var $height = $obj.eq($index).offset().top + $(this).next().height();
			//						console.log($height + " "+ $t)
			//document.title = $t + "--" + $height;
			if($t < $height) {
				$(".louti li").find("a").removeClass("loutcurrent")
				$(".louti li").eq($index).find("a").addClass("loutcurrent");
				return false;
			}
		});
	})
	

//===============================放大镜=======================================
	var oDiv = $('.up');
	var glass = $('.box');
	//鼠标移入移出
	$('.up').mouseover(function() {
		glass.css('visibility', 'visible');
		$('.big').css('display', 'block');
	}); 
	$('.up').mouseout(function() {
		glass.css('visibility', 'hidden');
		$('.big').css('display', 'none');
	}) 
	$('.up').mousemove(function(evt) {
		var e = evt || window.event;
		var left = e.pageX - oDiv.offset().left - glass.width() / 2;
		var top = e.pageY - oDiv.offset().top - glass.height() / 2;
		//		document.title = top;
		//控制边界
		if(left < 0) {
			left = 0;
		} else if(left > oDiv.width() - glass.width()) {
			left = oDiv.width() - glass.width();
		}
		if(top < 0) {
			top = 0;
		} else if(top > oDiv.height() - glass.height()) {
			top = oDiv.height() - glass.height();
		}
		//		console.log(e.clientX)
		$('.box').css({
			'left': left + 'px',
			'top': top + 'px'
		});
		/*var perX = left/(oDiv.width() - glass.width());
		var perY = top/(oDiv.height() -glass.height());*/
		//		var w= perX *($('.big').width() - $('.bigpic').width());
		//		var h= perX *($('.big').height() - $('.bigpic').width());
		var l = -left * 1.5;
		var t = -top * 1.5;
		$('.bigpic').css({
			'left': l + 'px',
			'top': t + 'px'
		});
	})

	//颜色类别选择
	$('.can_buy').click(function() {
	$(this).css('border-color', '#c00').siblings().css('border-color', '#e6e6e6');
	$(".can_buy .showi").removeClass("showi");
	$(this).children('i').addClass('showi');
	})
	//套餐选择
	$('.cl_buy').click(function() {
	$(this).css('border-color', '#c00').siblings().css('border-color', '#e6e6e6');
	$(".cl_buy .showi").removeClass("showi");
	$(this).children('i').addClass('showi');
	});
	
	
	//楼梯最左下角的选项卡
	
	$('body').on('mouseenter', '.side-tab > li', function() {
		var rankingListSet = $('.ranking-list');
		var liIndex = $(this).index();
		var otherLi = $(this).siblings();
		otherLi.removeClass('current');
		$(this).addClass('current')
		rankingListSet.hide();
		rankingListSet.eq(liIndex).show();
	});

})