define(function(){
	function skipcart(){
		$(".shop-car").on("click", ".skipcart", function(){
			if($(".num-car").html() == 0){
				$(".cart-null").css("display", "block");
			}else{
				$(".cart-info").css("display", "block");
				$(".cart-bottom").css("display", "block");
			}
		})
	}
	return {skipcart:skipcart};
})
