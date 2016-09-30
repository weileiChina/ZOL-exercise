$(function() {
	//登录方式的切换
	$('.login .btn_login').click(function() {
		$('.login').css('display', 'none');
		$('.login_phone').css('display', 'block')
	})
	$('.login_phone .btn_login').click(function() {
			$('.login').css('display', 'block');
			$('.login_phone').css('display', 'none')
		})
		//手机登录方式的验证码
	$('.yzm_tu').html(yanzheng());
	$('.yzm_tu').click(function() {
		$('.yzm_tu').html(yanzheng());
	});
	//获取短息验证码
	$('.login_phone .content .getyzm').click(function() {
		var a = ($('.tu_yzm').val()).toUpperCase();
		var b = ($('.yzm_tu').html());
		var str = $('.login_phone .content .name').val()
		if(str == '') {
			$('.tip').css('display', 'block');
		} else if(!reg.test(str)) {
			$('.tip').css('display', 'block');
			$('.tip').html('请填写正确的手机号');
		} else {
			$('.tip').css('display', 'none');
			if(a == b) {
				$('.login_phone .content .getyzm').css({
					'background': '#e6e6e6',
					'color': '#999'
				});
				var timer = null;
				var a = 100;
				timer = setInterval(cut, 1000);

				function cut() {
					a--;
					//console.log(a)
					$('.getyzm').val(a + '秒后重新获取')
					if(a <= 0) {
						clearInterval(timer);
						$('.getyzm').val('发送验证码')
						$('.getyzm').css({
							'background': '#f8f8f8',
							'color': '#000'
						})

					}
				}
			} else {
				$('.login_phone .content .tip').css('display', 'block');
				$('.login_phone .content .tip').html('图片验证码错误，请重新填写')
			}
		}
		})
	//验证手机号框的函数
	var reg = /^1{1}\d{10}$/;
	$('.login_phone .content .name').blur(function() {
		var str = $('.login_phone .content .name').val();
//		alert(reg.test(str))
		if(str == '') {
			$('.tip').css('display', 'block');
		} else if(!reg.test(str)) {
			$('.tip').css('display', 'block');
			$('.tip').html('请填写正确的手机号');
		} else {
			$('.tip').css('display', 'none');
		}

	})
	
	
	//普通方式登录
	$('.login_btn').click(function(){
		var name =  $('.name').val();
		var pwd = $('.pass').val();
		getCookie
		var n = getCookie('userName');
		var p = getCookie('password');
		if(name == n && pwd == p){
			window.location.href = '../index.html';
			setCookie('a',true);
		}else{
			$('.content .tip').css('display','block');
		}
		
	})
	//手机登录方式
	/*$('.login_btn').click(function() {
		var name = $('.name').val();
		var yzm = $('.tu_yzm').val();
		var a = $('.tu_yzm').prev().val();console.log(a);
		if(yzm == a){
			window.location.href = "../index.html";
			setCookie('a',true);
		}else{
			$('.content .tip').css('display','block');
		}
	});*/
	
	
	
	//账号文本框的得焦失焦事件-----改变border颜色
	$('.name').focus(function(){
		$('.name').css('border-color','#c00')
	})
	$('.name').blur(function(){
		$('.name').css('border-color','#ccc')
	})
	//密码文本框的得焦失焦事件-----改变border颜色
	$('.pass').focus(function(){
		$('.pass').css('border-color','#c00')
	})
	$('.pass').blur(function(){
		$('.pass').css('border-color','#ccc')
	})
	
	$('.login_phone input').focus(function(){
		$(this).css('border-color','#c00')
	})
	$('.login_phone input').blur(function(){
		$(this).css('border-color','#ccc')
	})
	
	
	/*ajax登录方式
	 * $('.login_btn').click(function(){
		var name = $('.name').val();
		var pwd = $('.pass').val();
		$.ajax({
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
				status:"login",
				userID:name,
				password:pwd
			},
			success:function(data){
				var oDate = JSON.parse(data);
				if(data == 0){
					$('.tip').css('display','block');
					$('.tip').html('用户名不存在');
				}else if(data == 2){
					$('.tip').css('display','block');
					$('.tip').html('登录失败，用户名或密码错误');
				}else if(oDate){
					$('.tip').css('display','none');
					setCookie(name);
					setCookie("a",true);
					window.location.href = '../index.html';
				}
			}
		});
	)}*/
	
	
		
	
	
	
	
	
	
})