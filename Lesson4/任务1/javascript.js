
$(function(){
	
	var i=0;
	var clone=$(".picbox .picture a").first().clone();
	$(".picbox .picture").append(clone);
	var size=$(".picbox .picture a").size();
	
	
	
	$(".picbox .pic-active i").hover(function(){
		var index=$(".pic .pic-active i").index();
		i=index;
		$(".picbox .picture").stop().animate({left:-index*560},500)
		$(".pic .pic-active i").addClass("active").siblings().removeClass("active")
	})
	
	var t=setInterval(function(){
		i++;
		move()
	},2000)

	$(".picbox").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			i++;
			move()
		},2000)
	}) 
	
	
	
	$(".picbox .pre").click(function(){
		i++
		move();
	})
	$(".picbox .next").click(function(){
		i--
		move();
	})

	function move(){
		if(i==size){
			$(".picbox .picture").css({left:0})
			i=1;
		}
		if(i==-1){
			$(".picbox .picture").css({left:-(size-1)*560})
			i=size-2;
		}
		$(".picbox .picture").stop().animate({left:-i*560},500)
		if(i==size-1){
			$(".picbox .pic-active i").eq(0).addClass("active").siblings().removeClass("active")
		}else{
			$(".picbox .pic-active i").eq(i).addClass("active").siblings().removeClass("active")
		}
		
	}
})


