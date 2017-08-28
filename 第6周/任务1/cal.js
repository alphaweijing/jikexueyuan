//oprt1 =[],
	//oprt2 =[],
	//cal,
	//cal1='',
if(!document.getElementsByClassName){                         //ie 不支持getelementsbyclassname
        document.getElementsByClassName = function(className, element){  
            var children = (element || document).getElementsByTagName('*');  
            var elements = new Array();  
            for (var i=0; i<children.length; i++){  
                var child = children[i];  
                var classNames = child.className.split(' ');  
                for (var j=0; j<classNames.length; j++){  
                    if (classNames[j] == className){   
                        elements.push(child);  
                        break;  
                    }  
                }  
            }   
            return elements;  
        };  
    }
var result='';
var keys = document.getElementsByClassName('keys'),
	number = document.getElementsByClassName('number'),
	clear = document.getElementsByClassName('clear'),
	opt = document.getElementsByClassName('opt'),
	baseopt = document.getElementsByClassName('base-opt'),
	// neg = document.getElementById('neg'),
	screen = document.getElementById('screen');

screen.innerHTML = '0';
//设置按钮点击样式
for(i=0;i<number.length;i++){
	number[i].onmousedown=function(){
		this.setAttribute('style','background: -webkit-linear-gradient(#c1c3c8,#eaeaea);'+'background: -moz-linear-gradient(#c1c3c8,#eaeaea);'+'background: -ms-linear-gradient(#c1c3c8,#eaeaea);');
	}
	number[i].onmouseup=function(){
		this.setAttribute('style','background: -webkit-linear-gradient(#eaeaea,#c1c3c8);'+'background: -moz-linear-gradient(#eaeaea,#c1c3c8);'+'background: -ms-linear-gradient(#eaeaea,#c1c3c8);');
	}
}
for(i=0;i<clear.length;i++){
	clear[i].onmousedown=function(){
		this.setAttribute('style','background: -webkit-linear-gradient(#c1581a,#e78342);'+'background: -moz-linear-gradient(#c1581a,#e78342);'+'background: -ms-linear-gradient(#c1581a,#e78342);');
	};
	clear[i].onmouseup=function(){
		this.setAttribute('style','background: -webkit-linear-gradient(#e78342,#c1581a);'+'background: -moz-linear-gradient(#e78342,#c1581a);'+'background: -ms-linear-gradient(#e78342,#c1581a);');
	};
}
for(i=0;i<opt.length;i++){
	opt[i].onmousedown=function(){
		this.setAttribute('style','background: -webkit-linear-gradient(#303030,#4c4c4c);'+'background: -moz-linear-gradient(#303030,#4c4c4c);'+'background: -ms-linear-gradient(#303030,#4c4c4c);');
	};
	opt[i].onmouseup=function(){
		this.setAttribute('style','background: -webkit-linear-gradient(#4c4c4c,#303030);'+'background: -moz-linear-gradient(#4c4c4c,#303030);'+'background: -ms-linear-gradient(#4c4c4c,#303030);');
	};
}
for(i=0;i<baseopt.length;i++){
	baseopt[i].onmousedown=function(){
		this.setAttribute('style','background: -webkit-linear-gradient(#747f84,#979b9f);'+'background: -moz-linear-gradient(#747f84,#979b9f);'+'background: -ms-linear-gradient(#747f84,#979b9f);');
	};
	baseopt[i].onmouseup=function(){
		this.setAttribute('style','background: -webkit-linear-gradient(#979b9f,#747f84);'+'background: -moz-linear-gradient(#979b9f,#747f84);'+'background: -ms-linear-gradient(#979b9f,#747f84);');
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
		var content1 = queue[index];
		if (index < queue.length-1 && index > 0)			//队列为1+2
		{
			switch(true)
			{
				case content=='+' || content=='-' || content=='*' || content=='/' : 
					var op1 = queue.slice(0,index).join('');
					var op2 = queue.slice(index+1).join('');
					result = eval(op1+queue[index]+op2);
					queue.splice(0);
					queue.push(result);
					point = '';
					index = queue.push(content)-1;
					if (result.toString().length >8)
					{
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
					break;
				case content=='=': 
					var op1 = queue.slice(0,index).join('');
					var op2 = queue.slice(index+1).join('');
					result = eval(op1+queue[index]+op2);
					queue.splice(0);
					queue.push(result);
					point = '';
					index = '';
					if (result.toString().length >8)
					{
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
					break;
				case content=='+/-':
					if (queue[index+1] == '-'){
						queue.splice(index+1,1)
					}
					else{
						queue.splice(index+1,0,'-')
					}
					var result1 = queue.slice(index+1).join('');
					if (result1.toString().length >8)
					{
						result1 = result1.toPrecision(8);
					}
					screen.innerHTML = result1;
					break;
				case content=='1/x': 
					var op1 = Number(queue.splice(index+1).join(''));
					result = 1/op1;
					queue.push(result);
					if (result.toString().length >8)
					{
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
					break;
				case content=='%': 
					var op1 = Number(queue.splice(index+1).join(''));
					result = op1/100;
					queue.push(result);
					if (result.toString().length >8)
					{
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
					break;
				case content=='√': 
					var op1 = Number(queue.splice(index+1).join(''));
					result = Math.sqrt(op1);
					queue.push(result);
					if (result.toString().length >8)
					{
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
					break;
				case content=='sin':
					var op1 = Number(queue.splice(index+1).join(''));
					result = Math.sin(op1);
					queue.push(result);
					if (result.toString().length >8)
					{
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
					break;
				case content=='cos': 
					var op1 = Number(queue.splice(index+1).join(''));
					result = Math.cos(op1);
					queue.push(result);
					if (result.toString().length >8)
					{
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
					break;
				case content == "全清": 					//全部清除数据
					queue.splice(0);
					index = '';
					point = '';
					result= '';
					screen.innerHTML='0';
					break;
				case content == "清屏":
					queue.splice(index+1);
					screen.innerHTML='0';
					break;
				case content =="X" :
					queue.pop();
					screen.innerHTML= queue.slice(index+1).join('');
					break;
				case content == ".":
					if (point<=index){
						queue.push(content);
						point = index +1;
					}
					screen.innerHTML = queue.slice(index+1).join('');
					break;
				case content == '0':
					if (queue[index+1] != '0' && queue.slice(index+1).length< 9) {
						queue.push(content);
						screen.innerHTML = queue.slice(index+1).join('');
					}
					else if (queue[index+2] == '.' && queue.slice(index+1).length< 9) {
						queue.push(content);
						screen.innerHTML = queue.slice(index+1).join('');
					}
				default:
					if (queue.slice(index+1).length< 9)
					{
						queue.push(content);
						screen.innerHTML = queue.slice(index+1).join('');
					}
					break;
			}
		}
		else if (index == '' && queue.length > 0)			//队列为12
		{
			switch(true)
			{
				case content=='+' || content=='-' || content=='*' || content=='/' : 
					index = queue.push(content)-1;
					screen.innerHTML = queue.slice(0,index).join('');
					break;
				case content=='+/-':
					queue.splice(0,0,'-');
					var result1 = queue.join('');
					if (result1.toString().length >8)
					{
						result1 = result1.toPrecision(8);
					}
					screen.innerHTML = result1;
					break;
				case content=='1/x': 
					var op1 = Number(queue.join(''));
					result = 1/op1;
					queue.push(result);
					if (result.toString().length >8)
					{
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
					break;
				case content=='%': 
					var op1 = Number(queue.join(''));
					result = op1/100;
					queue.push(result);
					if (result.toString().length >8)
					{
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
					break;
				case content=='√': 
					var op1 = Number(queue.join(''));
					result = Math.sqrt(op1);
					queue.push(result);
					if (result.toString().length >8)
					{
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
					break;
				case content=='sin':
					var op1 = Number(queue.join(''));
					result = Math.sin(op1);
					queue.push(result);
					if (result.toString().length >8)
					{
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
					break;
				case content=='cos': 
					var op1 = Number(queue.join(''));
					result = Math.cos(op1);
					queue.push(result);
					if (result.toString().length >8)
					{
						result = result.toPrecision(8);
					}
					screen.innerHTML = result;
					break;
				case content == "全清": 					//全部清除数据
					queue.splice(0);
					point = '';
					result= '';
					screen.innerHTML='0';
					break;
				case content == "清屏":
					queue.splice(0);
					result = '';
					screen.innerHTML='0';
					break;
				case content =="X" :
					queue.pop();
					result = '';
					screen.innerHTML= queue.join('');
					break;
				case content == ".":
					if (point == ''){
						queue.push(content);
						point = 1;
					}
					screen.innerHTML = queue.join('');
					break;
				case content == '0':
					if (queue[0] != '0' && queue.length< 9) {
						queue.push(content);
						screen.innerHTML = queue.join('');
					}
					else if (queue[1] == '.' && queue.length< 9) {
						queue.push(content);
						screen.innerHTML = queue.join('');
					}
				case content == "=":
					break;
				default:
					if (queue.length< 9)
					{
						queue.push(content);
						screen.innerHTML = queue.join('');
					}
					break;
			}
		}
		else if (index == queue.length-1)					//队列为1+
		{
			if (Number(content) >=0)
			{
				queue.push(content);
				screen.innerHTML = queue.slice(index+1).join('');
			}
			else if (content == "全清")
			{
				queue.splice(0);
				point = '';
				result= '';
				screen.innerHTML='0';
			}
			else if (content == "清屏")
			{
				queue.splice(0);
				screen.innerHTML='0';
			}
			else if (content == "X")
			{
				queue.pop();
				screen.innerHTML= queue.join('');
			}
		}
		else												//队列为空
		{
			if (Number(content) >=0)
			{
				queue.push(content);
				screen.innerHTML = queue.join('');
			}
		}

	}
}


























