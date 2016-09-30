	$(function() {
	//	$('#wrap .form .num .yzm').html() = yanzheng();
		$('.yzm').html(yanzheng());
		$('.change').click(function() {
		$('.yzm').html(yanzheng());
	});
	
	//正则判断			
	var reg = /^1{1}\d{10}$/
	//var reg_yzm = /^[a-zA-Z1-9]{4}$/
	
	
	var pn =yz = mm = remm = true;
	//手机号
	$('.phone_num').blur(function() {
		var str = $(this).val();
		if(reg.test(str)) {
			$(this).next().css('display', 'block');
			$(this).next().next().css('display', 'none');
			pn = true;
		} else if(str == '') {
			$(this).next().next().css('display', 'block');
			pn = false;
		} else {
			$(this).next().next().css('display', 'block');
			$(this).next().next().html('请填写有效的11位手机号码');
			pn = false;
		}
	})
//				$('.phone_num').focus(function(){
//					$('.phone_num').css('border',0)
//				})
	//图片验证码
	$('.tu').blur(function() {
		var str = $(this).val();
		if(str != '') {
			$(this).parent().find('.right_tip').css('display', 'block');
			$(this).parent().find('.wrong_tip').css({
				'display': 'none',
				'left': 415
			});
		} else {
//			yz = false;
			$(this).parent().find('.wrong_tip').css({
				'display': 'block',
				'left': 415
			});
			$(this).parent().find('.right_tip').css('display', 'none');
		}
	})
	//短息验证码				
	$('.getyzm').click(function() {
		var a = ($('.yzm').html()).toUpperCase();
		var b = ($('.tu').val()).toUpperCase();
		$('.phone_num').next().next().css('display', 'none');
		if(a == b) {
			yz = true;//点击短息验证码后才能判断图片验证码 是否正确，所有将yz写在这里
			$('.getyzm').css({
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
					$('.getyzm').val('获取短息验证码');
					
				}
			}
		} else {
			$('.phone_num').next().next().css('display', 'block');
			$('.phone_num').next().next().html('图片验证码错误，请重新填写');
			yz = false
		}
	})
	//密码正则判断
	var reg_pwd = /^[a-zA-Z1-9]{6,16}$/;
	var reg_pwd_num = /^[1-9]{6,16}$/;
	$('.pwd').blur(function() {
			var str = $('.pwd').val();
			if(reg_pwd_num.test(str)) {
				mm = false;
				$(this).next().next().css('display', 'block');
				$(this).next().next().html('密码不能全是数字');
				$(this).next().css('display', 'none');
			} else if(str == '') {
				$(this).next().next().css('display', 'block');
				$(this).next().css('display', 'none');
				mm = false;
			} else if(reg_pwd.test(str)) {
				$(this).next().css('display', 'block');
				$(this).next().next().css('display', 'none');
				mm = true;
			} else {
				$(this).next().next().css('display', 'block');
				$(this).next().next().html('6-16位字母和数字的组合，不可用特殊字符')
				$(this).next().css('display', 'none');
				mm = false;
			}console.log(mm)
		})
	//确认密码
	$('.repwd').blur(function() {
			var a = $(this).val();
			var b = $('.pwd').val();
			//					console.log(a == b)
			if(a == b) {
				$(this).next().css('display', 'block');
				$(this).next().next().css('display', 'none');
				remm = true;
			} else {
				$(this).next().css('display', 'none');
				$(this).next().next().css('display', 'block');
				remm = false;
			}

		})
	
	
	//同意《商城协议》
	$(".checktrue").click(function(){
		if($(".checktrue").prop("checked")==true){
//			alert(1)
			$('.btn').removeAttr("disabled")
		}else{
//			alert(2)
			$('.btn').attr("disabled","disabled");
			
		}
	})
	
	
	//注册按钮	
	$('.btn').click(function(){
		var name = $('.phone_num').val();
		var pwd = $('.pwd').val();
		if(name == ''){
			alert('请您输入手机号进行注册!');
		}else if(pwd == ''){
			alert('请输入您的密码！	')
		}else if(pn == true&& yz == true&&mm == true&& remm ==true){
			if($(".checktrue").prop("checked")==true){
				setCookie('userName',name,setCookieDate(7));
				setCookie("password",pwd,setCookieDate(7));
				window.location.href = 'login.html';
			}else{
				$('.btn').attr("disabled","disabled");
				alert("请先阅读用户协议")
			}
		}else{
			alert('您输入有误！')
		}
		
	})
	
	
	
	
	//注册按钮
	/*$('.btn').click(function(){
		var name = $('.phone_num').val();
		var pwd = $('.pwd').val();
		$.ajax({
			url: "http://datainfo.duapp.com/shopdata/userinfo.php",
			data: {
				status: "register",
				userID: name,
				password: pwd
			},
			success: function(data) {
				if(data == 0) {
					alert('此手机号已经注册过')
				} else if(data == 1) {
					alert('注册成功！')
					window.location.href = 'login.html'
				} else if(data == 2) {
					alert('数据库报错')
				}

			}

		});
	})*/
	
	
	
	
	
	
	
	
	
	
})