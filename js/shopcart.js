define(function(){
	function shopcart(){
		if(!$.cookie("goods")){
				$(".cart-null").css("display", "block");
			}else{
				$(".cart-info").css("display", "block");
				$(".cart-bottom").css("display", "block");
			}
		/*判断cookie是否存在，加载不同购物车*/
		
		
		$.ajax({
		type:"get",
		url:"json/data.json",
		success: function(data){
			var arr = eval($.cookie("goods"));
			html = "";
			for(var i in arr){
				html += '<div class = "goods_desc"><div class = "choose"><span></span></div><div class = "goods_img"><img src="'+data[arr[i].id-1].img+'"  /></div><div class = "goods_title"><a href = "#">《索尼设计，塑造现代》</a><span>平装版</span></div><div class = "operation"><a class = "delete-btn">X</a></div><div class = "goods_operate"><div class = "goods-price font">￥ <span>259.00</span></div><div class = "numb"><div class = "select-num"><span class = "down add">-</span><span class = "value-num"><input type = "text" id = "txt" value = 1 /></span><span class = "up add">+</span></div></div><div class = "cost font">￥ <span>259.00</span></div></div></div>';
			}
			$(".cart-con").html(html);
			
	
	
	$(".goods_desc").delegate(".down","click", function(){
		var index = $(this).parents(".goods_desc").index();
		var oValue = parseInt($(".goods_desc").eq(index).find("#txt").val());
		var costHtml = parseInt($(".goods_desc").eq(index).find(".cost").find("span").html());
		var priceHtml = parseInt($(".goods_desc").eq(index).find(".goods-price").find("span").html());
		if(oValue == 1){
			$(this).attr("point-events", "none");
		}else{
			oValue--;
			costHtml = oValue * priceHtml;
		}
		$(".goods_desc").eq(index).find("#txt").val(oValue);
		$("#chosed-goods").html(oValue);
		$("#all-goods").html(oValue);
		$(".goods_desc").eq(index).find(".cost").find("span").html(costHtml+ ".00");
	})
	
	$(".goods_desc").delegate(".up","click", function(){
		var index = $(this).parents(".goods_desc").index();
		var oValue = parseInt($(".goods_desc").eq(index).find("#txt").val());
		var costHtml = parseInt($(".goods_desc").eq(index).find(".cost").find("span").html());
		var priceHtml = parseInt($(".goods_desc").eq(index).find(".goods-price").find("span").html());
		if(oValue >= 3){
			oValue = 3;
			$(this).attr("point-events", "none");
		}else{
			oValue++;
			$(".goods_desc").eq(index).find("#txt").val(oValue);
			costHtml = oValue * priceHtml;
			$("#chosed-goods").html(oValue);
			$("#all-goods").html(oValue);
			$(".goods_desc").eq(index).find(".cost").find("span").html(costHtml+ ".00");
		}
		
	})
	
			var isYes = true;
	$(".goods_desc").delegate(".choose span", "click", function(){
		if(!isYes){
			$(this).css("background-image", "images/bg2.png")
			.css("background-repeat", "no-repeat").css("background-position", "0 0");
			var html = parseInt($(".cost").eq($(this).parents(".goods_desc").index()).find("span").html());
			$(".all-money").html(html + ".00");
			isYes = true;
		}else{
			$(this).css("background-image", "images/bg2.png")
			.css("background-repeat", "no-repeat").css("background-position", "0 -19px");
			$(".all-money").html("0.00");
			isYes = false;
		}
	})
	$(".btn-span").click(function(){
			if(isYes){
				$(".btn-span").css("background-image", "images/bg2.png")
				.css("background-repeat", "no-repeat").css("background-position", "0 0");
				$(".choose").find("span").css("background-image", "images/bg2.png")
				.css("background-repeat", "no-repeat").css("background-position", "0 0");
				var oSize = $(".goods_desc").size();
				var allMoney = 0;
				var allGoods = 0;
				for(var i = 0; i < oSize; i++){
					var oCost = parseInt($(".goods_desc").eq(i).find(".cost").find("span").html());
					var oGoods = parseInt($(".goods_desc").eq(i).find("#txt").val());
					allMoney += oCost;
					allGoods += oGoods;
				}
				$(".all-money").html(allMoney + ".00");
				$("#all-goods").html(allGoods);
				isYes = false;
			
			}else{
				$(".btn-span").css("background-image", "images/bg2.png")
				.css("background-repeat", "no-repeat").css("background-position", "0 -19px");
				$(".choose").find("span").css("background-image", "images/bg2.png")
				.css("background-repeat", "no-repeat").css("background-position", "0 -19px");
				$(".all-money").html("0.00");
				
				
				isYes = true;
				
			}
			})
	
			$(".goods_desc").delegate(".delete-btn", "click",function(){
				var arr = eval($.cookie("goods"));
				var index = $(this).parents(".goods_desc").index();
				arr.splice(index, 1);
				var cookieStr = JSON.stringify(arr);
				$.cookie("goods", cookieStr, {expires: 7});
				$(this).parents(".goods_desc").eq(index).remove();
				
				/*$("#chosed-goods").html("0");
					$("#all-goods").html("0");
				$(".all-money").html("0.00");*/
			})
		}
	});
	}
	return {shopcart:shopcart}
})
	
	
	
	
	