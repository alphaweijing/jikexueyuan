<?php
	require('head.php');
	$sql="delete from news where id=".$_POST['id'];
	if(mysql_query($sql)){
		echo json_encode(array("msg"=>"删除成功"));
	}else{
		echo json_encode(array("msg"=>"删除成功"));
	}
	mysql_close($conn);
?>