/* 滚动时出现搜索框 */
$(function(){
	var s_height = $(".search").offset().top;
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		if (scrollTop > s_height){
			$(".hide-search").show();
		}else{
			$(".hide-search").hide();
		}
	})
})
/* 滚动出现返回顶部,点击返回顶部 */
$(function(){
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		if (scrollTop > 0){
			$(".back-top").show();
		}else{
			$(".back-top").hide();
		}
	})
})
$(".back").click(function(){
	$("html,body").animate({scrollTop:0},700);
})
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
})

/* 换肤 */
$("#ex-skin").click(function(){
	$(".skin").slideDown();
})
$(".retract").click(function(){
	$(".skin").slideUp();
})

$(".skin").blur(function(){
	$(".skin").slideUp();
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
	localStorage.skin = image_src;
	$(".preview-box").css({"background": "url(" + image_src + ")","background-size": "cover"});
	$(".background").css({"background":"url(" + image_src + ")","background-size": "cover"});
	$(".pic-name").siblings("div").removeClass("selected")
	$(this).siblings("div").addClass("selected");
})

