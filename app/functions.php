<?php

function connectToDB(){
	$db_host = "localhost";
	$db_user = "root";
	$db_password ="";
	$msqli = new MySQLi ($db_host, $db_user, $db_password, 'cartridges');
	$msqli->set_charset('UTF8');
	return($msqli);
}

function checkId($tabName, $conn, $field){
	$chek = true;
		$l=$conn->query("SELECT cart_id FROM $tabName WHERE cart_id = '$field'");
		$count = $l->num_rows;
		if ($count >0) {
			$chek=false;
			return $chek;
		} 
	return $chek;
}
function currentStatusName($id){
	$mysqli=connectToDB();
	$db_table = 'statuses';
	$l=$mysqli->query("SELECT id, name FROM $db_table WHERE id = $id");
	$row = $l->fetch_assoc();
	return $row;
}
function currentStatus($id){
	$mysqli=connectToDB();
	$db_table = 'cartridges';
	$q=$mysqli->query("SELECT current_status FROM $db_table WHERE id = $id");
	$row = $q->fetch_assoc();
	return $row;
}
function nextStatuses($id){
	$mysqli=connectToDB();
	$row=currentStatus($id);
  	$currentStatus=$row['current_status'];
 	$query=$mysqli->query("SELECT * FROM altOfStatuses WHERE currentStatus = '$currentStatus'");
 	$result=$query->fetch_assoc();
	return $result;
}
