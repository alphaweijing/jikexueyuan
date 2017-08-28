//oprt1 =[],
	//oprt2 =[],
	//cal,
	//cal1='',
var result='';
var keys = document.getElementsByClassName('keys'),
	number = document.getElementsByClassName('number'),
	clear = document.getElementsByClassName('clear'),
	opt = document.getElementsByClassName('opt'),
	baseopt = document.getElementsByClassName('base-opt'),
	// neg = document.getElementById('neg'),
	screen = document.getElementById('screen');
	// equal = document.getElementById('equal'),
	// backspace = document.getElementById('backspace'),
	// clears = document.getElementById('clears'),
	// clearall= document.getElementById('clearall')
	// plus= document.getElementById('plus')
	// minus= document.getElementById('minus')
	// mul= document.getElementById('mul')
	// division= document.getElementById('division');
screen.innerHTML = '0';
//设置按钮点击样式
for(i=0;i<number.length;i++){
	number[i].onmousedown=function(){
		this.setAttribute('style','background: -webkit-linear-gradient(#c1c3c8,#eaeaea);'+'background: -moz-linear-gradient(#c1c3c8,#eaeaea);'+'background: -ms-linear-gradient(#c1c3c8,#eaeaea);'+'filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#c1c3c8',endColorStr='#eaeaea',gradientType='0');');
	}
	number[i].onmouseup=function(){
		this.setAttribute('style','background: -webkit-linear-gradient(#eaeaea,#c1c3c8);'+'background: -moz-linear-gradient(#eaeaea,#c1c3c8);'+'background: -ms-linear-gradient(#eaeaea,#c1c3c8);'+'filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#eaeaea',endColorStr='#c1c3c8',gradientType='0');');
	}
}
for(i=0;i<clear.length;i++){
	clear[i].onmousedown=function(){
		this.setAttribute('style','background: -webkit-linear-gradient(#c1581a,#e78342);'+'background: -moz-linear-gradient(#c1581a,#e78342);'+'background: -ms-linear-gradient(#c1581a,#e78342);'+'filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#c1581a',endColorStr='#e78342',gradientType='0');');
	};
	clear[i].onmouseup=function(){
		this.setAttribute('style','background: -webkit-linear-gradient(#e78342,#c1581a);'+'background: -moz-linear-gradient(#e78342,#c1581a);'+'background: -ms-linear-gradient(#e78342,#c1581a);'+'filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#e78342',endColorStr='#c1581a',gradientType='0');');
	};
}
for(i=0;i<opt.length;i++){
	opt[i].onmousedown=function(){
		this.setAttribute('style','background: -webkit-linear-gradient(#303030,#4c4c4c);'+'background: -moz-linear-gradient(#303030,#4c4c4c);'+'background: -ms-linear-gradient(#303030,#4c4c4c);'+'filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#303030',endColorStr='#4c4c4c',gradientType='0');');
	};
	opt[i].onmouseup=function(){
		this.setAttribute('style','background: -webkit-linear-gradient(#4c4c4c,#303030);'+'background: -moz-linear-gradient(#4c4c4c,#303030);'+'background: -ms-linear-gradient(#4c4c4c,#303030);'+'filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#4c4c4c',endColorStr='#303030',gradientType='0');');
	};
}
for(i=0;i<baseopt.length;i++){
	baseopt[i].onmousedown=function(){
		this.setAttribute('style','background: -webkit-linear-gradient(#747f84,#979b9f);'+'background: -moz-linear-gradient(#747f84,#979b9f);'+'background: -ms-linear-gradient(#747f84,#979b9f);'+'filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#747f84',endColorStr='#979b9f',gradientType='0');');
	};
	baseopt[i].onmouseup=function(){
		this.setAttribute('style','background: -webkit-linear-gradient(#979b9f,#747f84);'+'background: -moz-linear-gradient(#979b9f,#747f84);'+'background: -ms-linear-gradient(#979b9f,#747f84);'+'filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#979b9f',endColorStr='#747f84',gradientType='0');');
	};
}
// //清楚全部
// clearall.onclick=function(){
// 	oprt1.splice(0,oprt1.length);
// 	oprt2.splice(0,oprt2.length);
// 	cal1='';
// 	result='';
// 	screen.innerHTML='0';
// }
// //清屏
// clears.onclick=function(){
// 	if (oprt1.join('')==screen.innerHTML){
// 		oprt1.splice(0,oprt1.length)
// 	}
// 	else if (oprt2.join('')==screen.innerHTML){
// 		oprt2.splice(0,oprt2.length)
// 	}
// 	else{
// 		cal='';
// 	}
// 	screen.innerHTML='0';
// }
// //退格
// backspace.onclick=function(){
// 	if (oprt1.join('')==screen.innerHTML){
// 		oprt1.pop();
// 		screen.innerHTML=oprt1.join('')
// 	}
// 	else if (oprt2.join('')==screen.innerHTML){
// 		oprt2.pop();
// 		screen.innerHTML=oprt2.join('')
// 	}
// 	else{

// 	}
// }

