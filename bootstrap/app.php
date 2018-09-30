<?php
session_start();

require __DIR__ . '/../vendor/autoload.php';


$app = new \Slim\app([

	'settings' => [

		'displayErrorDetails' => true,

		]

]);

require __DIR__ . '/../app/routes.php';