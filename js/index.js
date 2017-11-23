
	$(window).on("scroll", function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 100){
		/*$("#topNav").css("display", "block");*/
			$("#topNav").slideDown(200);
		}else{
			/*$("#topNav").css("display", "none");*/
			$("#topNav").slideUp(1);
		}
	})
/*以上是头部导航*/

$(function(){
	var index = 0;
	var maximg = 3;
				
	$("#banner-ol li").hover(function(){
		if(setTime){
						
			clearInterval(setTime);
		}
		index = $("#banner-ol li").index(this);
					
		setTime = setTimeout(function(){
			showIndex(index);
			$("#banner-ul").stop();
		}, 400)
	}, function(){
		clearInterval(setTime);
		setTime = setInterval(function(){
			showIndex(index);
			index++;
			if(index == maximg){
				index = 0;
			}
		}, 400)
	});
				
	$("#banner-ul").hover(function(){
					
		if(setTime){
			clearInterval(setTime);
		}
					
	}, function(){
		setTime = setInterval(function(){
			showIndex(index);
			index++;
			if(index == maximg){
				index = 0;
			}
		} , 3000);
		})
		var setTime = setInterval(function(){
			showIndex(index);
			index++;
			if(index == maximg){
				index = 0;
			}
		} , 3000);
		
})		
		
function showIndex(i){
	$("#banner-ul li").eq(i).animate({opacity: 1}, 1000).css({"z-index": "1"})
	.siblings().animate({opacity: 0},1000).css({"z-index": "0"});
	$("#banner-ol li").eq(i).addClass("active").siblings().removeClass("active");
}
/*以上是banner轮播图*/
$(function(){
	$(".goodsli").find(".tabImg").find("a").on("click", function(){
		var parent = $(this).closest(".goodsli");
		var index = $(this).index();
		$(this).addClass("active-a").siblings().removeClass("active-a");
		
		parent.find(".hot-img").find("img").eq(index).show().siblings().hide();
		
	})
	/*以上是图片切换*/
	car_num();
	$.ajax({
		method: "get",
		url: "json/data.json",
		success: function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){
				
				html += '<li><div><img src="'+data[i].img+'"  /><h3>'+data[i].desc1+'</h3><h6>'+data[i].desc2+'</h6><h5></h5><p class = "price"><i>'+data[i].identify+'</i><span>'+data[i].price+'</span></p><ul class = "showcar"><li class = "look"><a href = "detail.html">查看详情</a></li><li class = "pushcar btncar" id="'+data[i].id+'">加入购物车</li></ul><a></a></div></li>';
			}		
			$("#official").append(html);
		}
	})
	$.ajax({
		method: "get",
		url: "json/data1.json",
		success: function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){
				
				html += '<li><div><img src="'+data[i].img+'"  /><h3>'+data[i].desc1+'</h3><h6>'+data[i].desc2+'</h6><h5></h5><p class = "price"><i>'+data[i].identify+'</i><span>'+data[i].price+'</span></p><ul class = "showcar"><li class = "look"><a href = "detail.html">查看详情</a></li><li class = "pushcar btncar" id="'+data[i].id+'">加入购物车</li></ul><a></a></div></li>';
			}		
			$("#brand").append(html);
			}
		})
	
	$(".goods-push").on("click",".btncar", function(e){
//		alert(1);
		var id = this.id;
//		alert(id)
		var first = $.cookie("goods") == null ? true : false;
		if(first){
			$.cookie("goods", '[{id:' + id + ',num:1}]', {expires: 7});
		}else{
			var cookieStr = $.cookie("goods");
			var arr = eval(cookieStr);
			var isYes = false;
			for(var i in arr){
				if(arr[i].id == id){
					arr[i].num++;
					$.cookie("goods", JSON.stringify(arr), {expires: 7});
					isYes = true;
					break;
				}
			}
			if(!isYes){
				var obj = {id:id, num:1};
				arr.push(obj);
				$.cookie("goods",JSON.stringify(arr), {expires: 7});
			}
			
			
		}
		car_num();
//		alert($.cookie("goods"));
		return false;
	})
	$(".shop-car").hover(function(){
		if($(".num-car").html() == 0){
			$(".shopCar").css("display", "block");
		}else{
			$(".showCar").css("display", "block");
			car_msg();
		}
	}, function(){
		$(".shopCar").css("display", "none");
		$(".showCar").css("display", "none");
	})
	function car_num(){
		var carNum = $.cookie("goods");
		if(carNum){
			var arr = eval(carNum);
			var car_num = 0;
			for(var i in arr){
				car_num = car_num + Number(arr[i].num);
			}
			$(".num-car").html(car_num);
		}
	}
	
	function car_msg(){
		$.ajax({
			type:"get",
			url:"json/data.json",
			success: function(data){
				var car_arr = eval($.cookie("goods"));
				var html = "";
				for(var i in car_arr){
					html += '<li><p class= "p-img"><img src = "'+data[car_arr[i].id-1].img+'" /></p><div class = "right-desc"><h3>Smartisan 半入耳式线控耳机</h3><p>白色</p><div><p class= "p1"><i>'+data[i].identify+'</i><span>'+data[i].price+'</span></p><p class= "p2">X</p><p class= "p3">'+car_arr[i].num+'</p></div></div><p class = "delete">X</p></li>';
				}
				$(".showCar ul").html(html);
			}
		});
	}
})


			













