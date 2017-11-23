define(function(){
	var scroll = function(){
		$(window).on("scroll", function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop > 100){
				$("#topNav").slideDown(200);
			}else{
				$("#topNav").slideUp(1);
			}
		})
	}
	return {scroll:scroll}
})