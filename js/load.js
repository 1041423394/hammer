define(function(){
	var load = function(){
		$.ajax({
			type:"get",
			url:"json/bannerlist.json",
			success: function(data){
				var html = "";
				for(var i = 0; i < data.length; i++){
					html += '<li><img src="'+data[i].img+'" /><a href = "#"></a></li>';
				}
				$(".bannerlist ul").html(html);
			}
		});
	$.ajax({
		type:"get",
		url:"json/bbs.json",
		success: function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){
				html += '<li><div class = "content-bbs"><div class = "bbs-img"><img src="'+data[i].img+'"  /></div><h6>'+data[i].title+'</h6><p class = "desc">"'+data[i].desc+'"</p><p class = "read"><a href = "#">阅读全文 ></a></p></div><a href = "#" class = mark></a></li>';
			}
			$(".bbs ul").html(html);
		}
	});
	$.ajax({
		type:"get",
		url:"json/app.json",
		success: function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){
				html += '<li><div class = "app-info"><div class = "app-img"></div><div class = "info"><h6>'+data[i].title+'</h6><p><span>'+data[i].desc1+'</span><span>'+data[i].desc2+'</span></p></div><div class = "platform-app"><span></span><span></span></div></div><div class = "app-down"><div class = "qr-code"><img src="'+data[i].img+'"  /><h5>'+data[i].desc3+'</h5></div><h6><a href = "#">'+data[i].desc4+'</a></h6></div><a class = "mark"></a></li>';
			}
			$(".useApp ul").append(html);
		}
	});
	$.ajax({
		type:"get",
		url:"json/dynamic.json",
		success: function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){
				html += '<li><img src="'+data[i].img+'" /><a></a></li>';
			}
			$(".dynamic ul").html(html);
		}
	});
	}
	return {load:load}
})
