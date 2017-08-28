
var pageSize=24;
var totalNum=480;	//总的项目数量
var totalPage=20;	//总页数
$(function(){
	/*画页面及分页*/
	boxView();
	var pghtml="";
	for(i=1;i<=totalPage;i++){
		pghtml+="<li class='pagenum'>"+i+"</li>";
	}
	pghtml+="<li class='more'>...</li><li class='pgnext' onclick='pgNext(1)'>下一页</li>";
	pghtml+="<li class='pgnext' onclick='goPage("+totalPage+")'>末页</li>";
	pghtml+="<li class='pgtotal'>共 "+totalPage+" 页</li>";
	$(".pgnext").eq(1).after(pghtml);
	goPage(1);
	$(".pagenum").click(function(){
		var pageNum= $(this).text();
		goPage(pageNum);
	})
})

function goPage(pageNum){		//页面跳转
	var pageNum = parseInt(pageNum);
	var startNum = (parseInt(pageNum)-1)*pageSize+1;	//开始数量
	var endNum = (parseInt(pageNum)*pageSize)	//结束数量
		endNum =endNum>totalNum?totalNum:endNum;

	var lessondiv;
	if($(".course-box-wraper").length==0){
		lessondiv=$(".course-list-wraper");
	}else{
		lessondiv=$(".course-box-wraper");
	}
	for(i=1;i<=totalNum;i++){		//处理内容显示
		if(i>=startNum && i<=endNum){
			$(lessondiv).eq(i-1).css("display","block");
		}else{
			$(lessondiv).eq(i-1).css("display","none");
		}
	}
	for(i=1;i<=totalPage;i++){		//处理页码显示
		if((i>=pageNum-3) && (i<=pageNum+3)){
			
			$(".pagenum").eq(i-1).css("display","block");
		}else{
			$(".pagenum").eq(i-1).css("display","none");
		}
	}
	if(pageNum<4){
		for(i=pageNum+4;i<=7;i++){			
			$(".pagenum").eq(i-1).css("display","block");
		}
	}
	if((totalPage-pageNum+1)<4){
		$(".more").css("display","none");
		for(i=totalPage-6;i<=totalPage-4;i++){			
			$(".pagenum").eq(i-1).css("display","block");
			console.log(i);
		}
	}else{
		$(".more").css("display","block");
	}
	//首页、尾页时，首页、尾页、上一页、下一页显示
	if(pageNum==1){
		$(".pgnext").eq(0).addClass("pgempty");
		$(".pgnext").eq(1).addClass("pgempty");
	}else{
		$(".pgnext").eq(0).removeClass("pgempty");
		$(".pgnext").eq(1).removeClass("pgempty");
	}
	if(pageNum==totalPage){
		$(".pgnext").eq(2).addClass("pgempty");
		$(".pgnext").eq(3).addClass("pgempty");
	}else{
		$(".pgnext").eq(2).removeClass("pgempty");
		$(".pgnext").eq(3).removeClass("pgempty");
	}
	$(".pgtotal").text("共"+totalPage+"页");
	$("#pgNow").val(pageNum);
	$(".pagenum").removeClass("pgcurrent");
	$(".pagenum").eq(pageNum-1).addClass("pgcurrent");
	
}
function pgNext(num){
	var pageNum=parseInt($(".pgcurrent").text());
	if(num=="-1"){goPage(pageNum-1);}
	if(num=="1"){goPage(pageNum+1)}
}
$(".go").click(function(){
	var pageNum= parseInt($("#pgNow").val());
	goPage(pageNum)
})


function boxView(){
	var imghtml='';
	for(i=1;i<480;i++){
		imghtml+='<div class="course-box-wraper"><div class="course-box"><div class="course-jpg"><img src="img/'+(i%10)+'.jpg" class="lesson-pic" alt="简介DragonBoard 410c的开发环境">';
		imghtml+='<div class="lessonplay"><i class="playericon"></i></div></div><p class="course-name">简介DragonBoard 410c的开发环境</p>';
		imghtml+='<p class="course-detail">本课程主要介绍DragonBoard 410c的开发环境，APP开发推荐使用的软件。Android Studio的介绍和安装，git、adb';
		imghtml+='</p><div class="course-info"><div class="left-info"><p><i class="time-icon"></i>6课时 26分钟</p>';
		imghtml+='<p><i class="rank"></i>初级</p></div><div class="right-info"><p>2277人学习</p><p><i class="type"></i>';
		imghtml+='</p></div></div></div></div>'
	}
	$(".course-list").html('');
	$(".course-img").html(imghtml);
}

function listView(){
	var listHtml='<ul>';
	for (i=1;i<480;i++){
		listHtml+='<li class="course-list-wraper"><div class="lessonimg-box"><a href="//www.jikexueyuan.com/course/3753.html" target="_blank">';
		listHtml+='<img class="lessonimg" src="img/'+(i%10)+'.jpg" title="AWS云上数据库迁移" alt="AWS云上数据库迁移">';
		listHtml+='<div class="lessonplay"><i class="playericon"></i></div></a></div>';
		listHtml+='<div class="lesson-infor" style="height: 88px;"><h2 class="lesson-info-h2"><a href="//www.jikexueyuan.com/course/3753.html" target="_blank">AWS云上数据库迁移</a></h2>';
		listHtml+='<p class="course-detail">本课将向大家讲述数据库迁移到云的方法，数据库平台重构的可用选项，云上数据库迁移的最佳实践和注意事项，以及AWS数据库迁移工具（DMT）的使用方法。</p>';
		listHtml+='<div class="course-info"><div class="left-info"><span><i class="time-icon"></i>6课时 26分钟</span><span style="margin-left: 15px;"><i class="rank"></i>初级</span><span class="right-info">2277人学习</span>';
		listHtml+='</div></div></div></li>';
	}
	listHtml+='</ul';
	$(".course-img").html('');
	$(".course-list").html(listHtml);

}

function goTop(){
	$('html,body').animate({scrollTop:0},700);
}
function search(){
	$(".login-part .form").show();
	$(".login-part .search1").animate({left:"165px"},700)

}
$(".close").click(function(){
	$(".login-part .form").hide();
	$("#keywords").val('');
	$(".login-part .search1").css("left","870px");
})