/* 中间导航部分 */
$(function(){
	$("#myfocus").click(function(){
		
		$(".nav-active").removeClass("nav-active")
		$(this).addClass("nav-active");
		$(".focus").show();
		$(".recom").hide();
		$(".mynav").hide();
		$(".myvideo").hide();
	})
	$("#myrecom").click(function(){
		$(".nav-active").removeClass("nav-active")
		$(this).addClass("nav-active");
		$(".focus").hide();
		$(".recom").show();
		$(".mynav").hide();
		$(".myvideo").hide();
		
	})
	$("#mynav").click(function(){
		$(".nav-active").removeClass("nav-active")
		$(this).addClass("nav-active");
		$(".focus").hide();
		$(".recom").hide();
		$(".mynav").show();
		$(".myvideo").hide();
		
	})
	$("#myvideo").click(function(){
		$(".nav-active").removeClass("nav-active")
		$(this).addClass("nav-active");
		$(".focus").hide();
		$(".recom").hide();
		$(".mynav").hide();
		$(".myvideo").show();
		
	})

	$(".pic-name").mouseenter(function(){
		var image_src = $(this).siblings().attr("src");
		$(".preview-box").css({"background": "url(" + image_src + ")","background-size": "cover"});
	})
	$(".pic-name").mouseleave(function(){
		var image_src = localStorage.skin;
		$(".preview-box").css({"background": "url(" + image_src + ")","background-size": "cover"});
	})
	$(".pic-name").click(function(){
		var image_src = $(this).siblings().attr("src");
		var storage=window.localStorage
		storage.skin = image_src;
		$(".preview-box").css({"background": "url(" + image_src + ")","background-size": "cover"});
		$(".background").css({"background":"url(" + image_src + ")","background-size": "cover"});
		$(".pic-name").siblings("div").removeClass("selected")
		$(this).siblings("div").addClass("selected");
	})
})