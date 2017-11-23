define(function(){
	function magnifying(){
		$(".mark-box").mouseover(function(){
			$(".position-box").css("display", "block");
			$(".big-box").css("display", "block");
		})
		$(".mark-box").mouseout(function(){
			$(".position-box").css("display", "none");
			$(".big-box").css("display", "none");
		})
		$(".mark-box").mousemove(function(ev){
			var left = ev.offsetX - $(".position-box").width()/2;
			var top = ev.offsetY - $(".position-box").height()/2;
			if(left < 0){
				left = 0;
			}else if(left > $(".small-box").width() - $(".position-box").width()){
				left = $(".small-box").width() - $(".position-box").width();
			}
			$(".position-box").css("left", left + "px");
			
			if(top < 0){
				top = 0
			}else if(top > $(".small-box").height() - $(".position-box").height()){
				top = $(".small-box").height() - $(".position-box").height()
			}
			$(".position-box").css("top", top + "px");
			
			var proportionX = left/($(".small-box").width() - $(".position-box").width());
			var proportionY = top/($(".small-box").height() - $(".position-box").height());
			
			$(".big-box-all").css("left", -proportionX * ($(".big-box-all").width()-$(".big-box").width()) + "px");
			$(".big-box-all").css("top", -proportionY * ($(".big-box-all").height()-$(".big-box").height()) + "px");
		})
	}
	return {magnifying:magnifying};
})