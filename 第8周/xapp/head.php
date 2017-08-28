<?php
	header("Content-Type: text/html;charset=utf-8");
	// 创建连接
	$conn =mysql_connect("localhost","root", "");

	// 检测连接
	if (!$conn) {
	    die('Could not connect: ' . mysql_error());
	}
	mysql_select_db("baidunews",$conn);
	mysql_query("set names 'utf8'");
?>