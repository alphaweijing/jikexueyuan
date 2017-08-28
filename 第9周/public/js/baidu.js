$(document).ready(function(){
	$(".navlist .list a").click(function(){
		$(".navlist .list a").removeClass("active");
		$(this).addClass("active")
		refreshNews($(this).text());
	})
	//refreshNews('推荐');
})
function refreshNews(type){
	$.ajax({
		url: "/news/"+type,
		type: "get",
		dataType: "json",
		success: function(data){
			$("#mainNews").empty();
			$.each(data,function (index,value){
				var box=$("<div>").addClass("newsbox").prependTo($("#mainNews"));
				var wrap=$("<div>").addClass("newswrap").appendTo(box);
				var newsimg=$("<div>").addClass("newsimg").appendTo(wrap);
				var img=$("<img>").attr("src","img/"+value.img).appendTo(newsimg).width('100%');
				var newsinfo=$("<div>").addClass("newsinfo").appendTo(wrap);
				var newstitle=$("<p>").addClass("newstitle").appendTo(newsinfo).text(value.title);
				var newstime=$("<p>").addClass("newstime").appendTo(newsinfo).text(moment(value.date).format("YYYY-MM-DD HH:mm:ss"));
			})
		},
		error: function(){
			console.log("error");
		}

	})
}




function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
 
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
 
  return [year, month, day].join('-');
}