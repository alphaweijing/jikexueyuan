
var green = document.getElementById('green'),
	orange = document.getElementById('orange'),
	items = document.getElementsByClassName('items'),
	blue = document.getElementsByClassName('blue');

if (window.localStorage.color) 					//�Ƿ����ϴε�������ɫ��������Ϊ�ϴ�������ɫ������Ĭ��
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
*	���ݲ����ı䵼������ɫ
*	����'color�� ����Ϊrgbֵ����#123456��ʽ
*	�޷���ֵ
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