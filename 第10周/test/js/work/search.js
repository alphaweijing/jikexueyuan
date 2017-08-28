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
	storage=window.localStorage;
	if(!storage.skin){
		storage.skin="img/119.jpg";
	}
	$(".background").css({"background":"url(" + storage.skin + ")","background-size": "cover"});
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





