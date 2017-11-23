define(["login"], function(login){
	var single = function(){
		$("#now-buy").click(function(){
			var html = '<div class = "login"><div class = "logo"><div class = "logo-img"></div><h4>使用Smartisan ID 登录官网</h4></div><div class = "login-info"><form><ul><li><div class = "div1 account" id = "account"><span></span><input type = "text" id = "usename" placeholder="手机号/邮箱"  /><p id="hint">手机号/邮箱格式错误</p></div></li><li><div class = "div1 password"><span></span><input type = "password" id = "pass" placeholder="密码"  /><p id = "pass-hint">密码格式不对</p></div></li><li><div class = "remember"><p><span></span>自动登录</p><a href = "#" id = "forget">忘记密码？</a><a href = "register.html">注册Smartisan ID</a></div></li></ul><div class = "login-btn btn-primary"><a id =login_btn>登录</a></div><div class = "info-foot"><ul><li class = "first-li"><ul class = "login-three"><li>其他账号登录:</li><li class = "weixin"></li><li class = "weibo"></li><li class = "qq"></li></ul></li><li class = "inter-tell">国际手机号登录 ></li></ul></div></form></div></div><div id = "login-bg"></div>';
			
			$("#login").html(html);
			
			login.login();
		})
	}
	return {single:single};
})
