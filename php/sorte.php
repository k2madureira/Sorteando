<?php
	
	
	$x1  = $_POST ['x1']; /* DE (x1) A (X2) MENOS (y) */
	$x2  = $_POST['x2'];
	$y 	 = $_POST['y'];


	$num = rand($x1,$x2);
	echo $num;

?>