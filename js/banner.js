define(function(){
	var banner = function(){
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
				
			
			
		function showIndex(i){
			$("#banner-ul li").eq(i).animate({opacity: 1}, 1000).css({"z-index": "1"})
			.siblings().animate({opacity: 0},1000).css({"z-index": "0"});
			$("#banner-ol li").eq(i).addClass("active").siblings().removeClass("active");
		}
		$(".goodsli").find(".tabImg").find("a").on("click", function(){
		var parent = $(this).closest(".goodsli");
		var index = $(this).index();
		$(this).addClass("active-a").siblings().removeClass("active-a");
		
		parent.find(".hot-img").find("img").eq(index).show().siblings().hide();
		
	})
	}
	return {banner:banner};
})