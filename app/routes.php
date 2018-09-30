<?php

$app->post('/auth', function(){
session_start();
ini_set('display_errors',1);
error_reporting(E_ALL);
include 'functions.php';
$sn=session_name("cartridges");
$mysqli=connectToDB();
$user = $_POST['login'];
$pass = md5($_POST['password']);
$res='0';
$db_table = 'users';
$querry=$mysqli->query("SELECT name, pass FROM $db_table WHERE name = '$user'");
$row = $querry->fetch_assoc();
if ($row){
	if ($user == $row['name'] && $pass == $row['pass']){
		$res='1';
		$_SESSION['name']=$user;
	}elseif ($user == $row['name']) {
		$res='2';
	}
}
$mysqli->close();
$res=json_encode($res);
echo $res;
});

$app->post('/byserial', function(){
ini_set('display_errors',1);
error_reporting(E_ALL);
// $sn=session_name("cartridges");
// session_start();
// if (!isset($_SESSION['name'])){
// 	$k[0] = array ('name' =>'noauth');
// 	$jk=json_encode($k);
// 	print_r($jk);
// 	return;
// }
include 'functions.php';
$mysqli=connectToDB();
$serial = $_POST['serial'];
$cart = array();
$db_table = 'actions';
$query1=$mysqli->query("SELECT cartridge_id, cartridgeName, status_id, date FROM $db_table WHERE cartridge_id = '$serial'");
$row = mysqli_fetch_assoc($query1);
$mysqli->close();
$res1=json_encode($row);
print_r($res1);
});

$app->post('/changestatuscart', function(){

ini_set('display_errors',1);
error_reporting(E_ALL);
// $sn=session_name("cartridges");
// session_start();
// if (!isset($_SESSION['name'])){
// 	$k[0] = array ('name' =>'noauth');
// 	$jk=json_encode($k);
// 	print_r($jk);
// 	return;
// }
include 'functions.php';
$cid = $_POST['cid'];
$mysqli=connectToDB();
$statuses = array();
$id_cart_query=$mysqli->query("SELECT  id FROM cartridges WHERE cart_id='$cid'");
$id_cart=$id_cart_query->fetch_assoc();
$nextStatuses = nextStatuses($id_cart['id']);

$i = 1;
$ii=0;
while ( $i < count($nextStatuses) ) {
	$j='st'.$i;
	if ($nextStatuses[$j] != 0){

		$statuses[$ii]=currentStatusName($i);
		
		
		$ii++;
	    
	}
	$i++;
}
$jk=json_encode($statuses);
print_r($jk);

});

$app->post('/writenewstatus', function(){
	ini_set('display_errors',1);
	error_reporting(E_ALL);

	// $table = $_POST['table'];
	// $brand = $_POST['brand'];
	$newStatus = $_POST['newStatus'];
	$name = $_POST['name'];
	$cartr_id = $_POST['cartridge_id'];
	$date =  date("Ymd");


	include 'functions.php';
	$mysqli=connectToDB();

	$res = $mysqli->query("INSERT INTO actions (cartridge_id, cartridgeName, date, status_id) VALUES ('$cartr_id', '$name', '$date', '$newStatus')");
	


	$current_status = (int) $newStatus;



	$db_table='cartridges';

	$cs = $mysqli->query("UPDATE $db_table SET  current_status= '$newStatus' WHERE cart_id = '$cartr_id'");

	$resp=json_encode('ok');
	echo $resp;
	$mysqli->close();
});




