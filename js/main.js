require.config({
	paths:{
		"jquery": "jquery-1.10.1.min",
		"scroll": "scroll",
		"banner": "banner",
		"shopcar": "shopcar",
		"cookie": "jquery.cookie",
		"load": "load",
		"shopcart": "shopcart",
		"detail": "detail",
		"login": "login",
		"register": "register",
		"magnifying": "magnifying",
		"single": "single"
		
	}
})
require(["jquery","scroll"], function($, scroll){
	scroll.scroll();
})
require(["jquery", "banner"], function($, banner){
	banner.banner()
})
require(["jquery","cookie", "shopcar"], function($, $, shopcar){
	shopcar.shopcar();
})
require(["jquery", "load"], function($, load){
	load.load();
})

require(["jquery", "cookie", "shopcart"], function($, $, shopcart){
	shopcart.shopcart();
})
require(["jquery", "cookie", "shopcart", "login", "detail"], function($, chhkie, shopcart, login, detail){
	detail.detail();
})
require(["jquery","load","login"], function($, load, login){
	login.login();
})
require(["jquery", "cookie", "register"], function($, $, register){
	register.register();
})
require(["jquery", "magnifying"], function($, magnifying){
	magnifying.magnifying();
})

require(["jquery","cookie", "single"],function($, $, single){
	single.single();
})




