
function rank(){
	var x = document.getElementById("score");
	switch(true){
		case x.value>=90 && x.value <100 :
			alert("1等生");
			break;
		case x.value>=80 && x.value <90 :
			alert("2等生");
			break;
		case x.value>=70 && x.value <80 :
			alert("3等生");
			break;
		case x.value>60 && x.value <70 :
			alert("4等生");
			break;
		default :
			alert("不及格");
	}
}