define(["single","magnifying"], function(single, magnifying){
	function detail(){
		$.ajax({
			type:"get",
			url:"json/detail1.json",
			success: function(data){
				var arr = eval(data);
				var html = "";
				for(var i in arr){
					 html += '<li><img src="'+arr[i].img+'" /></li>';
				}
				$(".top-left").find(".small-img").find("ul").html(html);
				
				$(".top-left").find(".small-img").find("ul").find("li").click(function(){
					var i = $(this).index();
					
					$(this).addClass("active-img").siblings().removeClass("active-img");
					$(".top-left").find(".big-img").find("ul").find("li").eq(i).show().siblings().hide();
				})
			}
		});
		
		$.ajax({
			type:"get",
			url:"json/detail2.json",
			success: function(data){
				var arr = eval(data);
				var html = "";
				for(var i in arr){
					html += '<li id = "demo" ><div class = "small-box"><div class = "mark-box"></div><img src="'+arr[i].img+'" /><div class = "position-box"></div></div><div class = "big-box"><div class = "big-box-all"><img src="'+arr[i].img+'" /></div></div></li>';
				}
				$(".top-left").find(".big-img").find("ul").html(html);
				$(".top-left").find(".big-img").find("ul").find("li:eq(0)").css("display","block");
				magnifying.magnifying();
			}
		});
		$.ajax({
			type:"get",
			url:"json/detail3.json",
			success: function(data){
				var arr = eval(data);
				var html = "";
				for(var i in arr){
					html += '<div><img src="'+arr[i].img+'"  /></div>';
				}
				$(".main-mid").append(html);
			}
		});
		$(".design").find("li").click(function(){
			$(this).addClass("active-design").siblings().removeClass("active-design");
		})
		$(".color").find("li").click(function(){
			$(this).addClass("active-color").siblings().removeClass("active-color");
		})
		$(".size").find("li").click(function(){
			$(this).addClass("active-size").siblings().removeClass("active-size");
		})
		
		/*数量的加减*/
		$(".counts").find(".subtract").click(function(){
			var html = parseInt($(".counts").find(".num").html());
			
			if(html == 1){
	//			html = 1;
				$(this).attr("disabled", "disabled");
			}else{
				html--;
			}
			$(".counts").find(".num").html(html)
		})
		$(".counts").find(".sum").click(function(){
			var html = parseInt($(".counts").find(".num").html());
				html++
			$(".counts").find(".num").html(html);
		})

//			$(".main").on("click", "#nuw-buy", function(){
				single.single();
//			})
			
		
	}
	return {detail:detail};
})

