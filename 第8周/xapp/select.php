<?php
	require('head.php');
	if($_POST['type']!=''){
		$sql="select * from news where newstype='".$_POST['type']."'";
	}else{
		$sql="select * from news";
	}
	$result = mysql_query($sql);
	$arr=array();
 	$i=0;
	while($row=mysql_fetch_array($result)){
		$arr[$i]=array("id"=>$row["id"],"type"=>$row["newstype"],"title"=>$row["newstitle"],"img"=>$row["newsimg"],"time"=>$row["newstime"]);
		$i++;

	}
	echo json_encode($arr);
	mysql_close($conn);
?>