
$(function(){

	
	$.ajax({
		type:"get",
		url:"../js/list.json",
		success:function(msg){
			var data = msg.data;
			var str = "";
			for(var i in data){
				str += '<li><span class="care"><span>关注</span></span><a href="javascript:;" class="pic"  dataid = "'+data[i].id+'">';
				str += '<img src="../img/list/'+data[i].img+'" width="200" height="200"></a>';
				str += '<div class="title"  dataid = "'+data[i].id+'"><a href="javascript:;">'+data[i].title+'</a></div>';
				str += '<div class="price-bar"><span class="price">'+data[i].price+'</span></div>';
				str += '<div class="volume"><span>销量数<em>&nbsp;'+data[i].xiaoshou+'</em></span><span class="evaluation">评价数 <a href="javascript:;" target="_blank">'+data[i].pingjia+'</a></span></div>';
				str += '<div class="shop-infor"><p class="shop-name"><a href="javascript:;" target="_blank" title="新捷数码(正品特惠)">'+data[i].shop_name+'</a></p><p class="total_volume" >'+data[i].total_volume+'</p>';
				str += '<p class="more"><a href="javascript:;">'+data[i].more+'</a></p></div></li>'
			}
			$('.goods-list').append(str);
			fenye();
			
		}
	});
	//点击图片 跳转到详情页
	$('.goods-list').on('click','.pic',function(){
		var dataid = $(this).attr('dataid');
		setCookie('dataid',dataid);
		top.window.location = "detail.html";
	});
	//点击标题 跳转到详情页
	$('.goods-list').on('click','.title',function(){
		var dataid = $(this).attr('dataid');
		setCookie('dataid',dataid);
		top.window.location = "detail.html";
	});
	
	
	
	//分页	
	function fenye(){
		$(".page").jPages({
	      containerID: "splist",
	      perPage: 20,
	      previous: "上一页",
        next: "下一页 "
	    });
	}
	
	
	
	
	
	
	
	
})
