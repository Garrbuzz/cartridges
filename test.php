<?php
ini_set('display_errors',1);
error_reporting(E_ALL);
$sn=session_name("cartridges");
session_start();
// if (!isset($_SESSION['name'])){
// 	$k[0] = array ('name' =>'noauth');
// 	$jk=json_encode($k);
// 	print_r($jk);
// 	return;
// }
include '/app/functions.php';
$mysqli=connectToDB();
$serial = 's001';
$cart = array();
$db_table = 'actions';
$query=$mysqli->query("SELECT cartridge_id, cartridgeName, status_id, date FROM $db_table WHERE cartridge_id = '$serial'");

while ($row = $query->fetch_assoc()) { 
 	$cart[0] = $row;
}
$jk=json_encode($cart);
print_r($jk);
?>