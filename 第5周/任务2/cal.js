function cal(){
	//取操作数和操作符
	var number1=document.getElementById("number1");
	var number2=document.getElementById("number2");
	var number3=document.getElementById("number3");
	var opt=document.getElementById("opt");
	//除数为0判断
	if (opt.value == "/" && number2.value == 0)
	  {
			alert("除数不能为0!");
	  }
	else
	  {
			number3.value= eval(number1.value + opt.value + number2.value);
	  }
}