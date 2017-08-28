$(document).ready(function(){
	$(".navlist .list a").click(function(){
		$(".navlist .list a").removeClass("active");
		$(this).addClass("active")
		refreshNews($(this).text());
	})
	refreshNews('推荐');
})
function refreshNews(type){
	$.ajax({
		url: "select.php",
		type: "post",
		data: {"type":type},
		dataType: "json",
		success: function(data){
			$("#mainNews").empty();
			$.each(data,function (index,value){
				var box=$("<div>").addClass("newsbox").prependTo($("#mainNews"));
				var wrap=$("<div>").addClass("newswrap").appendTo(box);
				var newsimg=$("<div>").addClass("newsimg").appendTo(wrap);
				var img=$("<img>").attr("src","img/"+value.img).appendTo(newsimg).width('100%');
				var newsinfo=$("<div>").addClass("newsinfo").appendTo(wrap);
				var newstitle=$("<p>").addClass("newstitle").appendTo(newsinfo).html(value.title);
				var newstime=$("<p>").addClass("newstime").appendTo(newsinfo).html(value.time);
			})
		},
		error: function(){
			console.log("error");
		}

	})
}