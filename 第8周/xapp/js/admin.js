$(document).ready(function(){
	refreshNews();
	
})

function requireValue(id){
	if(''==$("#"+id).val() || "undefined"==$("#"+id).val()){
		$("#"+id).parent().addClass("has-error");
		$("#"+id).parent().removeClass("has-success");
		return false;
	}else{
		$("#"+id).parent().addClass("has-success");
		$("#"+id).parent().removeClass("has-error");
		return true;
	}
}
function addNews(){
	if(requireValue('newstype') && requireValue('newstitle') && requireValue('newsimg') && requireValue('newstime')){
		$.ajax({
			url: "insert.php",
			type: "post",
			data:{
				"type": $("#newstype").val(),
				"title": $("#newstitle").val(),
				"img": $("#newsimg").val(),
				"time": $("#newstime").val()
			},
			dataType: "json",
			success: function(data){
				$('#myModal').modal('show');
				$(".modal-body").html(data.msg);
				refreshNews();
			},
			error: function(){
			}

		});
	}
}
function refreshNews(){
	$.ajax({
		url: "select.php",
		type: "post",
		data: {"type":""},
		dataType: "json",
		success: function(data){
			$("#newstable tbody").empty();
			$.each(data,function (index,value){
				var tr=$("<tr>").appendTo($("#newstable tbody"));
				var newsid=$("<td>").appendTo(tr).html(index+1);
				var newstype=$("<td>").appendTo(tr).html(value.type);
				var newstitle=$("<td>").appendTo(tr).html(value.title);
				var newsimg=$("<td>").appendTo(tr).html(value.img);
				var newstime=$("<td>").appendTo(tr).html(value.time);
				var operation=$("<td>").appendTo(tr);
				var editnews=$("<button>").addClass("btn btn-primary btn-xs").appendTo(operation).html("编辑");
				editnews.attr("onclick","editNews('"+value.id+"',this)");
				var deletenews=$("<button>").addClass("btn btn-danger btn-xs").appendTo(operation).html("删除");
				deletenews.attr("onclick","deleteNews('"+value.id+"')");
			})
		},
		error: function(){
			console.log("error");
		}

	})
}
function editNews(id,obj){
	$("#newsPanel .panel-heading").text("修改新闻");
	$("#newsPanel #submit1").attr("onclick","updateNews('"+id+"')");
	console.log($(obj))
	var thisTrTd=$(obj).parent().parent().find('td');
	console.log(thisTrTd)
	$("#newstype").val(thisTrTd.eq(1).text());
	$("#newstitle").val(thisTrTd.eq(2).text());
	$("#newsimg").val(thisTrTd.eq(3).text());
	$("#newstime").val(thisTrTd.eq(4).text());
}
function updateNews(id){
	if(requireValue('newstype') && requireValue('newstitle') && requireValue('newsimg') && requireValue('newstime')){
		$.ajax({
			url: 'update.php',
			type: 'post',
			data: {
				'id': id,
				"type": $("#newstype").val(),
				"title": $("#newstitle").val(),
				"img": $("#newsimg").val(),
				"time": $("#newstime").val()
			},
			dataType: 'json',
			success: function(){
				refreshNews();	
				$('#myModal').modal('show');
				$(".modal-body").html(data.msg);
			}
		})
	}
}
function deleteNews(id){
	$.ajax({
		url: 'delete.php',
		type: 'post',
		data: {'id': id},
		dataType: 'json',
		success: function(data){
			refreshNews();	
			$('#myModal').modal('show');
			$(".modal-body").html(data.msg);
		},
		error: function(){
			console.log('error');
		}
	})
}