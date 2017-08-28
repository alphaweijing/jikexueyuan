/* 换肤 */
/*$("#ex-skin").click(function(){
	$(".skin").slideDown();
})*/
$(".retract").click(function(){
	$(".skin").slideUp();
})

$("#ex-skin").on("click", function(e){
    $(".skin").slideDown();

    $(document).one("click", function(){
        $(".skin").slideUp();
    });

    e.stopPropagation();
});
$(".skin").on("click", function(e){
    e.stopPropagation();
});

$(document).on('click',function(){
	$(".skin").slideUp();
})