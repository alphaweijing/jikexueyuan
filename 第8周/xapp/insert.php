<?php
	header("Content-Type: text/html;charset=utf-8");
	// 创建连接
	$conn = new mysqli("localhost","root", "", 'baidunews');
	// 检测连接
	if ($conn->connect_error) {
	    die("连接失败: " . $conn->connect_error);
	}
	mysqli_query($conn,"set names 'utf8'");
	$sql="INSERT INTO news (newstype, newstitle, newsimg, newstime)VALUES ('".$_POST['type']."','".$_POST['title']."', '".$_POST['img']."', '".$_POST['time']."')";
	if(mysqli_query($conn,$sql)){
		echo json_encode(array('msg'=>"保存成功"));
	}else{
		echo json_encode(array('msg'=>"保存失败"));
	}
	mysqli_close($conn);
?>
