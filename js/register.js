define(function(){
	function register(){
		$("#iphone").on("click", function(){
					$("#iphone").on("blur", function(){
						var pattern = /^1[3|4|5|7|8][0-9]{9}$/;
						if(!pattern.test($("#iphone").val())){
							$("#tellphone").css("opacity", "1");
							$("#tellphone").html("手机号格式错误");
						}
					})
				})
				
				$("#pass").on("click", function(){
//					$(".password").css("border-color", "#1E90FF");
					$("#pass").on("blur", function(){
//						$(".password").css("border-color", "");
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
				
				$("#pass-again").on("click",function(){
					$("#pass-again").on("blur", function(){
						if($("#pass-again").val() != $("#pass").val()){
							$("#passagain-hint").css("opacity", "1").css("background-color", "#d16d62");
							$("#passagain-hint").html("与第一次输入密码不符");
						}else{
							$("#passagain-hint").css("opacity", "1").css("background-color", "limegreen");
							$("#passagain-hint").html("√");
						}
					})
				})
				
				var isYes = true;
				$("#agree").click(function(){
					if(!isYes){
						$("#agree").css("background-image", "images/bg2.png")
						.css("background-repeat", "no-repeat").css("background-position", "0 -19px");
						isYes = true;
					}else{
						$("#agree").css("background-image", "images/bg2.png")
						.css("background-repeat", "no-repeat").css("background-position", "0 0");
						isYes = false;
					}
				})
				
				
				$("#register-btn").click(function(){
					var user = $("#iphone").val();
					var pwd = $("#pass").val();
					var first = $.cookie("username") == null ? true : false;
					if(first){
						$.cookie("username", '[{"user":"' + user + '","password":"' + pwd + '"}]', {
							expires: 7
						});
						alert("恭喜，成功注册!!!");
						window.location.href = "index.html";
					}else{
						var str = $.cookie("username");
						alert(str);
						var arr = eval(str);
						var same = false; //代表是否有相同用户名
						
						//遍历所有的对象，判断是否id相同
						for(var i in arr){
							if(arr[i].user == user){
								alert("您已注册，请登录");
								same = true;
								/*window.location.href = "login.html";*/
								break;
							}
			
						}
						//没有相同的
						if(!same){
							var obj = {user: user, password:pwd};
								arr.push(obj);
								var cookieStr = JSON.stringify(arr);
								$.cookie("username", cookieStr, {
									expires: 7
								});
								alert("注册成功，请登录");
								/*window.location.href = "index.html";*/
						}
					}
					console.log($.cookie("username"));
					
				
				});
	}
	return {register:register};
})