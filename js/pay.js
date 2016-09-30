$(function(){
	$('#comment').load('othercomment.html',function(){
		$('#nav').remove();
		$('#head').remove();
		$('#right_tab').remove();
		
		
		$('.login a').html(" ");
		$('.register a').html("退出");
		$('.register a').attr("href", "login.html");
		$('.iphone').css('right', '165px');
		/*$('li.contact').css({
			'margin-top': '-11px',
			'margin-left': '-2px',
		})*/
		
		var a = getCookie('a');
		var nm = getCookie('userName');
		$('.login').html("<a>您好</a>," + nm);
		$('.login').css('color','#36c');
		$('.login a').css('color','#666');
		$('.ding').remove();
		$('.ding').remove();
		$('.ding').remove();
	})
		//获得总价
		var sum = getCookie('totle');
		$('.price span').html(sum);
		$('.pay-amount em').html(sum);
	
	
	//第三方支付平台
//	var onoff = true
//	$('#third_span').click(function(){
//		if(onoff){
//			$('#third_span').css('background-position','0 -50px');
//			$('#yhk').css('background-position','0 -79px');
//			$('.pay-submit-btn').css('background','#c00');
//			$('.classa').eq(0).css('border-color','#f33');
//			onoff = !onoff;
//		}else{
//			$('#third_span').css('background-position','0 -79px');
//			$('.pay-submit-btn').css('background','#dcdcdc');
//			$('.classa').eq(0).css('border-color','#fff');
//			onoff = !onoff;
//		}
//		
//	})
//	//支付宝或微信点击事件----border变红
//	$('.classa').click(function(){
//		$(this).css('border-color','#f33').siblings().css('border-color','#fff');
//		$('.radiobox-selected').css('background-position','0 -50px');
//	})
//	//银行卡支付
//	var tonoff = true;
//	$('#yhk').click(function(){
//		if(tonoff){
//			$('#yhk').css('background-position','0 -50px');
//			$('#third_span').css('background-position','0 -79px');
//			$('.pay-submit-btn').css('background','#c00');
//			$('.classa').css('border-color','#fff');
//			tonoff = !tonoff;
//		}else{
//			$('#yhk').css('background-position','0 -79px');
////			$('#third_span').css('background-position','0 -50px');
//			$('.pay-submit-btn').css('background','#dcdcdc');
////			$('.classa').css('border-color','#fff');
//			tonoff = !tonoff;
//		}
//		
//	})
	//平台支付
	$("#third_span").click(function(){
		if($("#third_span").attr("class").indexOf("radiobox-selected") < 0){
			$("#yhk").removeClass("radiobox-selected");
			$(this).addClass("radiobox-selected");
			$('.pay-submit-btn').css('background','#c00');
			$('.classa').eq(0).css('border-color','#c00');
			
		}else{
			$(this).removeClass("radiobox-selected")
			$('.pay-submit-btn').css('background','#EDEDED');
			$('.classa').eq(0).css('border-color','#fff');
		}
			
		
		
	})
	//银行卡支付
	$("#yhk").click(function(){
		if($("#yhk").attr("class").indexOf("radiobox-selected") < 0){
			$("#third_span").removeClass("radiobox-selected");
			$(this).addClass("radiobox-selected");
			$('.pay-submit-btn').css('background','#c00');
			$('.classa').eq(0).css('border-color','#fff');
		}else{
			$(this).removeClass("radiobox-selected");
			$('.pay-submit-btn').css('background','#EDEDED');
			
		}
	
	//支付宝或微信点击事件----border变红
	$('.classa').click(function(){
		$(this).css('border-color','#f33').siblings().css('border-color','#fff');
		$('.radiobox-selected').css('background-position','0 -50px');
	})
			
		
		
	})

	
})