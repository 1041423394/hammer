define(function(){
	function login(){
		$("#usename").on("click", function(){
			$("#account").css("border-color", "#1E90FF");
			$("#usename").on("blur", function(){
				$("#account").css("border-color", "");
				var arr = $("#usename").val();
				if(arr.length == 0){
					$("#hint").css("opacity", "1").css("background-color", "#d16d62");
					$("#hint").html("请输入用户名");
				}
				for(var i = 0; i < arr.length; i++){
					if(arr[i] == "@"){
						var pattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
						if(pattern.test($("#usename").val())){
							$("#hint").css("opacity", "1").css("background-color", "limegreen");
							$("#hint").html("√");
						}else{
							$("#hint").css("opacity", "1").css("background-color", "#d16d62");
							$("#hint").html("手机号/邮箱格式错误");
						}
					}else if(arr[i] >= 0 && arr[i] <= 9){
						var pattern = /^1[3|4|5|7|8][0-9]{9}$/;
						if(pattern.test($("#usename").val())){
							$("#hint").css("opacity", "1").css("background-color", "limegreen");
							$("#hint").html("√");
						}else{
							$("#hint").css("opacity", "1");
							$("#hint").html("手机号/邮箱格式错误").css("background-color", "#d16d62");
						}
					}
				}
				
			})
		})
		$("#pass").on("click", function(){
					$(".password").css("border-color", "#1E90FF");
					$("#pass").on("blur", function(){
						$(".password").css("border-color", "");
						var arr = $("#pass").val();
						if(arr.length == 0){
							$("#pass-hint").css("opacity", "1");
							$("#pass-hint").html("请输入密码").css("background-color", "#d16d62");
						}
						for(var i = 0; i < arr.length; i++){
							
							if(arr[i]){
								var pattern = /^(?=.{6,16}$)(?![0-9]+$)(?!.*(.).*\1)[0-9a-zA-Z]+$/;
								if(pattern.test($("#pass").val())){
									$("#pass-hint").css("opacity", "1").css("background-color", "limegreen");
									$("#pass-hint").html("√");
								}else{
									$("#pass-hint").css("opacity", "1").css("background-color", "#d16d62");
									$("#pass-hint").html("密码格式不对");
								}
							}
						}
					})
				})
				var isYes = true;
				$(".remember").find("span").click(function(){
					if(!isYes){
						$(".remember").find("span").css("background-image", "images/bg2.png")
						.css("background-repeat", "no-repeat").css("background-position", "0 0");
						isYes = true;
					}else{
						$(".remember").find("span").css("background-image", "images/bg2.png")
						.css("background-repeat", "no-repeat").css("background-position", "0 -19px");
						isYes = false;
						
					}
				})
		$("#login_btn").click(function(){
			var arr = eval($.cookie("username"));
			for(var i in arr){
				if(arr[i].user == $("#usename").val()){
					alert("登录成功");
					/*$(window).attr("location", "index.html");
					location.href = "index.html";*/
				}else{
					alert("用户名或密码错误");
				}
			}
			
		})
	}
	return {login:login};
})
