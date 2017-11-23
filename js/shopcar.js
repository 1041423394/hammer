define(function(){
	var shopcar = function(){
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
		
		
		
		
	}
	return {shopcar:shopcar}
})