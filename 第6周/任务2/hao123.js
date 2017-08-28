
var green = document.getElementById('green'),
	orange = document.getElementById('orange'),
	items = document.getElementsByClassName('items'),
	blue = document.getElementsByClassName('blue');

if (window.localStorage.color) 					//是否有上次的主题颜色，若有则为上次主题颜色，无则默认
{
	var color = window.localStorage.color
	for (i=0;i<items.length;i++) {
		items[i].style.backgroundColor = color;
	}
	for (i=0;i<blue.length;i++) {
		blue[i].style.color = color;
	}
}
/**
*	根据参数改变导航条颜色
*	参数'color’ 可以为rgb值或者#123456形式
*	无返回值
*/
function changeColor(color) {
	for (i=0;i<items.length;i++) {
		items[i].style.backgroundColor = color;
	}
	for (i=0;i<blue.length;i++) {
		blue[i].style.color = color;
	}
}
green.onclick = function(){
	changeColor('#07ac72');
	window.localStorage.color = '#07ac72';
}
orange.onclick = function(){
	changeColor('#f50');
	window.localStorage.color = '#f50';
}
/* green.onclick = function(){
	for (i=0;i<items.length;i++) 
	{
		items[i].setAttribute('style','background:#07ac72');
	}
	for (i=0;i<blue.length;i++) {
		blue[i].setAttribute('style','color:#07ac72');
	}
	window.localStorage.color = '#07ac72';
}
orange.onclick = function(){
	for (i=0;i<items.length;i++) {
	items[i].setAttribute('style','background:#f50');
	}
	for (i=0;i<blue.length;i++) {
		blue[i].setAttribute('style','color:#f50');
	}
	window.localStorage.color = '#f50';
} */ 