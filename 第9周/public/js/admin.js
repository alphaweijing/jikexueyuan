/*$(document).ready(function(){
	refreshNews();
	
})*/

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
	event.preventDefault();
	if(requireValue('newstype') && requireValue('newstitle') && requireValue('newsimg') && requireValue('newstime')){
		$.ajax({
			url: "/admin/insert",
			type: "post",
			data:{
				"type": htmlEncode($("#newstype").val()),
				"title": htmlEncode($("#newstitle").val()),
				"img": htmlEncode($("#newsimg").val()),
				"date": htmlEncode($("#newstime").val())
			},
			dataType: "json",
			success: function(data){
				refreshNews();
				$('#myModal').modal('show');
				$(".modal-body").html(data.msg);
			},
			error: function(){
			}

		});
	}
}
function refreshNews(){
	$.ajax({
		url: "/admin/select",
		type: "get",
		dataType: "json",
		success: function(data){
			$("#newstitle").val('');
			$("#newsimg").val('');
			$("#newstime").val('');
			$("#newstable tbody").empty();
			$.each(data,function (index,value){
				var tr=$("<tr>").appendTo($("#newstable tbody"));
				var newsid=$("<td>").appendTo(tr).text(index+1);
				var newstype=$("<td>").appendTo(tr).text(value.type);
				var newstitle=$("<td>").appendTo(tr).text(value.title);
				var newsimg=$("<td>").appendTo(tr).text(value.img);
				var newstime=$("<td>").appendTo(tr).text(moment(value.date).format("yyyy-MM-dd HH:mm:ss"));
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
			url: '/admin/update',
			type: 'post',
			data: {
				'id': id,
				"type": htmlEncode($("#newstype").val()),
				"title": htmlEncode($("#newstitle").val()),
				"img": htmlEncode($("#newsimg").val()),
				"date": htmlEncode($("#newstime").val())
			},
			dataType: 'json',
			success: function(data){
				refreshNews();	
				$('#myModal').modal('show');
				$(".modal-body").html(data.msg);
			}
		})
	}
}
function deleteNews(id){
	var flag = confirm("是否确认要删除这条新闻？");
	if(flag){
		$.ajax({
			url: '/admin/delete/'+id,
			type: 'post',
			dataType: 'json',
			success: function(data){
				refreshNews();	
				$('#myModal').modal('show');
				$(".modal-body").text(data.msg);
			},
			error: function(){
				console.log('error');
			}
		})
	}
}
function htmlEncode(str){
	if (str == null || ''==str) return str;
	var newStr='';
	var str = str.split('');
    for (var i = 0;i<str.length; i++) {
		switch (str[i]) {
	       case '&':
	           newStr+= "&amp;";
	           break;
	       case '<':
	           newStr+=  "&lt;";
	           break;
	       case '>':
	           newStr+=  "&gt;";
	           break;
	       case '"':
	           newStr+=  "&quot;";
	           break;
	       case ' ':
	       		newStr+=  "&nbsp;";
	       		break;
	       default:
	           newStr+=  str[i] + "";
	           break;
    	}
    }
    return newStr;
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

console.log(moment().format("YYYY-MM-DD HH:mm:ss"));