// screen.innerHTML='0';

// //存储操作符
// for(i=0;i<opt.length;i++){
// 	opt[i].onclick=function()
// 	{
// 		cal=this.innerHTML;
// 		switch(true){
// 			case cal=='+/-':
// 				if (Number(oprt1.join(''))){
// 					oprt1.unshift('-');
// 				}
// 				else{
// 					oprt1.shift();
// 				}
// 				screen.innerHTML=oprt1.join('');
// 			case cal=='1/x':
// 				result=1/Number(oprt1.join(''));
// 				screen.innerHTML=result;
// 				break;
// 			case cal== '%':
// 				result=Number(oprt1.join(''))/100;
// 				screen.innerHTML=result;
// 				break;
// 			case cal== '√':
// 				result=Math.sqrt(Number(oprt1.join('')));
// 				screen.innerHTML=result;
// 				break;
// 			case cal== 'sin':
// 				result=Math.sin(Number(oprt1.join('')));
// 				screen.innerHTML=result;
// 				break;
// 			default:
// 				result=Math.cos(Number(oprt1.join('')));
// 				screen.innerHTML=result;
// 				break;
// 		}
		
// 	}
// }
// for(i=0;i<baseopt.length;i++){
// 	baseopt[i].onclick=function()
// 	{
// 		cal1=this.innerHTML;
// 	}
// }

// for(i=0;i<number.length;i++){
// 	number[i].onclick=function()
// 	{
// 	if (cal1.length>0){     //存储操作数2
	
// 			switch(true){
// 				case this.innerHTML=='=':
// 					switch(true){
// 						case cal1=='+':
// 							result=Number(oprt1.join(''))+Number(oprt2.join(''));
// 							break;
// 						case cal1=='-':
// 							result=Number(oprt1.join(''))-Number(oprt2.join(''));
// 							break;
// 						case cal1=='x':
// 							result=Number(oprt1.join(''))*Number(oprt2.join(''));
// 							break;
// 						default:
// 							result=Number(oprt1.join(''))/Number(oprt2.join(''));
// 							break;
// 					}
// 					screen.innerHTML=result;
// 					break;
// 				case this.textContent == '0'&& oprt2[0] =='0':
// 					screen.innerHTML=oprt2.join('');
// 					break;
// 				case this.innerHTML !='0'&& oprt2[0] =='0':
// 					oprt2[0]=this.innerHTML;
// 					screen.innerHTML=oprt2.join('');
// 					break;
// 				default:
// 					oprt2.push(this.innerHTML);
// 					screen.innerHTML=oprt2.join('');
// 			}
// 	}
// 	else{        //存储操作数1
	
// 		switch(true){
// 			case this.innerHTML=='=':
// 			result=Number(oprt1.join(''))+cal1+Number(oprt2.join(''));
// 			screen.innerHTML=result;
// 			break;
// 			case this.textContent == '0'&& oprt1[0] =='0':
// 			screen.innerHTML=oprt1.join('');
// 			break;
// 			case this.innerHTML !='0'&& oprt1[0] =='0':
// 			oprt1[0]=this.innerHTML;
// 			screen.innerHTML=oprt1.join('');
// 			break;
// 			default:
// 			oprt1.push(this.innerHTML);
// 			screen.innerHTML=oprt1.join('');
// 		}
// 	}
// }
// }
var queue = [];								//存放点击值得队列数组
var point = '',								//小数点标示符
	index = '';								//+-x/位置标识
