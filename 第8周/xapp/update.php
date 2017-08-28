<?php
	require('head.php');
	$sql="update news set newstype='".$_POST['type']."',newstitle='".$_POST['title']."',newsimg='".$_POST['img']."',newstime='".$_POST['time']."' where id=".$_POST['id'];
	if(mysql_query($sql)){
		echo json_encode(array("msg"=>"修改成功"));
	}else{
		echo json_encode(array("msg"=>"修改失败"));
	}
	mysql_close($conn);
?>