for (var i = keys.length - 1; i >= 0; i--) {
	keys[i].onclick = function(){
		var content = this.innerHTML;
		switch(true){    					//进行点击按钮的分类
			case content=='=': 				//点击等于号
				if (index < queue.length-1 && index > 0){
					var op1 = Number(queue.slice(0,index).join(''));
					var op2 = Number(queue.slice(index+1).join(''));
					var cal = queue[index];
					switch(true){
						case cal == '+':
							result = op1+op2;
							break;
						case cal == '-':
							result = op1-op2;
							break;
						case cal == 'x':
							result = op1*op2;
							break;
						case cal == '÷':
							result = op1/op2;
							break;
						default:
							break;
					}
					queue.splice(0);
					queue.push(result);
					index = '';
					point = '';
					if (result.toString().length >8){
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
				}
			case content=='+/-': 						//点击正负号
				if (index < queue.length-1 && index > 0){
					if (queue[index+1] == '-'){
						queue.splice(index+1,1)
					}
					else{
						queue.splice(index+1,0,'-')
					}
					screen.innerHTML = queue.slice(index+1).join('');
				}else if (index == '' && queue.length > 0) {
					if (queue[0] == '-'){
						queue.splice(0,1)
					}
					else{
						queue.splice(0,0,'-')
					}
					screen.innerHTML = queue.join('');
				}
				
				break;
			case content=='1/x': 						//点击倒数
				if (index == '' && queue.length > 0){
					var op1 = Number(queue.slice(0).join(''));
					result = 1/op1;
					queue.splice(0,queue.length);
					queue.push(result);
					screen.innerHTML = result;
				}
				break;
			case content=='%': 							//点击百分号
				if (index == '' && queue.length > 0){
					var op1 = Number(queue.slice(0).join(''));
					result = op1/100;
					queue.splice(0,queue.length);
					queue.push(result);
					screen.innerHTML = result;
				}
				break;
			case content=='√': 						//点击根号
				if (index == '' && queue.length > 0){
					var op1 = Number(queue.slice(0).join(''));
					result = Math.sqrt(op1);
					queue.splice(0,queue.length);
					queue.push(result);
					screen.innerHTML = result;
				}
				break;
			case content=='sin': 						//点击sin
				if (index == '' && queue.length > 0){
					var op1 = Number(queue.slice(0).join(''));
					result = Math.sin(op1);
					queue.splice(0,queue.length);
					queue.push(result);
					screen.innerHTML = result;
				}
				break;
			case content=='cos': 						//点击cos
				if (index == '' && queue.length > 0){
					var op1 = Number(queue.slice(0).join(''));
					result = Math.cos(op1);
					queue.splice(0,queue.length);
					queue.push(result);
					screen.innerHTML = result;
				}
				break;
			case content=='+': 							//点击加号
				if (index < queue.length-1 && index > 0){
					var op1 = Number(queue.slice(0,index).join(''));
					var op2 = Number(queue.slice(index+1).join(''));
					result = op1+op2;
					queue.splice(0,queue.length);
					queue.push(result);
					point = '';
					index = queue.push(content)-1;
					if (result.toString().length >8){
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
				}
				else if (index == '' && queue.length > 0){
					index = queue.push(content)-1;
				}
				break;
			case content=='-': 							//点击减号
				if (index < queue.length-1 && index > 0){
					var op1 = Number(queue.slice(0,index).join(''));
					var op2 = Number(queue.slice(index+1).join(''));
					result = op1-op2;
					queue.splice(0,queue.length);
					queue.push(result);
					point = '';
					index = queue.push(content)-1;
					if (result.toString().length >8){
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
				}
				else if (index == '' && queue.length > 0){
					index = queue.push(content)-1;
				}
				break;
			case content=='x': 						//点击乘号
				if (index < queue.length-1 && index > 0){
					var op1 = Number(queue.slice(0,index).join(''));
					var op2 = Number(queue.slice(index+1).join(''));
					result = op1*op2;
					queue.splice(0,queue.length);
					queue.push(result);
					point = '';
					index = queue.push(content)-1;
					if (result.toString().length >8){
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
				}
				else if (index == '' && queue.length > 0){
					index = queue.push(content)-1;
				}
				break;
			case content=='÷': 						//点击除号
				if (index < queue.length-1 && index > 0){
					var op1 = Number(queue.slice(0,index).join(''));
					var op2 = Number(queue.slice(index+1).join(''));
					result = op1/op2;
					queue.splice(0,queue.length);
					queue.push(result);
					point = '';
					index = queue.push(content)-1;
					if (result.toString().length >8){
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
				}
				else if (index == '' && queue.length > 0){
					index = queue.push(content)-1;
				}
				break;
			case content=='.': 						//点击小数点
				if (index){
					if (point<=index && queue[queue.length-1] >= 0){
						queue.push(content);
						point = index +1;
					}
					screen.innerHTML = queue.slice(index+1).join('');
				}
				else{
					if (point){

					}
					else if (queue[queue.length-1] >= 0){
						queue.push(content);
						point = 1;
					}
					screen.innerHTML = queue.join('');
				}
				
				break;
			case Number(content) >=0 : 				//点击数字键
				if (result != '' && index == ''){
					queue.splice(0);
					result = '';
				}
				if (index){
					if (queue[index+1] != '0' && queue.slice(index+1).length< 9) {
						queue.push(content);
						screen.innerHTML = queue.slice(index+1).join('');
					}
					else if (queue[index+2] == '.' && queue.slice(index+1).length< 9) {
						queue.push(content);
						screen.innerHTML = queue.slice(index+1).join('');
					}
				}
				else{
					if (queue[0] != '0' && queue.length< 9) {
						queue.push(content);
						screen.innerHTML = queue.join('');
					}
					else if (queue[1] == '.' && queue.length< 9) {
						queue.push(content);
						screen.innerHTML = queue.join('');
					}
				}
				break;
			case content == "全清": 					//全部清除数据
				queue.splice(0);
				index = '';
				point = '';
				result= '';
				screen.innerHTML='0';
				break;
			case content == "清屏": 					//清除屏幕数据
				if (index < queue.length-1 && index > 0){
					queue.splice(index+1);
				}
				else{
					queue.splice(0);
				}
				screen.innerHTML='0';
				break;

			case content =="X" : 					//退格
				if (index < queue.length-1 && index > 0){
					queue.pop();
					screen.innerHTML=queue.slice(index+1).join('');
				}
				else if (index == '' && queue.length>0){
					queue.pop();
					screen.innerHTML=queue.join('');
				}
				else{
					queue.pop();
				}
				break;
			default:
				break;
		}

	}
}
